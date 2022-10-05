from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

import pandas as pd

import warnings

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from recommend.recom.knn import selectOldAllRestaurant 
from recommend.recom.knn import *

import random
import json
# Create your views here.

def restoAzti(aztitype):
    aztiList = ['mcis', 'dcis', 'mnis', 'dnis', 'mchs', 'dchs','mnhs', 'dnhs', 'mchc', 'dchc', 'mnhc', 'dnhc', 'mcic', 'dcic', 'mnic', 'dnic']
    text = ''
    if aztitype in aztiList:
        if aztitype[0] == 'm':
            text += 'terrace > 0'
        else:
            text += 'terrace = 0'

        if aztitype[1] == 'c':
            text += ' and cost_effective > 0'
        else:
            text += ' and cost_effective = 0'

        if aztitype[2] == 'h':
            text += ' and real_local > 0'
        else:
            text += ' and real_local = 0'

        if aztitype[3] == 's':
            text += ' and drinking > 0'
        else:
            text += ' and drinking = 0'
    
    result = aztiRestaurants(text)
    if len(result) == 0:
        text = 'terrace > 0'
        result = aztiRestaurants(text)
    return result

def CbfList(aztiType):
    warnings.filterwarnings('ignore')

    elements = ['terrace', 'drinking', 'meal', 'lunch', 'dinner', 'cost_effective', 'classy', 'mood', 'noisy', 'quiet', 'real_local']
    restos_data = selectOldAllRestaurant()
    for i in range(len(restos_data)):
        try:
            restos_data.loc[i, 'etc'] = restos_data.loc[i, 'etc'].replace(' ' , '').replace(',', ' ')
        except:
            restos_data.loc[i, 'etc'] = ''

        for element in elements:
            if restos_data.loc[i, element] == 'NaN':
                continue
            elif restos_data.loc[i, element] >= 1:
                restos_data.loc[i, 'etc'] += ' ' + element

    count_vect = CountVectorizer(min_df=0, ngram_range=(1, 2))
    cat_mat = count_vect.fit_transform(restos_data['etc'])

    cat_sim = cosine_similarity(cat_mat, cat_mat)

    def find_sim_resto(df, sim_matrix, title_name, top_n=10):
        
        # 입력한 영화의 index
        title_movie = df[df['resto_name'] == title_name]
        title_index = title_movie.index.values
        
        # 입력한 영화의 유사도 데이터 프레임 추가
        df["similarity"] = sim_matrix[title_index, :].reshape(-1,1)
        
        # 유사도 내림차순 정렬 후 상위 index 추출
        temp = df.sort_values(by="similarity", ascending=False)
        final_index = temp.index.values[ : top_n]
        
        return df.iloc[final_index]

    azti_result = restoAzti(aztiType)
    request_title = azti_result[0]['resto_name']
    request_num = 10

    similar_restos = find_sim_resto(restos_data, cat_sim, request_title, request_num)

    result_cbf = similar_restos.to_dict(orient='records')
    restoId = result_cbf[0]['id']

    result = getItemBasedCF(restoId)
    id_list = tuple(result.index.values)
    result_cf = IdOldRestaurant(id_list)
    
    data = result_cbf + result_cf
    return data


@api_view(["GET"])
def recommCbfList(request, aztiType):
    warnings.filterwarnings('ignore')

    if request.method == 'GET':
        elements = ['terrace', 'drinking', 'meal', 'lunch', 'dinner', 'cost_effective', 'classy', 'mood', 'noisy', 'quiet', 'real_local']
        restos_data = selectOldAllRestaurant()
        for i in range(len(restos_data)):
            try:
                restos_data.loc[i, 'etc'] = restos_data.loc[i, 'etc'].replace(' ' , '').replace(',', ' ')
            except:
                restos_data.loc[i, 'etc'] = ''

            for element in elements:
                if restos_data.loc[i, element] == 'NaN':
                    continue
                elif restos_data.loc[i, element] >= 1:
                    restos_data.loc[i, 'etc'] += ' ' + element

        count_vect = CountVectorizer(min_df=0, ngram_range=(1, 2))
        cat_mat = count_vect.fit_transform(restos_data['etc'])

        cat_sim = cosine_similarity(cat_mat, cat_mat)

        def find_sim_resto(df, sim_matrix, title_name, top_n=10):
            
            # 입력한 영화의 index
            title_movie = df[df['resto_name'] == title_name]
            title_index = title_movie.index.values
            
            # 입력한 영화의 유사도 데이터 프레임 추가
            df["similarity"] = sim_matrix[title_index, :].reshape(-1,1)
            
            # 유사도 내림차순 정렬 후 상위 index 추출
            temp = df.sort_values(by="similarity", ascending=False)
            final_index = temp.index.values[ : top_n]
            
            return df.iloc[final_index]

        azti_result = restoAzti(aztiType)
        request_title = azti_result[0]['resto_name']
        request_num = 10

        similar_restos = find_sim_resto(restos_data, cat_sim, request_title, request_num)

        result = similar_restos.to_dict(orient='records')
        print(result)
        print(type(result))
        data = {
            'recommendCbfList': result,
        }
        return HttpResponse(json.dumps(data), content_type='application/json')

@api_view(['GET'])
def recommCfList(request, restoId):
    result = getItemBasedCF(restoId)
    id_list = tuple(result.index.values)
    data = {
        'recommendCfList': IdOldRestaurant(id_list)
    }
    return HttpResponse(json.dumps(data), content_type='application/json')

@api_view(['GET'])
def recommMfList(request, userId):
    result = mfRecomm(userId)
    id_List = tuple(result.values)
    data = {
        'recommendMfList' : IdOldRestaurant(id_List)
    }
    return HttpResponse(json.dumps(data), content_type='application/json')

@api_view(['GET'])
def restoList(request, userId, aztiType):
    liked_num = selectLiked(userId)[0]['COUNT(*)']

    result = mfRecomm(userId)
    id_List = tuple(result.values)
    
    result_mf = IdOldRestaurant(id_List)
    result_cbf = CbfList(aztiType)
    result_random = OldRestaurantRandom()

    answer = result_random
    if liked_num == 0:
        answer += result_cbf[:8]

    elif liked_num <= 5:
        answer += result_cbf[:5]
        answer += result_mf[:3]

    elif 6 <= liked_num <= 15:
        answer += result_cbf[:4]
        answer += result_mf[:4]

    elif 16 <= liked_num <= 30:
        answer += result_cbf[:3]
        answer += result_mf[:5]

    elif 31 <= liked_num:
        answer += result_cbf[:1]
        answer += result_mf[:7]

    data = {
        'recomList': answer
    }

    return HttpResponse(json.dumps(data), content_type='application/json')  