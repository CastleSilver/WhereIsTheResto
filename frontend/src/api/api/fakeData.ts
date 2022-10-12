const userLikeVisieted = {
  id: 1,
  name: "정돈정돈",
  imageUrl: "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C",
  address: "서울특별시 종로구 대학로9길 12",
  age: 2009,
}

const restoImg = "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C"
const userImg = "https://i.ytimg.com/vi/qk4NcRdIqVA/maxresdefault.jpg"
const userReview = {
  id: 1,
  imageUrl: [restoImg, restoImg],
  // imageUrl: [],
  content: "대 존맛탱 대 존맛탱",
  rating: 4.3,
  regDate: "2022-02-14",
  restoName: "정돈",
}

export const userInfo = {
  nickname: "임시 유저의 닉네임",
  email: "chwon03@naver.com",
  gender: "male",
  profileImageURL: userImg,
  aztiType: "감성 알뜰 힙스터 술린이",
  like: [userLikeVisieted, userLikeVisieted],
  visited: [userLikeVisieted, userLikeVisieted],
  review: [userReview, userReview, userReview],
}

export const restoInfo = {
  id: -1,
  restoAge: 2012,
  thumbnail: "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C",
  address: "서울특별시 종로구 대학로9길 12",
  name: "정돈 정돈 정돈 정돈 정돈",
  sectors: "한식", // 업종
  locationX: 37.5538502,
  locationY: 126.981049525,
  phoneNumber: "02-987-0924",
  menu1: "히레 카츠",
  menu2: "카레 덮밥",
  grade: "GRADE",
  rating: 4.1,
  liked: true,
  likedCnt: 15,
  visited: true,
  visitedCnt: 17,
  review: [userReview, userReview],
  recomList: [],
}

export const recomList = [restoInfo, restoInfo, restoInfo, restoInfo]
