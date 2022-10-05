from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

import pandas as pd

import warnings

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

import json
# Create your views here.

@api_view(["GET"])
def recommList(request, aztiType):
    warnings.filterwarnings('ignore')
    print(request)
    if request.method == 'GET':

        elements = ['terrace', 'drinking', 'meal', 'lunch', 'dinner', 'cost_effective', 'classy', 'mood', 'noisy', 'quiet', 'real_local']
        restos_data = pd.read_csv('recommend/restodata_list.csv')
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

        print(similar_restos)
        result = similar_restos.to_json(orient='records')
        data = {
            'recommendList': result,
        }
        return HttpResponse(data, content_type='application/json')

def recomm(request):
    pass
