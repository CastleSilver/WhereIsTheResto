# 그 집 어데고

## 빅데이터 기반의 노포 추천 서비스



## 팀원 역할 분배

|                        팀장                        |                             팀원                             |                        팀원                        |                             팀원                             |
| :------------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------: | :----------------------------------------------------------: |
|                       원찬호                       |                            김민주                            |                       김현열                       |                            허성은                            |
|                      FRONTEND                      |                           BACKEND                            |                      BACKEND                       |                           BACKEND                            |
| UI/ UX<br />와이어 프레임 설계<br />기획 및 디자인 | AWS 및 CI/CD 구성<br />회원 및 AZTI API<br />JWT 및 소셜 로그인 | 데이터 크롤링<br />CBF 추천 알고리즘<br />추천 API | 리뷰, 식당 API<br />CF 추천 알고리즘<br /> S3 구축 및 DB 설계 |



## 프로젝트 진행 기간

2022.09.29(월) ~ 2022.10.07(금)

SSAFY 7기 특화 프로젝트



## 주요 기능

## User

1. 카카오 소셜 로그인
2. 리뷰 CRUD
4. 노포 추천 받을 수 있다
5. 마이 페이지
6. AZTI 테스트

## Review

1. 별점 등록
2. 사진 첨부 가능

## My page

1. 내 AZTI 타입 보여주기
2. AZTI 재평가
3. 닉네임 수정
4. 찜 목록 보기
5. 리뷰 모아보기
6. 가본 곳 모아보기

## Recommend - 사용자 맞춤 추천

1. 기준
   1. AZTI를 통해 얻은 유저의 성향을 활용한 노포 추천
      1. 야외 / 실내
      2. 유명한 곳 / 덜 알려진 곳
   2. 찜목록과 유사한 노포 추천
2. 리스트
   1. 처음 사용 시 (리뷰 0개)
      1. 모두 AZTI만 반영하여 추천
   2. 유저 활동 내역별 구분
      1. 좋아요 0개 → `a` 적용
      2. 좋아요 1~5개
         - 5 (AZTI) : 3 (유저 맞춤) : 2 (랜덤)
      3. 좋아요 6~15개
         - 4 (AZTI) : 4 (유저 맞춤) : 2 (랜덤)
      4. 좋아요 15개 이상
         - 3 (AZTI) : 5 (유저 맞춤) : 2 (랜덤)
      5. 좋아요 30개 이상
         - 1 (AZTI) : 7 (유저 맞춤) : 2 (랜덤)



## 주요 기술

**Backend**

- Backend Framework: Spring Boot 2.7.3
- JPA + Querydsl
- Querydsl : 5.0.0
- Spring Security
- WAS: Gradle
- Java 8
- IDE : IntelliJ, Visual Studio Code
- DB: MySQL 8.0.30
- python 3.9.10
- Django 4.1.1
- Django-cors-headers 3.13.0
- Djangorestframework 3.14.0
- PyMySQL 1.0.2



**Frontend**

- Visual Studio Code IDE
- React 18
- Redux 8
- react-router-dom 6
- sweetalert2 11
- typescript 4
- vite 3
- mui 5



**CI/CD**

- AWS EC2
- NGINX
- docker
- Jenkins



**big-data**

- pandas 1.5.0
- numpy 1.23.3
- scikit-learn 1.1.2
- selenium 4.5.0
- beautifulsoup4 4.11.1
- kiwipiepy 0.14.0



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
