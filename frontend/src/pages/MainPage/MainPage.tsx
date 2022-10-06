// React 시스템 Import
import { useEffect, useState } from "react"
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
import axios from "axios"

// Styling
import "../../style/style.css"
import { CollectionsBookmarkRounded } from "@mui/icons-material"

const sideLeftAnimation = keyframes`${slideInLeft}`

const SideRLeft = styled.div`
  animation: 1s ${sideLeftAnimation};
  position: relative;
  top: 5%;
  z-index: 10;
`

export default function MainPage() {
  const { pathname } = useLocation()
  const [recomList, setRecomList] = useState([])

  const isProgress = useAppSelector(selectRecomStatus)
  const dispatch = useAppDispatch()

  // 장고 API 요청에 필요한 데이터들
  const userId = 121
  const azti = "mnhc"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    axios({
      // url: `http://localhost:8000/data/recommend/resto/${userId}/${azti}/`,
      url: `http://j7a401.p.ssafy.io/data/recommend/resto/${userId}/${azti}/`,
      method: "GET",
    })
      .then((res: any) => {
        const temp = res.data.recomList
        setRecomList(temp)
      })
      .catch((e: any) => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    sessionStorage.setItem("pageNum", "0")
  })
  return (
    <Box>
      {Object.keys(recomList).length === 0 && <LoadingPaper />}
      {Object.keys(recomList).length !== 0 && (
        <>
          <Banner />
          <SideRLeft>
            {/* 마진 */}
            <Box sx={{ height: "130px" }}></Box>

            {/* 제일 인기 많은 가게 추천 Area */}
            <p
              // *******************************************
              // className={"title1"}
              className={"title-text-lg"}
              style={{ textAlign: "left", fontSize: "10vw" }}
              // *******************************************
            >
              남바-원!
            </p>
            <BestResto bestResto={recomList[0]} />

            {/* 다른 추천 가게들 Carousel */}
            <p
              // *******************************************
              // className={"title1"}
              className={"title-text-lg"}
              style={{ textAlign: "left", fontSize: "8.5vw" }}
              // *******************************************
            >
              여기도 정-말 맛있는데
            </p>
            <OtherResto restos={recomList.slice(1, recomList.length)} />
          </SideRLeft>
        </>
      )}
    </Box>
  )
}
