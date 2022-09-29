// import axios from "axios"
import { setRequest, myAxios } from "../settings"
import { userUpdateType } from "../reqType"

const USERS = "/user"

const temp = {
  userId: 1,
  nickname: "Won Chanho",
  email: "chwon03@naver.com",
  gender: "M",
  profileImageURL:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=",
  aztiType: "감성 촉촉 아재스러운 MZ 세대 젊은이",
  like: [
    {
      id: 0,
      name: "(좋아요) 황소곱창",
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfNzQg/MDAxNjA0MjE2MzA4MDI3.fEX8J7yHUiznaWaCNcMRFYJd9ptQ0RUdYFa5skmfrtEg.KW_tgAJ7uh8QLBclpk9AZ8p6sr9-XrYO2yhaVsHeL1Eg.JPEG.bsb7411/C1FE926F-60D9-46F5-9137-EEB81B3BE9A9.jpg?type=w800",
      address: "서울시 어딘지몰라",
      age: 27,
    },
  ],

  review: [
    {
      id: 0,
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfNzQg/MDAxNjA0MjE2MzA4MDI3.fEX8J7yHUiznaWaCNcMRFYJd9ptQ0RUdYFa5skmfrtEg.KW_tgAJ7uh8QLBclpk9AZ8p6sr9-XrYO2yhaVsHeL1Eg.JPEG.bsb7411/C1FE926F-60D9-46F5-9137-EEB81B3BE9A9.jpg?type=w800",
      content: "너무 맛있어요!",
      rating: 4,
      regDate: "2022-04-20",
      restoName: "다동 황소곱창",
    },
  ],
}

const user = {
  info: async (userId = 4) => {
    const reqData = {
      uri: USERS + `/${userId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    return { data: temp }
  },

  delete: async () => {
    const reqData = {
      uri: USERS + "",
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
  },

  update: async (data: userUpdateType) => {
    const reqData = {
      uri: USERS + "",
      method: "PATCH",
      data,
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
  },
}

export default user
