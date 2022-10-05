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
# azti_dic = {
#     mcis: "감성 알뜰 인싸 주당",
#     dcis: "현실 알뜰 인싸 주당",
#     mnis: "감성 호탕 인싸 주당",
#     dnis: "현실 호탕 인싸 주당",
#     mchs: "감성 알뜰 힙스터 주당",
#     dchs: "현실 알뜰 힙스터 주당",
#     mnhs: "감성 호탕 힙스터 주당",
#     dnhs: "현실 호탕 힙스터 주당",
#     mchc: "감성 알뜰 힙스터 술린이",
#     dchc: "현실 알뜰 힙스터 술린이",
#     mnhc: "감성 호탕 힙스터 술린이",
#     dnhc: "현실 호탕 힙스터 술린이",
#     mcic: "감성 알뜰 인싸 술린이",
#     dcic: "현실 알뜰 인싸 술린이",
#     mnic: "감성 호탕 인싸 술린이",
#     dnic: "현실 호탕 인싸 술린이",
# }

# 감성 : 'mood', 'terrace'
# 지역주민 : 'real_local'
# 술 : 'drinking'
# 가성비 : 'cost_effective'

def restoAzti(aztitype):
    aztiList = ['mcis', 'dcis', 'mnis', 'dnis', 'mchs', 'dchs','mnhs', 'dnhs', 'mchc', 'dchc', 'mnhc', 'dnhc', 'mcic', 'dcic', 'mnic', 'dnic']
    if aztitype in aztiList:
        if aztitype[0] == 'm':
            pass
        aztitype[1]
        aztitype[2]
        aztitype[3]

        pass

@api_view(["GET"])
def recommCbfList(request, aztiType):
    restoAzti(aztiType)
    warnings.filterwarnings('ignore')
    print(request)
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

        request_title = '황소곱창'
        request_num = 10

        similar_restos = find_sim_resto(restos_data, cat_sim, request_title, request_num)

        result = similar_restos.to_dict(orient='records')
        print(result)
        print(type(result))
        data = {
            'recommendCbfList': result,
        }
        # print(data)
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
