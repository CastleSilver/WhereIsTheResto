import { Box, Avatar, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import styled from "styled-components"
import PaperBackground from "../pages/CommonComp/PaperBackground"
import { useNavigate, useParams } from "react-router-dom"
import React from "react"
import RestoInfo from "./RestoInfo"
import LoadingPaper from "../pages/CommonComp/LoadingPaper"
import { resto as restoAPI } from "../api/"

const url = "http://www.100ssd.co.kr/news/photo/201901/59142_39562_910.jpg"

const titles = [
  "30년 이상 노포",
  "인기 노포",
  "유투버 추천 리스트",
  "1등팀의 추천 리스트",
]

const btnStyle = {
  fontSize: "9vw",
  textAlign: "left",
}

const topStlye = {
  fontSize: "13vw",
  my: "24px",
  color: "rgb(2 49 119)",
  wordBreak: "keep-all",
}

const resto = {
  id: 1,
  resto_name: "샘플 타이틀",
  thumbnail: url,
  address: "샘플구 샘플동 샘플리 샘플건물 s-s",
  menu1: "sample1",
  menu2: "sample2",
}

const restoSpring = {
  oldRestoList: [resto, resto],
  popularList: [resto, resto],
}

export default function SearchComp() {
  const [restos, setRestos] = useState<any[]>([])
  const { searchNum }: any = useParams()
  const navigate = useNavigate()

  const getList = async (ind: string) => {
    const wList = await restoAPI.getOther()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    switch (Number(searchNum)) {
      case 0:
        setRestos(restoSpring.oldRestoList)
        break

      case 1:
        setRestos(restoSpring.oldRestoList)
        break

      case 2:
        setRestos(restoSpring.oldRestoList)
        break

      case 3:
        setRestos(restoSpring.oldRestoList)
        break
    }
  }, [setRestos])

  return (
    <>
      {restos.length === 0 && <LoadingPaper />}
      {restos.length !== 0 && (
        <>
          <Box onClick={() => navigate(-1)} sx={btnStyle}>
            뒤로가기
          </Box>
          <Box sx={topStlye}>{titles[searchNum]}</Box>
          {restos.map((r, index) => {
            return (
              <Box key={index}>
                <RestoInfo resto={r} />
              </Box>
            )
          })}
        </>
      )}
    </>
  )
}
