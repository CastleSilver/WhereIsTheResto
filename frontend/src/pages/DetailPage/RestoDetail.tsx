// React 시스템 Import
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import { getInfoAsync, selectResto } from "../userStore/restoSlice"

import { useLocation, useParams } from "react-router-dom"

// 기타 라이브러리 Import
import { Box } from "@mui/material"

// Components Import
import LoadingPaper from "../CommonComp/LoadingPaper"
import RestoArea from "./Components/RestoArea"
import Reviews from "./Components/Reviews"
import Map from "../CommonComp/Map"

export default function RestoDetail() {
  const { restoId } = useParams()
  const restoInfo = useAppSelector(selectResto)
  const dispatch = useAppDispatch()

  window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(getInfoAsync(Number(restoId)))
  }, [dispatch])

  return (
    <>
      {/* <LoadingPaper /> */}
      {restoInfo === undefined && <LoadingPaper />}
      {restoInfo !== undefined && (
        <Box>
          {/* 식당 정보 이름, 사진, 메뉴, 위치, 경력, 좋아요 수 */}

          <RestoArea />
          <Box sx={{ marginBottom: "42px" }}></Box>
          {/* 지도 */}
          <Map />
          <Box sx={{ marginBottom: "42px" }}></Box>
          {/* 사용자 리-뷰 => 유저의 프로필 사진, 이름, 리뷰 내용, 평점*/}
          <Reviews />
        </Box>
      )}
    </>
  )
}
