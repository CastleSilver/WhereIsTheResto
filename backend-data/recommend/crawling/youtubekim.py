#-*- coding:utf-8 -*-
import urllib3
import json
from googleapiclient.discovery import build
from pprint import pprint
import pandas as pd
import re
import requests
from bs4 import BeautifulSoup

# pip install --upgrade google-api-python-client
# pip install --upgrade google-auth-oauthlib google-auth-httplib2
# pip install oauth2client
# pip install pandas

# https://console.cloud.google.com/apis/credentials 여기서 API발급받아 사용
DEVELOPER_KEY='AIzaSyA1IvoD6CLeYQZDVWlgkTFLdZjt0OPJQyk'
YOUTUBE_API_SERVICE_NAME='youtube'
YOUTUBE_API_VERSION='v3'

youtube=build(YOUTUBE_API_SERVICE_NAME,YOUTUBE_API_VERSION,developerKey=DEVELOPER_KEY)

playlists = youtube.playlists().list(
    channelId = 'UC-x55HF1-IilhxZOzwJm7JA',
    part = 'snippet',
    maxResults = 10
).execute()

# pprint(playlists)

playlistitems_list_request = youtube.playlistItems().list(
    playlistId = 'PLCNYoGrzVJuUWTlwZ2CH9nfQF08959pIj',
    part = 'snippet',
    maxResults = 50
)

video_ids = []
video_titles = []
video_info_title = []
video_info_location = []
video_info_tag = []

while playlistitems_list_request:
    playlistitems_list_response = playlistitems_list_request.execute()

    for item in playlistitems_list_response['items']:
        title = item['snippet']['title']
        description = item['snippet']['description']
        video_id = item['snippet']['resourceId']['videoId']
        info = description.split('\n')
        
        video_info_title.append(info[1])
        video_info_location.append(info[2])
        video_titles.append(title)
        video_ids.append(video_id)

        url = f'https://www.youtube.com/watch?v={video_id}'
        html = requests.get(url)
        soup = BeautifulSoup(html.text, 'lxml')
        tagarray= []
        taglist = soup.select('meta[property= "og:video:tag"]')

        for tagitem in taglist:
            tagarray.append(tagitem['content'])
        video_info_tag.append(tagarray)
    
    playlistitems_list_request = youtube.playlistItems().list_next(
        playlistitems_list_request, playlistitems_list_response
    )

video_df = pd.DataFrame()
video_df['video_title'] = video_titles
video_df['video_id'] = video_ids
video_df['video_info_title'] = video_info_title
video_df['video_info_location'] = video_info_location
video_df['video_info_tag'] = video_info_tag

video_df.to_csv("video_list.csv", mode='w', encoding='utf8')
# 여기까지가 김사원 세끼 서울 지역 노포 정보 불러오기
# 아래부터는 영상에 대한 댓글 api

comments = []

comment_list_response = youtube.commentThreads().list(
    videoId = video_ids[1],
    order = 'relevance',
    part = 'snippet,replies',
    maxResults = 100
).execute()

while comment_list_response:
    for item in comment_list_response['items']:
        comment = item['snippet']['topLevelComment']['snippet']
        comments.append([comment['textDisplay'], comment['authorDisplayName'], comment['likeCount']])

    if item['snippet']['totalReplyCount'] > 0:
        for reply_item in item['replies']['comments']:
            reply = reply_item['snippet']
            comments.append([reply['textDisplay'], reply['authorDisplayName'], reply['likeCount']])
    
    if 'nextPageToken' in comment_list_response:
        comment_list_response = youtube.commentThreads().list(
            videoId = video_ids[1],
            order = 'relevance',
            part = 'snippet,replies',
            pageToken = comment_list_response['nextPageToken'],
            maxResults = 100
        ).execute()
    else:
        break

comment_df = pd.DataFrame(comments)
comment_df.columns = ['comment', 'author', 'like']

comment_df.to_csv("comment_list.csv", mode='w', encoding='utf8')



