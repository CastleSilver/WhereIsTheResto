import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import RestoArea from "./Components/RestoArea"
import Reviews from "./Components/Reviews"
import Map from "../CommonComp/Map"

// API
import { resto as restoAPI } from "../../api/index"

export default function RestoDetail() {
  const [restoInfo, setRestoInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { restoId } = useParams()

  // const getResto = async () => {
  //   const newRestoInfo = await restoAPI.get(Number(restoId))
  //   setRestoInfo(newRestoInfo)
  //   setIsLoading(false)
  // }

  // getResto()

  return (
    <Box sx={{ px: "5vw" }}>
      {/* 식당 정보 이름, 사진, 메뉴, 위치, 경력, 좋아요 수 */}
      <h1>{isLoading}</h1>

      <RestoArea />
      <Box sx={{ marginBottom: "42px" }}></Box>
      {/* 지도 */}
      <Map />
      <Box sx={{ marginBottom: "42px" }}></Box>
      {/* 사용자 리-뷰 => 유저의 프로필 사진, 이름, 리뷰 내용, 평점*/}
      <Reviews />
    </Box>
  )
}
