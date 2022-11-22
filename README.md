# 🏠그 집 어데고
🥈 삼성 청년 SW 아카데미(SSAFY) 특화 프로젝트 우수상 🥈

</br>

## 📌 프로젝트 개요
+ 명칭 : 그집 어데고
+ 소개 : COVID-19의 여파로 영업의 어려움을 겪고 있는 노포 상권을 활성화하기 위해 MZ세대를 타겟층으로 맞춤 노포를 추천해주는 서비스
+ 진행 기간 : 2022.09.29(월) ~ 2022.10.07(금)
+ UCC : [Youtube 링크](https://www.youtube.com/watch?v=E8ZgJ-AAf0k)

</br>

---

</br>

## 🧑 팀원 소개

|                        팀장                        |                             팀원                             |                        팀원                        |                             팀원                             |
| :------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------: |
|                       원찬호                       |                            김민주                            |                       김현열                       |                            허성은                            |
|                      FRONTEND                      |                           BACKEND                            |                      BACKEND                       |                           BACKEND                            |
| UI/ UX<br />와이어 프레임 설계<br />기획 및 디자인 | AWS 및 CI/CD 구성<br />회원 및 AZTI API<br />JWT 및 소셜 로그인 | 데이터 크롤링<br />CBF 추천 알고리즘<br />추천 API | 리뷰, 식당 API<br />CF 추천 알고리즘<br /> S3 구축 및 DB 설계 |

</br>

----

</br>

## 🗂️ 주요 기능

### User 관련

> + 소셜 로그인(카카오)를 이용해 간편하게 회원가입/ 로그인이 가능하다.
> + 회원 가입 시 사이트 내 자체 유형 테스트(AZTI)를 받아볼 수 있다.
> + 회원 정보 수정이 가능하다.
> + 회원 가입 시 진행한 AZTI 테스트의 재검사가 가능하다.
>
> + 마이 페이지
>    + 회원이 '좋아요'한 식당 목록을 제공한다.
>
>    + 회원이 '가본곳'한 식당 목록을 제공한다.
>    + 회원이 작성한 리뷰 목록을 제공한다.



</br>

### 노포 관련

>     
> + 메인 페이지
>   + 컨텐츠 기반 필터링(CBF)와 행렬 분해(CF) 알고리즘을 결합한 노포 추천 리스트를 제공한다. 
>
>   + 활동 기록이 적은 사용자에게는 회원가입 시 진행했던 AZTI 결과에 따라 CBF 알고리즘 이용해 추천 리스트를 제공한다.
>   + 사이트 내 활동 기록(좋아요)이 쌓이면 CF 알고리즘을 이용한 개인 맞춤형 추천 리스트를 제공한다.
>
> + 상세 페이지
>
>   + 해당 가게의 평균 평점, 개업 년도, 주소, 대표 메뉴 등의 정보를 제공한다.
>
>   + 아이콘을 눌러 '좋아요' 등록과 '가본곳' 등록을 할 수 있다.
>   + KAKAO MAP API를 이용해 구현한 지도로 해당 가게의 위치를 제공한다  .
>   + '유사 식당'으로 아이템 기반 협업 필터링(CF) 알고리즘을 이용해 구현한 해당 노포와 유사한 가게의 추천 리스트를 제공한다.
>   + 해당 가게에 작성된 리뷰 목록을 제공한다. 각 리뷰에는 작성일, 평점, 내용, 사진이 포함되어 있다.
>

</br>

### Review 관련

> + 리뷰 작성이 가능하다. 가게에 대한 평점, 내용, 사진을 첨부해 작성할 수 있다. 
> + 리뷰 삭제와 수정이 가능하다.

</br>

----

</br>

## 💻 기술 스택

</br>

<h3 align="center">💫 Front-end</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img  src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img  src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=React&logoColor=white"> </br> <img  src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <img  src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img  src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img  src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img  src="https://img.shields.io/badge/MUI-1976D2?style=for-the-badge&logo=MUI&logoColor=white"></br> <img  src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white">
<img  src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
</p>
</br>
<h3 align="center">💫 Back-end</h3>

</br>

<p align="center">
<img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
<img  src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img  src="https://img.shields.io/badge/Spring Security-FF9900?style=for-the-badge&logo=Spring Security&logoColor=white"> <img  src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white"> </br><img  src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"> <img  src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img  src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"> <img  src="https://img.shields.io/badge/Amazon S3-FF9900?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img  src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">  <img  src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white"></br> <img  src="https://img.shields.io/badge/INTELLIJ IDEA-2C2255?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"> <img  src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">

</p>
</br>
<h3 align="center">💫 Big-data</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=Pandas&logoColor=white"> <img  src="https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=Numpy&logoColor=white"> <img  src="https://img.shields.io/badge/scikit learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"> <img  src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white">
</p>
</br>
<h3 align="center">💫 CI/CD</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white">
<img  src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img  src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <img  src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white">    <img  src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">
</p>
</br>
<h3 align="center">💫 Team Collaboration Tool</h3>

</br>

<p align="center">
<img  src="https://img.shields.io/badge/Mattermost-0058CC?style=for-the-badge&logo=Mattermost&logoColor=white"> <img  src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"> <img  src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
</p>
</br>

---

</br>


## 사용 방법

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



## 프로젝트 파일 구조

### Back

```
backend
  ├── build 
  ├── gradle
  ├── out
  ├── src
  │   ├── main
  │   │   └── generated
  │   │   │   └── com.ssafy.nopo.db.entity
  │   │   └── java
  │   │   │   └── com.ssafy.nopo
  │   │   │   │   ├── api
  │   │   |   |   │   ├── controller
  │   │   |   |   │   ├── request
  │   │   |   |   │   ├── response
  │   │   |   |   │   └── service
  │   │   │   │   ├── common
  │   │   |   |   │   └── auth
  │   │   |   |   |   │   ├── client
  |   │   │   |   |   │   └── jwt
  │   │   |   |   │   ├── exception
  │   │   |   |   │   └── util
  │   │   │   │   ├── config
  │   │   │   │   ├── db
  │   │   |   |   │   ├── entity
  │   │   |   |   │   └── repository
  │   │   │   │   ├── NopoApplication
  │   │   └── resources
  │   │   │   └── application.properties
  │   └── test
  ├── gitignore
  ├── build.gradle
  ├── Dockerfile
  ├── gradlew
  ├── gradlew.bat
  └── settings.gradle

```



### Back-data

```
backend-data
  ├── main
  │   ├── migrations
  │   └── template/main
  ├── recommend
  │   ├── crawling
  │   ├── csvfile
  │   ├── migrations
  │   ├── recom
  |   │   ├── cbf.py
  |   │   ├── database.py
  |   │   ├── knn.py
  |   │   └── test.py
  │   ├── admin.py
  │   ├── apps.py
  │   ├── models.py
  │   ├── tests.py
  │   ├── urls.py
  │   └── views.py
  ├── wherehouse
  │   ├── asgi.py
  │   ├── settings.py
  │   ├── urls.py
  │   └── wsgi.py
  ├── gitignore
  ├── Dockerfile
  ├── manage.py
  ├── requirements.txt
  ├── gradlew.bat
  └── settings.gradle

```



### Front

```
FRONTEND
  ├── node_modules
  ├── public
  └── src
  │   ├── api
  |   │   ├── api
  |   │   ├── index.ts
  |   │   ├── reqType.ts
  |   │   ├── resType.ts
  |   │   └── settings.ts
  │   ├── assets
  │   ├── Form
  |   │   ├── ReviewComp
  |   │   ├── NewReviewForm.tsx
  |   │   └── ReviewForm.tsx
  │   ├── needConfirm
  |   │   ├── NeedConfirm.tsx
  |   │   ├── RestoInfo.tsx
  |   │   └── SearchCompo.tsx
  │   ├── pages
  |   │   ├── CommonComp
  |   │   ├── DetailPage
  |   │   ├── MainPage
  |   │   ├── MyPage
  |   │   ├── SearchPage
  |   │   ├── StartPage
  |   │   ├── UserComponents
  |   │   ├── userStore
  |   │   └── IndexPage.tsx
  │   ├── style
  |   |   └── style.css
  │   ├── App.css
  │   ├── App.tsx
  │   ├── index.css
  │   ├── main.tsx
  │   ├── PrivateRoute.tsx
  │   └── vite-env.d.ts
  ├── gitignore
  ├── Dockerfile
  ├── index.html
  ├── package-lock.json
  ├── package.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  └── vite.config.ts
   
```



## 협업 툴

- GIt
- Notion
- JIRA
- MatterMost
- Webex



## 협업 환경

- Gitlab
  - 버전 관리
  - 이슈 발행 해결
  - MR시, 코드 리뷰를 진행
- JIRA
  - 매주 목표 량을 설정하여 Sprint 진행
  - 업무 할당량을 Story point로 설정하고, In-progress => Done 순으로 작업
- Notion
  - 아침마다 scrum을 진행하고 회의가 있을 때마다 회의록에 기록
  - 컨벤션 정리
  - 문서 관리



## 프로젝트 산출물

- API
- ERD
- 프로토타입
- 아키텍처
- 컨벤션





## 그집 어데고 화면



- 로그인

<img src="README.assets/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif" alt="로그인" style="zoom: 80%;" />

- AZTI 테스트

<img src="README.assets/AZTI%ED%85%8C%EC%8A%A4%ED%8A%B8.gif" alt="AZTI테스트" style="zoom:80%;" />



- 카카오톡 공유하기

<img src="README.assets/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0.gif" alt="카카오톡 공유하기" style="zoom:80%;" />



- 메인페이지

<img src="README.assets/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="메인페이지" style="zoom:80%;" />

- 써치페이지

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="써치페이지" style="zoom:80%;" />

- 마이페이지

<img src="README.assets/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="마이페이지" style="zoom:80%;" />

- 써치페이지 디테일

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%94%ED%85%8C%EC%9D%BC.gif" alt="써치페이지 디테일" style="zoom:80%;" />

- 노포디테일페이지

<img src="README.assets/%EB%85%B8%ED%8F%AC%EB%94%94%ED%85%8C%EC%9D%BC%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="노포디테일페이지" style="zoom:80%;" />



- 좋아요 등록 취소

<img src="README.assets/%EC%A2%8B%EC%95%84%EC%9A%94%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="좋아요 등록 취소" style="zoom:80%;" />

- 방문한 곳 등록 취소

<img src="README.assets/%EB%B0%A9%EB%AC%B8%ED%95%9C%EA%B3%B3%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="방문한곳 등록 취소" style="zoom:80%;" />

- 리뷰 작성

<img src="README.assets/%EB%A6%AC%EB%B7%B0%20%EC%9E%91%EC%84%B1.gif" alt="리뷰 작성" style="zoom:80%;" />

- 리뷰 삭제

<img src="README.assets/%EB%A6%AC%EB%B7%B0%EC%82%AD%EC%A0%9C.gif" alt="리뷰삭제" style="zoom:80%;" />

