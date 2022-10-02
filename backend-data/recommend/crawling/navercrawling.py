# 셀레니움 기본 설정
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# 크롬 드라이버 자동 업데이트
from webdriver_manager.chrome import ChromeDriverManager

# 셀레니움 select에 사용할 선언
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# 사람인 거 처럼 하기 위한 라이브러리
import time
import pyautogui
import pyperclip
import openpyxl

#검색창 띄우기 및 데이터 시트 만들기
keyword = pyautogui.prompt("검색어를 입력하세요")
wb = openpyxl.Workbook()
ws = wb.create_sheet(keyword)
ws.append(["순위", "이름", "별점", "방문자리뷰", "블로그리뷰"])

# 브라우저 꺼짐 방지
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

# 불필요한 에러 메세지 없애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

# 크롬 드라이버 설치
service = Service(executable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 주소 이동
driver.get("https://map.naver.com/v5/")

driver.implicitly_wait(10)
driver.maximize_window()

# 검색
search = driver.find_element(By.CSS_SELECTOR, "input.input_search")
search.click()
time.sleep(1)
search.send_keys(keyword)
time.sleep(1)
search.send_keys(Keys.ENTER)
time.sleep(2)

# class 값이 계속 바뀌기 때문에 css 신경써야함
# iframe 대처 방법
# irame 들어가는 방법
driver.switch_to.frame("searchIframe")

# irame 나오는 방법
# driver.switch_to.default_content()

# 검색어로 나온 리스트 10개 불러오기
# names = driver.find_elements(By.CSS_SELECTOR, "span.place_bluelink.TYaxT")
# print(names)

# for name in names:
#     print(name.text)

# iframe 안쪽을 한번 클릭하기
driver.find_element(By.CSS_SELECTOR, "#_pcmap_list_scroll_container").click()

# 로딩된 데이터 개수 확인
restro_list = driver.find_elements(By.CSS_SELECTOR, "li.UEzoS.rTjJo")
before_len = len(restro_list)

while True:
    # 맨 아래로 스크롤 내린다.
    driver.find_element(By.CSS_SELECTOR, "body").send_keys(Keys.END)

    # 스크롤 사이 페이지 로딩 시간
    time.sleep(1.5)

    # 스크롤 후 로딩된 데이터 개수 확인
    restro_list = driver.find_elements(By.CSS_SELECTOR, "li.UEzoS.rTjJo")
    after_len = len(restro_list)

    if before_len == after_len:
        break
    before_len = after_len

# 데이터 기다리는 시간을 0으로 만들어 줘요. (데이터가 없더라도 빠르게 넘어감)
driver.implicitly_wait(0)

rank = 1

# 데이터 수집
for restro in restro_list:
    # 광고 상품 아닌 것만
    if len(restro.find_elements(By.CSS_SELECTOR, "svg.dPXjn")) == 0:

        # 별점이 있는 것만 크롤링
        if len(restro.find_elements(By.CSS_SELECTOR, "span.h69bs.a2RFq > em")) > 0:
            # 가게명
            name = restro.find_element(By.CSS_SELECTOR, "span.place_bluelink.TYaxT").text
            # 별점
            star = restro.find_element(By.CSS_SELECTOR, "span.h69bs.a2RFq > em").text

            # 영업 시간이 있다면
            if len(restro.find_elements(By.CSS_SELECTOR, "span.h69bs.KvAhC")) > 0:
                # 방문자 리뷰 수
                try:
                    visit_review = restro.find_element(By.CSS_SELECTOR, "span.h69bs:nth-child(3)").text
                except:
                    visit_review = "0"
                #블로그 리뷰 수
                try:
                    blog_review = restro.find_element(By.CSS_SELECTOR, "span.h69bs:nth-child(4)").text
                except:
                    blog_review = "0"

            # 영업 시간이 없다면
            else:
                # 방문자 리뷰 수
                try:
                    visit_review = restro.find_element(By.CSS_SELECTOR, "span.h69bs:nth-child(2)").text
                except:
                    visit_review = "0"
                #블로그 리뷰 수
                try:
                    blog_review = restro.find_element(By.CSS_SELECTOR, "span.h69bs:nth-child(3)").text
                except:
                    blog_review = "0"
            
            # 데이터 전처리
            visit_review = visit_review.replace("방문자리뷰 ", "").replace(",", "")
            blog_review = blog_review.replace("블로그리뷰 ", "").replace(",", "")

            #데이터 저장
            print(rank, name, star, visit_review, blog_review)
            ws.append([rank, name, star, visit_review, blog_review])
            rank += 1

# 데이터 저장 방법
wb.save(f"네이버_지도_크롤링_{keyword}.xlsx")