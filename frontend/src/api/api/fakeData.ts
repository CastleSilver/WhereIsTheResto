const userLikeVisieted = {
  id: 1,
  name: "정돈정돈",
  imageUrl: "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C",
  address: "서울특별시 종로구 대학로9길 12",
  age: 23,
}

const restoImg = "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C"

const userReview = {
  id: 1,
  imageUrl: [restoImg, restoImg],
  content: "대 존맛탱 대 존맛탱",
  rating: 4.3,
  regDate: "2022-02-14",
  restoName: "정돈",
}

export const userInfo = {
  nickname: "너무나도 맛있게 먹는 아저씨",
  email: "chwon03@naver.com",
  gender: "male",
  profileImageURL: "https://cdn-icons-png.flaticon.com/512/2143/2143252.png",
  aztiType: "감성 알뜰 힙스터 술린이",
  like: [userLikeVisieted, userLikeVisieted],
  visited: [userLikeVisieted, userLikeVisieted],
  review: [userReview, userReview, userReview],
}

export const restoInfo = {
  id: 1,
  restoAge: 20,
  thumbnail: "https://t1.daumcdn.net/cfile/blog/9949953B5DAAD7792C",
  address: "서울특별시 종로구 대학로9길 12",
  name: "정돈",
  sectors: "한식", // 업종
  locationX: 35.2123,
  locationY: 112.3322,
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
