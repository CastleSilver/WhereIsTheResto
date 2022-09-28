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

driver.get("https://www.bluer.co.kr/search?tabMode=single&searchMode=ribbonType&&location=서울특별시&ribbonType=&feature=")
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
