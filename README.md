# ๐ ๊ทธ ์ง ์ด๋ฐ๊ณ 
๐ฅ ์ผ์ฑ ์ฒญ๋ SW ์์นด๋ฐ๋ฏธ(SSAFY) ํนํ ํ๋ก์ ํธ ์ฐ์์ ๐ฅ

</br>

## ๐ ํ๋ก์ ํธ ๊ฐ์
+ ๋ช์นญ : ๊ทธ์ง ์ด๋ฐ๊ณ 
+ ์๊ฐ : COVID-19์ ์ฌํ๋ก ์์์ ์ด๋ ค์์ ๊ฒช๊ณ  ์๋ ๋ธํฌ ์๊ถ์ ํ์ฑํํ๊ธฐ ์ํด MZ์ธ๋๋ฅผ ํ๊ฒ์ธต์ผ๋ก ๋ง์ถค ๋ธํฌ๋ฅผ ์ถ์ฒํด์ฃผ๋ ์๋น์ค
+ ์งํ ๊ธฐ๊ฐ : 2022.09.29(์) ~ 2022.10.07(๊ธ)
+ UCC : [Youtube ๋งํฌ](https://www.youtube.com/watch?v=E8ZgJ-AAf0k)

</br>

---

</br>

## ๐ง ํ์ ์๊ฐ

|                        ํ์ฅ                        |                             ํ์                             |                        ํ์                        |                             ํ์                             |
| :------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------: |
|                       ์์ฐฌํธ                       |                            ๊น๋ฏผ์ฃผ                            |                       ๊นํ์ด                       |                            ํ์ฑ์                            |
|                      FRONTEND                      |                           BACKEND                            |                      BACKEND                       |                           BACKEND                            |
| UI/ UX<br />์์ด์ด ํ๋ ์ ์ค๊ณ<br />๊ธฐํ ๋ฐ ๋์์ธ | AWS ๋ฐ CI/CD ๊ตฌ์ฑ<br />ํ์ ๋ฐ AZTI API<br />JWT ๋ฐ ์์ ๋ก๊ทธ์ธ | ๋ฐ์ดํฐ ํฌ๋กค๋ง<br />CBF ์ถ์ฒ ์๊ณ ๋ฆฌ์ฆ<br />์ถ์ฒ API | ๋ฆฌ๋ทฐ, ์๋น API<br />CF ์ถ์ฒ ์๊ณ ๋ฆฌ์ฆ<br /> S3 ๊ตฌ์ถ ๋ฐ DB ์ค๊ณ |

</br>

----

</br>

## ๐๏ธ ์ฃผ์ ๊ธฐ๋ฅ

### User ๊ด๋ จ

> + ์์ ๋ก๊ทธ์ธ(์นด์นด์ค)๋ฅผ ์ด์ฉํด ๊ฐํธํ๊ฒ ํ์๊ฐ์/ ๋ก๊ทธ์ธ์ด ๊ฐ๋ฅํ๋ค.
> + ํ์ ๊ฐ์ ์ ์ฌ์ดํธ ๋ด ์์ฒด ์ ํ ํ์คํธ(AZTI)๋ฅผ ๋ฐ์๋ณผ ์ ์๋ค.
> + ํ์ ์ ๋ณด ์์ ์ด ๊ฐ๋ฅํ๋ค.
> + ํ์ ๊ฐ์ ์ ์งํํ AZTI ํ์คํธ์ ์ฌ๊ฒ์ฌ๊ฐ ๊ฐ๋ฅํ๋ค.
>
> + ๋ง์ด ํ์ด์ง
>    + ํ์์ด '์ข์์'ํ ์๋น ๋ชฉ๋ก์ ์ ๊ณตํ๋ค.
>
>    + ํ์์ด '๊ฐ๋ณธ๊ณณ'ํ ์๋น ๋ชฉ๋ก์ ์ ๊ณตํ๋ค.
>    + ํ์์ด ์์ฑํ ๋ฆฌ๋ทฐ ๋ชฉ๋ก์ ์ ๊ณตํ๋ค.



</br>

### ๋ธํฌ ๊ด๋ จ

>     
> + ๋ฉ์ธ ํ์ด์ง
>   + ์ปจํ์ธ  ๊ธฐ๋ฐ ํํฐ๋ง(CBF)์ ํ๋ ฌ ๋ถํด(CF) ์๊ณ ๋ฆฌ์ฆ์ ๊ฒฐํฉํ ๋ธํฌ ์ถ์ฒ ๋ฆฌ์คํธ๋ฅผ ์ ๊ณตํ๋ค. 
>
>   + ํ๋ ๊ธฐ๋ก์ด ์ ์ ์ฌ์ฉ์์๊ฒ๋ ํ์๊ฐ์ ์ ์งํํ๋ AZTI ๊ฒฐ๊ณผ์ ๋ฐ๋ผ CBF ์๊ณ ๋ฆฌ์ฆ ์ด์ฉํด ์ถ์ฒ ๋ฆฌ์คํธ๋ฅผ ์ ๊ณตํ๋ค.
>   + ์ฌ์ดํธ ๋ด ํ๋ ๊ธฐ๋ก(์ข์์)์ด ์์ด๋ฉด CF ์๊ณ ๋ฆฌ์ฆ์ ์ด์ฉํ ๊ฐ์ธ ๋ง์ถคํ ์ถ์ฒ ๋ฆฌ์คํธ๋ฅผ ์ ๊ณตํ๋ค.
>
> + ์์ธ ํ์ด์ง
>
>   + ํด๋น ๊ฐ๊ฒ์ ํ๊ท  ํ์ , ๊ฐ์ ๋๋, ์ฃผ์, ๋ํ ๋ฉ๋ด ๋ฑ์ ์ ๋ณด๋ฅผ ์ ๊ณตํ๋ค.
>
>   + ์์ด์ฝ์ ๋๋ฌ '์ข์์' ๋ฑ๋ก๊ณผ '๊ฐ๋ณธ๊ณณ' ๋ฑ๋ก์ ํ  ์ ์๋ค.
>   + KAKAO MAP API๋ฅผ ์ด์ฉํด ๊ตฌํํ ์ง๋๋ก ํด๋น ๊ฐ๊ฒ์ ์์น๋ฅผ ์ ๊ณตํ๋ค  .
>   + '์ ์ฌ ์๋น'์ผ๋ก ์์ดํ ๊ธฐ๋ฐ ํ์ ํํฐ๋ง(CF) ์๊ณ ๋ฆฌ์ฆ์ ์ด์ฉํด ๊ตฌํํ ํด๋น ๋ธํฌ์ ์ ์ฌํ ๊ฐ๊ฒ์ ์ถ์ฒ ๋ฆฌ์คํธ๋ฅผ ์ ๊ณตํ๋ค.
>   + ํด๋น ๊ฐ๊ฒ์ ์์ฑ๋ ๋ฆฌ๋ทฐ ๋ชฉ๋ก์ ์ ๊ณตํ๋ค. ๊ฐ ๋ฆฌ๋ทฐ์๋ ์์ฑ์ผ, ํ์ , ๋ด์ฉ, ์ฌ์ง์ด ํฌํจ๋์ด ์๋ค.
>

</br>

### Review ๊ด๋ จ

> + ๋ฆฌ๋ทฐ ์์ฑ์ด ๊ฐ๋ฅํ๋ค. ๊ฐ๊ฒ์ ๋ํ ํ์ , ๋ด์ฉ, ์ฌ์ง์ ์ฒจ๋ถํด ์์ฑํ  ์ ์๋ค. 
> + ๋ฆฌ๋ทฐ ์ญ์ ์ ์์ ์ด ๊ฐ๋ฅํ๋ค.

</br>

----

</br>

## ๐ป ๊ธฐ์  ์คํ

</br>

<h3 align="center">๐ซ Front-end</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img  src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white"> </br> <img  src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img  src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img  src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img  src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img  src="https://img.shields.io/badge/MUI-1976D2?style=for-the-badge&logo=MUI&logoColor=white"></br> <img  src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white">
<img  src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
</p>
</br>
<h3 align="center">๐ซ Back-end</h3>

</br>

<p align="center">
<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
<img  src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img  src="https://img.shields.io/badge/Spring Security-FF9900?style=for-the-badge&logo=Spring Security&logoColor=white"> <img  src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white"> </br><img  src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"> <img  src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img  src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img  src="https://img.shields.io/badge/Amazon S3-FF9900?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">  <img  src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white"></br> <img  src="https://img.shields.io/badge/INTELLIJ IDEA-2C2255?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"> <img  src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">

</p>
</br>
<h3 align="center">๐ซ Big-data</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=Pandas&logoColor=white"> <img  src="https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=Numpy&logoColor=white"> <img  src="https://img.shields.io/badge/scikit learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"> <img  src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white">
</p>
</br>
<h3 align="center">๐ซ CI/CD</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
<img  src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img  src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img  src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white">    <img  src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">
</p>
</br>
<h3 align="center">๐ซ Team Collaboration Tool</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white"> <img  src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img  src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
</p>
</br>

---

</br>


## ์ฌ์ฉ ๋ฐฉ๋ฒ

- frontend

```
npm i

npm run dev
or
npx vite
```



- backend

```
(intelij)
build

run
```



- backend-data

```
python -m venv venv

source venv/Scripts/activate

pip install -r requirements.txt

python manage.py runserver
```



## ํ๋ก์ ํธ ํ์ผ ๊ตฌ์กฐ

### Back

```
backend
  โโโ build 
  โโโ gradle
  โโโ out
  โโโ src
  โ   โโโ main
  โ   โ   โโโ generated
  โ   โ   โ   โโโ com.ssafy.nopo.db.entity
  โ   โ   โโโ java
  โ   โ   โ   โโโ com.ssafy.nopo
  โ   โ   โ   โ   โโโ api
  โ   โ   |   |   โ   โโโ controller
  โ   โ   |   |   โ   โโโ request
  โ   โ   |   |   โ   โโโ response
  โ   โ   |   |   โ   โโโ service
  โ   โ   โ   โ   โโโ common
  โ   โ   |   |   โ   โโโ auth
  โ   โ   |   |   |   โ   โโโ client
  |   โ   โ   |   |   โ   โโโ jwt
  โ   โ   |   |   โ   โโโ exception
  โ   โ   |   |   โ   โโโ util
  โ   โ   โ   โ   โโโ config
  โ   โ   โ   โ   โโโ db
  โ   โ   |   |   โ   โโโ entity
  โ   โ   |   |   โ   โโโ repository
  โ   โ   โ   โ   โโโ NopoApplication
  โ   โ   โโโ resources
  โ   โ   โ   โโโ application.properties
  โ   โโโ test
  โโโ gitignore
  โโโ build.gradle
  โโโ Dockerfile
  โโโ gradlew
  โโโ gradlew.bat
  โโโ settings.gradle

```



### Back-data

```
backend-data
  โโโ main
  โ   โโโ migrations
  โ   โโโ template/main
  โโโ recommend
  โ   โโโ crawling
  โ   โโโ csvfile
  โ   โโโ migrations
  โ   โโโ recom
  |   โ   โโโ cbf.py
  |   โ   โโโ database.py
  |   โ   โโโ knn.py
  |   โ   โโโ test.py
  โ   โโโ admin.py
  โ   โโโ apps.py
  โ   โโโ models.py
  โ   โโโ tests.py
  โ   โโโ urls.py
  โ   โโโ views.py
  โโโ wherehouse
  โ   โโโ asgi.py
  โ   โโโ settings.py
  โ   โโโ urls.py
  โ   โโโ wsgi.py
  โโโ gitignore
  โโโ Dockerfile
  โโโ manage.py
  โโโ requirements.txt
  โโโ gradlew.bat
  โโโ settings.gradle

```



### Front

```
FRONTEND
  โโโ node_modules
  โโโ public
  โโโ src
  โ   โโโ api
  |   โ   โโโ api
  |   โ   โโโ index.ts
  |   โ   โโโ reqType.ts
  |   โ   โโโ resType.ts
  |   โ   โโโ settings.ts
  โ   โโโ assets
  โ   โโโ Form
  |   โ   โโโ ReviewComp
  |   โ   โโโ NewReviewForm.tsx
  |   โ   โโโ ReviewForm.tsx
  โ   โโโ needConfirm
  |   โ   โโโ NeedConfirm.tsx
  |   โ   โโโ RestoInfo.tsx
  |   โ   โโโ SearchCompo.tsx
  โ   โโโ pages
  |   โ   โโโ CommonComp
  |   โ   โโโ DetailPage
  |   โ   โโโ MainPage
  |   โ   โโโ MyPage
  |   โ   โโโ SearchPage
  |   โ   โโโ StartPage
  |   โ   โโโ UserComponents
  |   โ   โโโ userStore
  |   โ   โโโ IndexPage.tsx
  โ   โโโ style
  |   |   โโโ style.css
  โ   โโโ App.css
  โ   โโโ App.tsx
  โ   โโโ index.css
  โ   โโโ main.tsx
  โ   โโโ PrivateRoute.tsx
  โ   โโโ vite-env.d.ts
  โโโ gitignore
  โโโ Dockerfile
  โโโ index.html
  โโโ package-lock.json
  โโโ package.json
  โโโ tsconfig.json
  โโโ tsconfig.node.json
  โโโ vite.config.ts
   
```



## ํ์ ํด

- GIt
- Notion
- JIRA
- MatterMost
- Webex



## ํ์ ํ๊ฒฝ

- Gitlab
  - ๋ฒ์  ๊ด๋ฆฌ
  - ์ด์ ๋ฐํ ํด๊ฒฐ
  - MR์, ์ฝ๋ ๋ฆฌ๋ทฐ๋ฅผ ์งํ
- JIRA
  - ๋งค์ฃผ ๋ชฉํ ๋์ ์ค์ ํ์ฌ Sprint ์งํ
  - ์๋ฌด ํ ๋น๋์ Story point๋ก ์ค์ ํ๊ณ , In-progress => Done ์์ผ๋ก ์์
- Notion
  - ์์นจ๋ง๋ค scrum์ ์งํํ๊ณ  ํ์๊ฐ ์์ ๋๋ง๋ค ํ์๋ก์ ๊ธฐ๋ก
  - ์ปจ๋ฒค์ ์ ๋ฆฌ
  - ๋ฌธ์ ๊ด๋ฆฌ



## ํ๋ก์ ํธ ์ฐ์ถ๋ฌผ

- API
- ERD
- ํ๋กํ ํ์
- ์ํคํ์ฒ
- ์ปจ๋ฒค์





## ๊ทธ์ง ์ด๋ฐ๊ณ  ํ๋ฉด



- ๋ก๊ทธ์ธ

<img src="README.assets/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif" alt="๋ก๊ทธ์ธ" style="zoom: 80%;" />

- AZTI ํ์คํธ

<img src="README.assets/AZTI%ED%85%8C%EC%8A%A4%ED%8A%B8.gif" alt="AZTIํ์คํธ" style="zoom:80%;" />



- ์นด์นด์คํก ๊ณต์ ํ๊ธฐ

<img src="README.assets/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0.gif" alt="์นด์นด์คํก ๊ณต์ ํ๊ธฐ" style="zoom:80%;" />



- ๋ฉ์ธํ์ด์ง

<img src="README.assets/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="๋ฉ์ธํ์ด์ง" style="zoom:80%;" />

- ์จ์นํ์ด์ง

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="์จ์นํ์ด์ง" style="zoom:80%;" />

- ๋ง์ดํ์ด์ง

<img src="README.assets/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="๋ง์ดํ์ด์ง" style="zoom:80%;" />

- ์จ์นํ์ด์ง ๋ํ์ผ

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%94%ED%85%8C%EC%9D%BC.gif" alt="์จ์นํ์ด์ง ๋ํ์ผ" style="zoom:80%;" />

- ๋ธํฌ๋ํ์ผํ์ด์ง

<img src="README.assets/%EB%85%B8%ED%8F%AC%EB%94%94%ED%85%8C%EC%9D%BC%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="๋ธํฌ๋ํ์ผํ์ด์ง" style="zoom:80%;" />



- ์ข์์ ๋ฑ๋ก ์ทจ์

<img src="README.assets/%EC%A2%8B%EC%95%84%EC%9A%94%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="์ข์์ ๋ฑ๋ก ์ทจ์" style="zoom:80%;" />

- ๋ฐฉ๋ฌธํ ๊ณณ ๋ฑ๋ก ์ทจ์

<img src="README.assets/%EB%B0%A9%EB%AC%B8%ED%95%9C%EA%B3%B3%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="๋ฐฉ๋ฌธํ๊ณณ ๋ฑ๋ก ์ทจ์" style="zoom:80%;" />

- ๋ฆฌ๋ทฐ ์์ฑ

<img src="README.assets/%EB%A6%AC%EB%B7%B0%20%EC%9E%91%EC%84%B1.gif" alt="๋ฆฌ๋ทฐ ์์ฑ" style="zoom:80%;" />

- ๋ฆฌ๋ทฐ ์ญ์ 

<img src="README.assets/%EB%A6%AC%EB%B7%B0%EC%82%AD%EC%A0%9C.gif" alt="๋ฆฌ๋ทฐ์ญ์ " style="zoom:80%;" />

