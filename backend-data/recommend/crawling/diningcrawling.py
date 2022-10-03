# Beautifulsoup
from tempfile import TemporaryFile
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


name = []
hours = []
menu = []
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
terrace = []
drinking = []
meal = []
lunch = []
dinner = []
cost_effective = []
classy = []
mood = []
noisy = []
quiet = []
real_local = []
etc = []

# 주소 이동
locations = ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구']
city = "서울"
for i in range(len(locations)):
    gu = locations[i]
    driver.get(f"https://www.diningcode.com/list.dc?addr={city}%20{gu}&order=r_count&query=노포")

    driver.implicitly_wait(10)
    driver.maximize_window()

    while True:
        try:
            scroll_btn = driver.find_element(By.CSS_SELECTOR, "button.SearchMore.upper")
            scroll_btn.click()
        except:
            break

        time.sleep(1.5)

    driver.implicitly_wait(0)

    restro_list = driver.find_elements(By.CSS_SELECTOR, "li.PoiBlockContainer")

    for restro in restro_list:
        restro_code = restro.find_element(By.CSS_SELECTOR, "div.PoiBlock").get_attribute('id')
        restro_code = restro_code[5:]
        headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}

        dining_url = f"https://diningcode.com/profile.php?rid={restro_code}"
        page = requests.get(dining_url, headers=headers)
        soup = bs(page.text, "lxml")
        try:
            restro_star = soup.find('div', attrs={"class": "s-list appraisal"}).find('p', attrs={"class": "tit"}).get_text()
            restro_star = int(restro_star.split("건")[0])
        except:
            restro_star = 0
        
        if restro_star < 3:
            continue
        try:
            restro_menus = soup.find('ul', attrs={"class": "list Restaurant_MenuList"}).findAll('li')
        except:
            restro_menus = ''
        
        # try:
        #     restro_hours = soup.find('div', attrs={"class": "busi-hours short"}).find('p', attrs={"class": "r-txt"}).get_text()
        # except:
        #     restro_hours = ''

        try:
            restro_thumbnail = soup.find('li', attrs={"class": "bimg btn-gallery-open"}).find('img').get('src')
        except:
            restro_thumbnail = ""

        restro_name = soup.find('div', attrs={"class": "tit-point"}).find('p', attrs={"class": "tit"}).get_text()
        restro_artis = soup.find('ul', attrs={"class": "app-arti"}).findAll('p', {"class": "icon"})
        restro_address = soup.find('div', attrs={"class" : "s-list basic-info"}).find("li", {"class": "locat"}).get_text()
        restro_number = soup.find('li', attrs={"class": "tel"}).get_text()

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

        f = open('restdata.csv', 'r', encoding='utf-8')
        rdr = csv.reader(f)
        # 0 : 인허가 날짜
        # 4 : 지번 주소
        # 7 : 사업자명(레스토랑 이름)
        # 11: 업종
        restro_age = 'notf'
        restro_sectors = 'notf'
        for line in rdr:
            if restro_name == line[7]:
                restro_age = line[0][:4]
                restro_sectors = line[11]

        restro_tag_dic = {}
        restro_menu_dic = {}
        
        for restro_arti in restro_artis:
            restro_arti = restro_arti.get_text()
            key = restro_arti.split("(")[0]
            value = int(restro_arti.split("(")[-1][:-1])
            restro_tag_dic[key] = value

        for restro_menu in restro_menus:
            key = restro_menu.find("span", attrs={"class": "Restaurant_Menu"}).get_text()
            value = restro_menu.find("p", attrs={"class": "r-txt Restaurant_MenuPrice"}).get_text()
            restro_menu_dic[key] = value

        try:
            restro_menu1 = list(restro_menu_dic.keys())[0]
        except:
            retsro_menu1 = ""

        try:
            restro_menu2 = list(restro_menu_dic.keys())[1]
        except:
            restro_menu2 = ""
        print("--------------------------------------------------------------------------")
        print(f"레스토랑 이름: {restro_name}")
        # print(f"레스토랑 이용시간: {restro_hours}")
        print(f"레스토랑 메뉴: {restro_menu_dic}")
        print(f"레스토랑 대표메뉴: {restro_menu1}, {restro_menu2}")
        print(f"레스토랑 태그: {restro_tag_dic}")
        print(f"레스토랑 장소: {restro_address}")
        print(f"레스토랑 번호: {restro_number}")
        print(f"레스토랑 사진: {restro_thumbnail}")
        print(f"레스토랑 x좌표: {restro_location_x}")
        print(f"레스토랑 y좌표: {restro_location_y}")
        print(f"레스토랑 인허가: {restro_age}")
        print(f"레스토랑 업종: {restro_sectors}")
        

        name.append(restro_name)
        # hours.append(restro_hours)
        # menu.append(restro_menu_dic)
        menu1.append(restro_menu1)
        menu2.append(restro_menu2)
        tag.append(restro_tag_dic)
        address.append(restro_address)
        number.append(restro_number)
        thumbnail.append(restro_thumbnail)
        location_x.append(restro_location_x)
        location_y.append(restro_location_y)
        resto_age.append(restro_age)
        sectors.append(restro_sectors)

        try:
            restro_terrace = restro_tag_dic['야외좌석']
        except:
            restro_terrace = 0

        restro_drinking = 0
        try:
            restro_drinking += restro_tag_dic['술모임']
        except:
            restro_drinking = 0

        try:
            restro_drinking += restro_tag_dic['혼술']
        except:
            restro_drinking += 0
        
        try:
            restro_meal = restro_tag_dic['식사모임']
        except:
            restro_meal = 0

        try:
            restro_lunch = restro_tag_dic['점심식사']
        except:
            restro_lunch = 0

        try:
            restro_dinner = restro_tag_dic['저녁식사']
        except:
            restro_dinner = 0

        restro_cost_effective = 0
        try:
            restro_cost_effective += restro_tag_dic['가성비좋은']
        except:
            restro_cost_effective += 0

        try:
            restro_cost_effective += restro_tag_dic['서민적인']
        except:
            restro_cost_effective += 0

        try:
            restro_cost_effective += restro_tag_dic['푸짐한']
        except:
            restro_cost_effective += 0

        try:
            restro_classy = restro_tag_dic['고급스러운']
        except:
            restro_classy = 0

        try:
            restro_mood = restro_tag_dic['분위기좋은']
        except:
            restro_mood = 0

        try:
            restro_noisy = restro_tag_dic['시끌벅적한']
        except:
            restro_noisy = 0

        try:
            restro_quiet = restro_tag_dic['조용한']
        except:
            restro_quiet = 0

        try:
            restro_real_local = restro_tag_dic['지역주민이찾는']
        except:
            restro_real_local = 0
        
        restro_etc = ''
        try:
            del_list = ['지역주민이찾는', '조용한', '시끌벅적한', '분위기좋은', '고급스러운', '푸짐한', '서민적인', '가성비좋은', '저녁식사', '점심식사', '식사모임', '혼술', '술모임', '야외좌석']
            for item in restro_tag_dic.keys():
                if item not in del_list:
                    restro_etc += item + ','
        except:
            pass

        terrace.append(restro_terrace)  
        drinking.append(restro_drinking)  
        meal.append(restro_meal)  
        lunch.append(restro_lunch)  
        dinner.append(restro_dinner)  
        cost_effective.append(restro_cost_effective)  
        classy.append(restro_classy)  
        mood.append(restro_mood)  
        noisy.append(restro_noisy)  
        quiet.append(restro_quiet)  
        real_local.append(restro_real_local)  
        etc.append(restro_etc)  

restro_df = pd.DataFrame()
restro_df['resto_age'] = resto_age
restro_df['thumbnail'] = thumbnail
restro_df['address'] = address
restro_df['resto_name'] = name
restro_df['sectors'] = sectors
restro_df['location_x'] = location_x
restro_df['location_y'] = location_y
restro_df['phone_number'] = number
restro_df['menu1'] = menu1
restro_df['menu2'] = menu2
# restro_df['hours'] = hours
# restro_df['menu'] = menu
restro_df['terrace'] = terrace
restro_df['drinking'] = drinking
restro_df['meal'] = meal
restro_df['lunch'] = lunch
restro_df['dinner'] = dinner
restro_df['cost_effective'] = cost_effective
restro_df['classy'] = classy
restro_df['mood'] = mood
restro_df['noisy'] = noisy
restro_df['quiet'] = quiet
restro_df['real_local'] = real_local
restro_df['etc'] = etc
# restro_df['tag'] = tag

restro_df.to_csv("restro_list.csv", mode='w', encoding='utf8')