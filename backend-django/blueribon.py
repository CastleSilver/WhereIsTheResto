# Beautifulsoup
import requests, json
from bs4 import BeautifulSoup as bs

# 셀레니움 기본 설정
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# 크롬 드라이버 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager

# 셀레니움 select에 사용할 선언
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# 브라우저 꺼짐 방지
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# 불필요한 에러 메세지 없애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# 크롬 드라이버 설치
service = Service(executable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

import pandas as pd
import csv

driver.get("https://www.bluer.co.kr/search?tabMode=single&searchMode=ribbonType&location=서울특별시&ribbonType=&feature=")
driver.implicitly_wait(10)

restro_data_id_list = []
last_point = driver.find_element(By.XPATH, "//*[@id='page-selection']/ul/li[11]").get_attribute("data-lp")

while True:
    restro_list = driver.find_elements(By.CSS_SELECTOR, "li.rl-col.restaurant-thumb-item")
    for restro in restro_list:
        restro_data_id = restro.get_attribute("data-id")
        restro_data_id_list.append(restro_data_id)

    button_list = driver.find_element(By.CSS_SELECTOR, "ul.pagination.bootpag").find_elements(By.TAG_NAME, "li")
    n = len(button_list)

    for i in range(n):
        button = button_list[i]
        if button.get_attribute("class") == 'active':
            print(i)
            print(button.get_attribute("class"))
            point = button.get_attribute("data-lp")
            try:
                click_point = driver.find_element(By.XPATH, f"//*[@id='page-selection']/ul/li[{i+2}]/a").click()
            except:
                pass
            break

    time.sleep(1)

    if last_point == point:
        break

print(restro_data_id_list)

##1. https://www.bluer.co.kr/search?tabMode=single&searchMode=ribbonType&ribbonType=&feature=
# https://www.bluer.co.kr/restaurants/28167?query=&foodType=&foodTypeDetail=&feature=&location=&locationDetail=&priceRange=&ribbonType=&recommended=false&isSearchName=false&searchMode=ribbonType&zone1=&zone2=&zone2Lat=&zone2Lng=
##3. https://www.bluer.co.kr/restaurants/28167

# #1주소에서 data-id 값을 추출해서 리스트화 하고 #3에 값을 넣어가면서 원하는 데이터 추출하는 과정
name = []
# hours = []
# menu = []
menu1 = []
menu2 = []
tag = []
address = []
number = []
thumbnail = []
location_x = []
location_y = []
resto_age = []
sectors = []

for restro_code in restro_data_id_list:
    blue_url = f"https://www.bluer.co.kr/restaurants/{restro_code}"
    page = requests.get(blue_url)
    soup = bs(page.text, "lxml")

    restro_sectors = soup.find('ol', attrs={"class": "foodtype"}).find('li').get_text()
    restro_name = soup.find('div', attrs={"class": "header-title"}).find('h1')
    restro_name.find('small').decompose()
    restro_name = name.get_text()
    restro_number = soup.find('dl', attrs={"class": "dl-horizontal"}).find('a', attrs={"class": "link"}).get_text()
    restro_address = soup.find('dl', attrs={"class": "dl-horizontal"}).findAll('dd')[1].get_text()
    restro_tag_key = soup.find('div', attrs={"class": "col-md-6 padding-lg-left border-left-lg"}).findAll('dt')
    restro_tag_value = soup.find('div', attrs={"class": "col-md-6 padding-lg-left border-left-lg"}).findAll('dd')
    restro_tag = {}
    restro_menu = soup.findAll('div', attrs={"class": "col-md-6 border-right-lg"})[1].find('dd').get_text()
    menu_list = restro_menu.split(',')
    restro_menu1 = menu_list[0].split('(')[0].strip()
    restro_menu2 = menu_list[1].split('(')[0].strip()

    def get_location(address):
        url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + address
        # 'KaKaoAK '는 그대로 두시고 개인키만 지우고 입력해 주세요.
        # ex) KakaoAK 6af8d4826f0e56c54bc794fa8a294
        headers = {"Authorization": "KakaoAK dca00a6145957259d9c0b9b788ecb425"}
        api_json = json.loads(str(requests.get(url,headers=headers).text))
        try:
            address = api_json['documents'][0]['address']
            crd = {"lat": str(address['y']), "lng": str(address['x'])}
        except:
            crd = {"lat": 'not found', "lng": 'not found'}
        return crd

    crd = get_location(restro_address)

    restro_location_y = crd["lat"]
    restro_location_x = crd["lng"]


    for i in range(4):
        key = restro_tag_key[i].get_text()
        value = restro_tag_value[i].get_text().replace(' ', '').replace('\xa0\n', '').replace('\n', '')
        restro_tag[key] = value
    try:
        restro_age = restro_tag['개업일(연)']
    except:
        restro_age = ''
    
    try:
        restro_tag_str = restro_tag['특징']
    except:
        restro_tag_str = ""
    
    restro_limit_age = int(restro_age)
    if restro_limit_age > 2010:
        continue
    name.append(restro_name)
    menu1.append(restro_menu1)
    menu2.append(restro_menu2)
    tag.append(restro_tag_str)
    address.append(restro_address)
    number.append(restro_number)
    thumbnail.append('')
    location_x.append(restro_location_x)
    location_y.append(restro_location_y)
    resto_age.append(restro_age)
    sectors.append(restro_sectors)

blue_restro_df = pd.DataFrame()
blue_restro_df['resto_name'] = name
blue_restro_df['menu1'] = menu1
blue_restro_df['menu2'] = menu2
blue_restro_df['tag'] = tag
blue_restro_df['address'] = address
blue_restro_df['phone_number'] = number
blue_restro_df['thumbnail'] = thumbnail
blue_restro_df['location_x'] = location_x
blue_restro_df['location_y'] = location_y
blue_restro_df['resto_age'] = resto_age
blue_restro_df['sectors'] = sectors

blue_restro_df.to_csv("blue_restro_df.csv", mode='w', encoding='utf8')
