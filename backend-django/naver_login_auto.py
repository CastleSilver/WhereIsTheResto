#!/usr/bin/env python
# coding: utf-8

# 셀레니움 기본 설정
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# 셀레니움 select에 사용할 선언
from selenium.webdriver.common.by import By

# 크롬 드라이버 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager

# 사람인 거 처럼 하기 위한 라이브러리
import time
import pyautogui
import pyperclip

# 브라우저 꺼짐 방지
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# 불필요한 에러 메세지 없애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# 크롬 드라이버 설치
service = Service(executable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 웹페이지 해당 주소 이동
driver.implicitly_wait(5) # 웹페이지 로딩될 때까지 5초 기다림
driver.maximize_window() # 화면 최대화

driver.get("https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com")

# 아이디 입력창
naver_id = driver.find_element(By.CSS_SELECTOR, "#id")
naver_id.click()
# id.send_keys("kimgusduf")
pyperclip.copy("kimgusduf")
pyautogui.hotkey("ctrl", "v")
time.sleep(2)

# 비번 입력창
password = driver.find_element(By.CSS_SELECTOR, "#pw")
password.click()
# password.send_keys("#gksrmfskf103")
pyperclip.copy("#gksrmfskf103")
pyautogui.hotkey("ctrl", "v")
time.sleep(2)

# 로그인 버튼
login_btn = driver.find_element(By.CSS_SELECTOR, "#log\.login")
login_btn.click()