from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.tools import argparser
from pprint import pprint
import pandas as pd
import re

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

pprint(playlists)

playlistitems_list_request = youtube.playlistItems().list(
    playlistId = 'PLCNYoGrzVJuUWTlwZ2CH9nfQF08959pIj',
    part = 'snippet',
    maxResults = 50
)

video_ids = []
video_description = []
video_titles = []
video_info_title = []
video_info_location = []

while playlistitems_list_request:
    playlistitems_list_response = playlistitems_list_request.execute()

    for item in playlistitems_list_response['items']:
        title = item['snippet']['title']
        description = item['snippet']['description']
        video_id = item['id']
        info = description.split('\n')
        
        
        video_info_title.append(info[1])
        video_info_location.append(info[2])
        video_titles.append(title)
        video_description.append(description)
        video_ids.append(video_id)
    
    playlistitems_list_request = youtube.playlistItems().list_next(
        playlistitems_list_request, playlistitems_list_response
    )

video_df = pd.DataFrame()
video_df['video_title'] = video_titles
video_df['video_id'] = video_ids
video_df['video_description'] = video_description
video_df['video_info_title'] = video_info_title
video_df['video_info_location'] = video_info_location


print(video_df)