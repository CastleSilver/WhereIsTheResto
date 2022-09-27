import requests
from bs4 import BeautifulSoup as bs
import re


# dining_url = f"https://diningcode.com/profile.php?rid=ivVJTVrMzkg7"
# page = requests.get(dining_url)
# soup = bs(page.text, "lxml")

# restro_star = soup.find('div', attrs={"class": "s-list appraisal"}).find('p', attrs={"class": "tit"}).get_text()
# restro_name = soup.find('div', attrs={"class": "tit-point"}).get_text()
# restro_hours = soup.find('div', attrs={"class": "busi-hours short"}).find('p', attrs={"class": "r-txt"}).get_text()
# restro_menus = soup.find('ul', attrs={"class": "list Restaurant_MenuList"}).findAll('li')
# restro_artis = soup.find('ul', attrs={"class": "app-arti"}).findAll('p', {"class": "icon"})
# restro_arti_list = []
# restro_menu_dic = {}
# for restro_arti in restro_artis:
#     restro_arti_list.append(restro_arti.get_text())

# for restro_menu in restro_menus:
#     key = restro_menu.find("span", attrs={"class": "Restaurant_Menu"}).get_text()
#     value = restro_menu.find("p", attrs={"class": "r-txt Restaurant_MenuPrice"}).get_text()
#     restro_menu_dic[key] = value

# print("--------------------------------------------------------------------------")
# print(f"레스토랑 이름: {restro_name}")
# print(f"레스토랑 별점: {restro_star}")
# print(f"레스토랑 이용시간: {restro_hours}")
# print(f"레스토랑 메뉴: {restro_menu_dic}")
# print(f"레스토랑 태그: {restro_arti_list}")

# item1 = int("18건의 방문자 평가".split("건")[0]) # 18
# print(item1)

# item = "저녁식사(9)".split("(")
# list = []
# list.append(item[0])
# list.append(item[-1][:-1])
# print(list)

# 주소 좌표 변환
# import requests, json

# def get_location(address):
#   url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + address
#   # 'KaKaoAK '는 그대로 두시고 개인키만 지우고 입력해 주세요.
#   # ex) KakaoAK 6af8d4826f0e56c54bc794fa8a294
#   headers = {"Authorization": "KakaoAK dca00a6145957259d9c0b9b788ecb425"}
#   api_json = json.loads(str(requests.get(url,headers=headers).text))
#   address = api_json['documents'][0]['address']
#   crd = {"lat": str(address['y']), "lng": str(address['x'])}
#   address_name = address['address_name']

#   return crd

# crd = get_location("서울특별시 중구 주교동 118-1")
# print(crd)
# ////////////////////////////////////////////////////

# 식당 사진
# url = 'https://www.diningcode.com/profile.php?rid=L4miF0diqkcW'
# page = requests.get(url)
# soup = bs(page.text, "lxml")

# thumnail = soup.find('li', attrs={"class": "bimg btn-gallery-open"}).find('img').get('src')

# print(thumnail)

# 인허가날짜 및 업종 가져오기
import csv
 
f = open('restdata.csv', 'r', encoding='utf-8')
rdr = csv.reader(f)
# 0 : 인허가 날짜
# 4 : 지번 주소
# 7 : 사업자명(레스토랑 이름)
# 11: 업종
restro_age = 'notf'
restro_sectors = 'notf'
for line in rdr:
    restro_name = line[7]
    restro_age = line[0][:4]
    restro_sectors = line[11]
    print(restro_name, restro_age, restro_sectors)
f.close()