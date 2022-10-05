from re import U
from sqlite3 import connect
from recommend.recom.database import *
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from scipy.sparse.linalg import svds

def recur_dictify(frame):
    if len(frame.columns) == 1:
        if frame.values.size == 1: return frame.values[0][0]
        return frame.values.squeeze()
    grouped = frame.groupby(frame.columns[0])
    d = {k: recur_dictify(g.iloc[:,1:]) for k, g in grouped}
    return d

def selectUser(id, connect, curs):
    query = """SELECT * FROM user WHERE id = %s"""
    curs.execute(query, (id))
    user = curs.fetchone()
    user_info = {}
    fields = ['id', 'nickname', 'email', 'gender', 'profile_image', 'role', 'aztiType']
    for (field, info) in zip(fields, user):
        user_info[field] = info
    return user_info

def selectLiked(userId):
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = f"SELECT COUNT(*) FROM nopo_db.liked WHERE user_id={userId}"
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    return result

def selectReview():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT user_id, resto_id, rating FROM review"""
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    df = pd.DataFrame(result)
    return df

def selectReviewByUserId(userId):
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = f"SELECT user_id, resto_id, rating FROM review WHERE user_id = {userId}"
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    df = pd.DataFrame(result)
    return df

def OldRestaurantRandom():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()

    sql = "SELECT * FROM nopo_db.old_restaurant ORDER BY RAND() LIMIT 2"
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    # df = pd.DataFrame(result)
    return result

def IdOldRestaurant(idList):
    connection, cursor = connectMySQL()
    cursor = connection.cursor()

    sql = f"SELECT * FROM nopo_db.old_restaurant WHERE id in {idList}"
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    # df = pd.DataFrame(result)
    return result

def aztiRestaurants(text):
    connection, cursor = connectMySQL()
    cursor = connection.cursor()

    sql = f"SELECT * FROM old_restaurant LEFT OUTER JOIN element ON old_restaurant.ele_id = element.id WHERE {text}"
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    # df = pd.DataFrame(result)
    return result

def selectOldRestaurant():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT id, resto_name FROM old_restaurant"""
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    df = pd.DataFrame(result)
    return df

def selectOldAllRestaurant():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT * FROM old_restaurant LEFT OUTER JOIN element ON old_restaurant.ele_id = element.id"""
    cursor.execute(sql)
    
    result = cursor.fetchall()
    connection.close()
    df = pd.DataFrame(result)
    return df

def selectVisitedRestos(userId):
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT resto_id FROM visited where user_id like %s"""
    cursor.execute(sql, (userId))
    
    result = cursor.fetchall()
    connection.close()
    df = pd.DataFrame(result)
    return df

def getSvdPred():
    review_data = selectReview()
    resto_data = selectOldRestaurant()
    # user_resto_rating = pd.merge(review_data, resto_data, left_on="resto_id", right_on="id")

    # make pivot table
    user_resto_rating = review_data.pivot_table(index="user_id", columns="resto_id", values="rating").fillna(0)
    # pivot table to numpy matrix
    matrix = user_resto_rating.to_numpy()
    user_ratings_mean = np.mean(matrix, axis=1)
    # 사용자-영화에 사용자 평균평점 빼기
    matrix_user_mean = matrix - user_ratings_mean.reshape(-1, 1)

    # svd
    U, sigma, Vt = svds(matrix_user_mean, k=1)
    # 0이 포함된 대칭행렬로 변환
    sigma = np.diag(sigma)
    # 다시 원본 행렬로 복원
    svd_user_predicted_ratings = np.dot(np.dot(U,sigma), Vt) + user_ratings_mean.reshape(-1, 1)
    # 사용자 평균평점 다시 더해주기
    df_svd_preds = pd.DataFrame(svd_user_predicted_ratings, columns=user_resto_rating.columns, index=user_resto_rating.index)

    return df_svd_preds

def makeReviewRestoVector():
    review_data = selectReview()
    resto_data = selectOldRestaurant()
    user_resto_rating = pd.merge(review_data, resto_data, left_on="resto_id", right_on="id", how="outer")

    # make pivot table
    resto_user_rating = user_resto_rating.pivot_table('rating', index="id", columns="user_id")
    user_resto_rating = user_resto_rating.pivot_table('rating', index="user_id", columns="resto_id")

    # NaN to null
    resto_user_rating.fillna(0, inplace=True)

    # cosine similarity
    item_based_collab = cosine_similarity(resto_user_rating)
    item_based_collab = pd.DataFrame(data = item_based_collab, index=resto_user_rating.index, columns=resto_user_rating.index)
    return item_based_collab


def mfRecomm(userId):
    resto_data = selectOldRestaurant()
    print(userId)
    visited_data = selectVisitedRestos(userId)
    # userId 기준으로 평점 높은 순으로 정렬
    sorted_user_prediction = getSvdPred().loc[userId].sort_values(ascending=False)
    # review data에서 userId의 정보 가져오기
    user_data = selectReviewByUserId(userId)
    # user_data와 노포 데이터 합치기
    user_history = user_data.merge(resto_data, left_on='resto_id', right_on='id').sort_values(['rating'], ascending=False)
    # 원본 노포 데이터에서 리뷰 남긴 곳 제외
    recommendation = resto_data[~resto_data['id'].isin(user_history['resto_id'])]
    # 가본 곳 제외
    recommendation = resto_data[~resto_data['id'].isin(visited_data['resto_id'])]
    # 평점 높은 순으로 정렬한 데이터와 합치기
    recommendation = recommendation.merge(pd.DataFrame(sorted_user_prediction).reset_index(), left_on='id', right_on='resto_id')
    print(recommendation.columns)
    print(recommendation)
    sort_column = recommendation.columns[-1]
    print(sort_column)
    recommendation = recommendation.sort_values(by=sort_column, ascending=False)
    result = recommendation['id'][:10]
    return result

def getItemBasedCF(restoId):
    return makeReviewRestoVector()[restoId].sort_values(ascending=False)[1:16]

