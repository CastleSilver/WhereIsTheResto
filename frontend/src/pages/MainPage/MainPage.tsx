// React 시스템 Import
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../userStore/hooks"
import {
  getRecomAsync,
  selectRecom,
  selectRecomStatus,
} from "../userStore/recomSlice"

// 기타 라이브러리 Import
import { Box } from "@mui/material"
import { slideInLeft } from "react-animations"
import styled, { keyframes } from "styled-components"

// Components Import
import Banner from "./Components/Banner"
import BestResto from "./Components/BestResto"
import OtherResto from "./Components/OtherResto"
import LoadingPaper from "../CommonComp/LoadingPaper"

const sideLeftAnimation = keyframes`${slideInLeft}`

const SideRLeft = styled.div`
  animation: 1s ${sideLeftAnimation};
  position: relative;
  top: 5%;
  z-index: 10;
`

export default function MainPage() {
  const { pathname } = useLocation()

  const recomList = useAppSelector(selectRecom)
  const isProgress = useAppSelector(selectRecomStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    dispatch(getRecomAsync())
  }, [dispatch])

  useEffect(() => {
    sessionStorage.setItem("pageNum", "0")
  })
  return (
    <Box>
      {isProgress === "pending" && <LoadingPaper />}
      {isProgress !== "pending" && (
        <>
          <Banner />
          <SideRLeft>
            {/* 마진 */}
            <Box sx={{ height: "200px" }}></Box>

            {/* 제일 인기 많은 가게 추천 Area */}
            <p className="title-text-lg" style={{ textAlign: "left" }}>
              남바-원!
            </p>
            <BestResto bestResto={recomList[0]} />

            {/* 다른 추천 가게들 Carousel */}
            <p className="title-text-lg" style={{ textAlign: "left" }}>
              여기도 정-말 맛있는데
            </p>
            <OtherResto restos={recomList.slice(1, recomList.length)} />
          </SideRLeft>
        </>
      )}
    </Box>
  )
}
