import requests
from bs4 import BeautifulSoup as bs
import re

dining_url = f"https://diningcode.com/profile.php?rid=ivVJTVrMzkg7"
page = requests.get(dining_url)
soup = bs(page.text, "lxml")

restro_star = soup.find('div', attrs={"class": "s-list appraisal"}).find('p', attrs={"class": "tit"}).get_text()
restro_name = soup.find('div', attrs={"class": "tit-point"}).get_text()
restro_hours = soup.find('div', attrs={"class": "busi-hours short"}).find('p', attrs={"class": "r-txt"}).get_text()
restro_menus = soup.find('ul', attrs={"class": "list Restaurant_MenuList"}).findAll('li')
restro_artis = soup.find('ul', attrs={"class": "app-arti"}).findAll('p', {"class": "icon"})
restro_arti_list = []
restro_menu_dic = {}
for restro_arti in restro_artis:
    restro_arti_list.append(restro_arti.get_text())

for restro_menu in restro_menus:
    key = restro_menu.find("span", attrs={"class": "Restaurant_Menu"}).get_text()
    value = restro_menu.find("p", attrs={"class": "r-txt Restaurant_MenuPrice"}).get_text()
    restro_menu_dic[key] = value

print("--------------------------------------------------------------------------")
print(f"레스토랑 이름: {restro_name}")
print(f"레스토랑 별점: {restro_star}")
print(f"레스토랑 이용시간: {restro_hours}")
print(f"레스토랑 메뉴: {restro_menu_dic}")
print(f"레스토랑 태그: {restro_arti_list}")

item1 = int("18건의 방문자 평가".split("건")[0]) # 18
print(item1)

item = "저녁식사(9)".split("(")
list = []
list.append(item[0])
list.append(item[-1][:-1])
print(list)