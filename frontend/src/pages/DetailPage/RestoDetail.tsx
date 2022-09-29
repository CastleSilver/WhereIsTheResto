import React, { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import { getInfoAsync, selectResto } from "../userStore/restoSlice"

import { useLocation, useParams } from "react-router-dom"
import { Box } from "@mui/material"
import RestoArea from "./Components/RestoArea"
import Reviews from "./Components/Reviews"
import Map from "../CommonComp/Map"

// API
import LoadingPaper from "../CommonComp/LoadingPaper"

export default function RestoDetail() {
  const restoInfo = useAppSelector(selectResto)
  const dispatch = useAppDispatch()
  const { restoId } = useParams()
  window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(getInfoAsync(Number(restoId)))
  }, [dispatch])

  return (
    <>
      {/* <LoadingPaper /> */}
      <Box sx={{ px: "5vw" }}>
        {/* 식당 정보 이름, 사진, 메뉴, 위치, 경력, 좋아요 수 */}

        <RestoArea />
        <Box sx={{ marginBottom: "42px" }}></Box>
        {/* 지도 */}
        <Map />
        <Box sx={{ marginBottom: "42px" }}></Box>
        {/* 사용자 리-뷰 => 유저의 프로필 사진, 이름, 리뷰 내용, 평점*/}
        <Reviews />
      </Box>
    </>
  )
}
