# 🏠 Where Is The Resto?
🥈 Excellence Award, SSAFY Specialized Project 🥈

---

## 📌 Project Overview

- **Title**: Where Is The Resto?
- **Summary**: A web service that recommends traditional local restaurants to MZ generation users, aiming to revitalize old and lesser-known eateries affected by COVID-19.
- **Duration**: September 29, 2022 – October 7, 2022
- **Demo Video**: [YouTube Link](https://www.youtube.com/watch?v=E8ZgJ-AAf0k)

---


## 🧑 Team Members

| Team Lead     | Member         | Member        | Member         |
| ------------- | -------------- | ------------- | -------------- |
| Chanho Won    | Minjoo Kim     | Hyeonyeol Kim | Seongeun Heo   |
| Frontend      | Backend        | Backend       | Backend        |
| UI/UX, wireframes, planning & design | AWS setup, CI/CD, user & AZTI APIs, JWT, Kakao login | Data crawling, CBF recommendation algorithm, API development | Review & restaurant APIs, CF recommendation algorithm, DB & S3 setup |


---

## 🗂️ Key Features

### 👤 User Features
- Simple registration and login via Kakao social login
- Personality-based AZTI test at sign-up
- Ability to retake AZTI test and edit user profile
- My Page shows:
  - Liked restaurants
  - Visited restaurants
  - User’s reviews

### 🍜 Restaurant Features
- **Main Page**:
  - Hybrid recommendation combining CBF and CF algorithms
  - AZTI-based recommendations for new or inactive users
  - CF-based personalized suggestions based on like history
- **Detail Page**:
  - Restaurant details: average rating, founding year, address, menu
  - Like and Visit toggles
  - Embedded Kakao Map
  - Similar restaurants using item-based CF
  - Display of all reviews with text, rating, date, and photos

### 📝 Review Features
- Add review with rating, content, and image
- Edit and delete existing reviews

---

## 💻 Tech Stack

### 💫 Frontend
- React, TypeScript, Vite, Redux
- MUI, Kakao SDK, React Router
- Visual Studio Code

### 💫 Backend
- Java, Spring Boot, Spring Security, Hibernate
- MySQL, Amazon S3
- Docker, Jenkins, NGINX
- IntelliJ IDEA

### 💫 Backend-Data
- Python, Django
- Pandas, NumPy, Scikit-learn, Selenium

### 💫 CI/CD
- Amazon EC2, Docker, Jenkins, Ubuntu

### 💫 Collaboration Tools
- GitLab, JIRA, Notion, Mattermost, Webex
---
## 🧑‍💻 Collaboration Environment

- **GitLab**:
  - Source control
  - Issue tracking and merge requests
  - Code review process
- **JIRA**:
  - Sprint planning using story points
  - Agile workflow management
- **Notion**:
  - Daily scrum records
  - Documentation and team conventions

---

## 📄 Deliverables

- API Documentation
- Entity Relationship Diagram (ERD)
- Prototypes
- System Architecture
- Development Conventions 

---

## 🖥️ How to Run

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



## File Tree

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

---


## 🎬 Screenshots & GIFs



- Login

<img src="README.assets/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif" alt="로그인" style="zoom: 80%;" />

- AZTI Test

<img src="README.assets/AZTI%ED%85%8C%EC%8A%A4%ED%8A%B8.gif" alt="AZTI테스트" style="zoom:80%;" />



- Share via SNS

<img src="README.assets/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0.gif" alt="카카오톡 공유하기" style="zoom:80%;" />



- Main Page

<img src="README.assets/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="메인페이지" style="zoom:80%;" />

- Search Page

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="써치페이지" style="zoom:80%;" />

- MyPage

<img src="README.assets/%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="마이페이지" style="zoom:80%;" />

- Search Page Detail

<img src="README.assets/%EC%8D%A8%EC%B9%98%ED%8E%98%EC%9D%B4%EC%A7%80%20%EB%94%94%ED%85%8C%EC%9D%BC.gif" alt="써치페이지 디테일" style="zoom:80%;" />

- Resto Page Detail

<img src="README.assets/%EB%85%B8%ED%8F%AC%EB%94%94%ED%85%8C%EC%9D%BC%ED%8E%98%EC%9D%B4%EC%A7%80.gif" alt="노포디테일페이지" style="zoom:80%;" />



- Likes

<img src="README.assets/%EC%A2%8B%EC%95%84%EC%9A%94%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="좋아요 등록 취소" style="zoom:80%;" />

- Visited

<img src="README.assets/%EB%B0%A9%EB%AC%B8%ED%95%9C%EA%B3%B3%20%EB%93%B1%EB%A1%9D%20%EC%B7%A8%EC%86%8C.gif" alt="방문한곳 등록 취소" style="zoom:80%;" />

- Review

<img src="README.assets/%EB%A6%AC%EB%B7%B0%20%EC%9E%91%EC%84%B1.gif" alt="리뷰 작성" style="zoom:80%;" />

<img src="README.assets/%EB%A6%AC%EB%B7%B0%EC%82%AD%EC%A0%9C.gif" alt="리뷰삭제" style="zoom:80%;" />

