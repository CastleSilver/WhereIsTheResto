import React, { useState } from "react"
import Review from "../../CommonComp/Review"
import { Box } from "@mui/material"

const reviews = [
  {
    id: 0,
    restoName: "만선옥",
    address: "연신내",
    content:
      "이 집에서 파는 모든 메뉴가 맛있어요... 진짜 안 가보셨다면 꼭 가보세요!",
    rating: 4,
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
  },
  {
    id: 1,
    restoName: "SSAFY",
    address: "역삼동",
    content: "파인애플 복음밥이 제일 맛있어요! 강추드립니다.",
    rating: 3,
    imageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjVfMjY1/MDAxNTkzMDY2MzczNjIz.Oxgm4jwOq9QCVfnsjVZ0ALSgC-wCcLFBJW6ha-8-bbYg.IpTbFWIu6kRfC19oi6KrcEFd5MRocUQnFvUhPx0tL5Ig.JPEG.yeomju311/IMG_6107.jpg?type=w800",
  },
  {
    id: 2,
    restoName: "다동 황소막창",
    address: "연신내",
    content: "이 가게는 바이브와 맛으로 설명 끝",
    rating: 5,
    imageUrl:
      "https://mp-seoul-image-production-s3.mangoplate.com/56185_1652969795022803.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
  },
]

export default function MyReview() {
  return (
    <div>
      {reviews.map((review) => {
        return (
          <Box sx={{ marginBottom: "15px" }} key={review.id}>
            <Review review={review} />
          </Box>
        )
      })}
    </div>
  )
}
