import React from "react"
import RestoInfo from "../../CommonComp/RestoInfo"

//   {
//     id: 0,
//     restoName: "만선옥",
//     address: "연신내",
//     menu1: '노가리',
//     menu2: '팥빙수',
//   },

const restos = [
  {
    id: 0,
    restoName: "만선옥",
    address: "연신내",
    menu1: "노가리",
    menu2: "팥빙수",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
  },
  {
    id: 1,
    restoName: "SSAFY",
    address: "역삼동",
    menu1: "파인애플 볶음밥",
    menu2: "라면",
    imageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjVfMjY1/MDAxNTkzMDY2MzczNjIz.Oxgm4jwOq9QCVfnsjVZ0ALSgC-wCcLFBJW6ha-8-bbYg.IpTbFWIu6kRfC19oi6KrcEFd5MRocUQnFvUhPx0tL5Ig.JPEG.yeomju311/IMG_6107.jpg?type=w800",
  },
  {
    id: 2,
    restoName: "다동 황소막창",
    address: "연신내",
    menu1: "막창",
    menu2: "쭈꾸미",
    imageUrl:
      "https://mp-seoul-image-production-s3.mangoplate.com/56185_1652969795022803.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
  },
]

export default function MyLike() {
  return <RestoInfo resto={restos[0]} />
}
