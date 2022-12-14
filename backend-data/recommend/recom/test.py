from re import U
from database import *
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

def selectOldRestaurant():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT id, resto_name FROM old_restaurant"""
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
    # ?????????-????????? ????????? ???????????? ??????
    matrix_user_mean = matrix - user_ratings_mean.reshape(-1, 1)

    # svd
    U, sigma, Vt = svds(matrix_user_mean, k=1)
    # 0??? ????????? ??????????????? ??????
    sigma = np.diag(sigma)
    # ?????? ?????? ????????? ??????
    svd_user_predicted_ratings = np.dot(np.dot(U,sigma), Vt) + user_ratings_mean.reshape(-1, 1)
    # ????????? ???????????? ?????? ????????????
    df_svd_preds = pd.DataFrame(svd_user_predicted_ratings, columns=user_resto_rating.columns, index=user_resto_rating.index)

    return df_svd_preds

def mfRecomm(userId):
    resto_data = selectOldRestaurant()
    visited_data = selectVisitedRestos(userId)
    # userId ???????????? ?????? ?????? ????????? ??????
    sorted_user_prediction = getSvdPred().loc[userId].sort_values(ascending=False)
    # review data?????? userId??? ?????? ????????????
    user_data = selectReviewByUserId(userId)
    # user_data??? ?????? ????????? ?????????
    user_history = user_data.merge(resto_data, left_on='resto_id', right_on='id').sort_values(['rating'], ascending=False)
    # ?????? ?????? ??????????????? ?????? ?????? ??? ??????
    recommendation = resto_data[~resto_data['id'].isin(user_history['resto_id'])]
    # ?????? ??? ??????
    recommendation = resto_data[~resto_data['id'].isin(visited_data['resto_id'])]
    # ?????? ?????? ????????? ????????? ???????????? ?????????
    recommendation = recommendation.merge(pd.DataFrame(sorted_user_prediction).reset_index(), left_on='id', right_on='resto_id')
    print(recommendation)
    sort_column = recommendation.columns[-1]
    recommendation = recommendation.sort_values(by=sort_column, ascending=False)
    print(recommendation)
    print(sort_column)
    result = recommendation['id'][:10]
    return result
    return recommendation['id'].sort_values(ascending=False)[:10]

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

def getItemBasedCF(restoId):
    return makeReviewRestoVector()[restoId].sort_values(ascending=False)[1:16]

print(mfRecomm("250"))