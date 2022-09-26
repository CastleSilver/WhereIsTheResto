# Beautifulsoup
import requests
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

name = []
hours = []
menu = []
tag = []
location = []
number = []

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

        dining_url = f"https://diningcode.com/profile.php?rid={restro_code}"
        page = requests.get(dining_url)
        soup = bs(page.text, "lxml")
        try:
            restro_star = soup.find('div', attrs={"class": "s-list appraisal"}).find('p', attrs={"class": "tit"}).get_text()
            restro_star = int(restro_star.split("건")[0])
        except:
            restro_star = 0
        
        if restro_star < 10:
            continue
        try:
            restro_menus = soup.find('ul', attrs={"class": "list Restaurant_MenuList"}).findAll('li')
        except:
            restro_menus = ''
        
        try:
            restro_hours = soup.find('div', attrs={"class": "busi-hours short"}).find('p', attrs={"class": "r-txt"}).get_text()
        except:
            restro_hours = ''
        
        restro_name = soup.find('div', attrs={"class": "tit-point"}).get_text()
        restro_artis = soup.find('ul', attrs={"class": "app-arti"}).findAll('p', {"class": "icon"})
        restro_location = soup.find('div', attrs={"class" : "s-list basic-info"}).find("li", {"class": "locat"}).get_text()
        restro_number = soup.find('li', attrs={"class": "tel"}).get_text()

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

        print("--------------------------------------------------------------------------")
        print(f"레스토랑 이름: {restro_name}")
        print(f"레스토랑 이용시간: {restro_hours}")
        print(f"레스토랑 메뉴: {restro_menu_dic}")
        print(f"레스토랑 태그: {restro_tag_dic}")
        print(f"레스토랑 장소: {restro_location}")
        print(f"레스토랑 번호: {restro_number}")

        name.append(restro_name)
        hours.append(restro_hours)
        menu.append(restro_menu_dic)
        tag.append(restro_tag_dic)
        location.append(restro_location)
        number.append(restro_number)

restro_df = pd.DataFrame()
restro_df['name'] = name
restro_df['hours'] = hours
restro_df['menu'] = menu
restro_df['tag'] = tag
restro_df['location'] = location
restro_df['number'] = number

restro_df.to_csv("restro_list.csv", mode='w', encoding='utf8')