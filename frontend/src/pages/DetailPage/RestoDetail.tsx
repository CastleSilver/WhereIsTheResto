import React from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import RestoInfo from "./Components/RestoInfo"
import Reviews from "./Components/Reviews"
import Map from "../CommonComp/Map"

const resto = {
  id: 0,
  restoName: "만선옥",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
  x: 36.223,
  y: 123.223,
}

export default function RestoDetail() {
  const { restoId } = useParams()

  return (
    <Box sx={{ pt: "10vw", px: "5vw" }}>
      {/* 식당 정보 이름, 사진, 메뉴, 위치, 경력, 좋아요 수 */}
      <RestoInfo />

      {/* 지도 */}
      <Map />
      {/* 사용자 리-뷰 => 유저의 프로필 사진, 이름, 리뷰 내용, 평점*/}
      <Reviews />
    </Box>
  )
}
