그 집 어데고



팀장 : 원찬호 

팀원 : 김민주

팀원 : 허성은

팀원 : 김현열



## 프로젝트 진행 기간

2022.09.29(월) ~ 2022.10.07(금)

SSAFY 7기 특화 프로젝트 [ 그 집 어데고 ]



## 배경

- 골목 상권 활성화
- 코로나 19로 인해 영업의 어려움을 겪는 노포 식당 상권 활성화



## 개요





## 주요 기능

- 




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
- Redux



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
  │   ├── assets
  │   ├── components
  │   ├── images
  │   ├── pages
  │   ├── App
  │   └── index
  ├── env
  ├── gitignore
  ├── .prettierrc
  ├── jsconfig
  ├── package-lock
  ├── package
  └── README
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
- 스토리보드
