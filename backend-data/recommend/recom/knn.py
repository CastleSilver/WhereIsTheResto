from sqlite3 import connect
from database import *
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

def selectReview():
    connection, cursor = connectMySQL()
    cursor = connection.cursor()
    sql = """SELECT user_id, resto_id, rating FROM review"""
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
    return makeReviewRestoVector()[restoId].sort_values(ascending=False)[:15]