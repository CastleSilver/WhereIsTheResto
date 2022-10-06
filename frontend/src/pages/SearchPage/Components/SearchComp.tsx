import { Box, Avatar, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import styled from "styled-components"

import { useNavigate, useParams } from "react-router-dom"
import React from "react"
import RestoInfo from "./RestoInfo"

import { resto as restoAPI } from "../../../api/"
import LoadingPaper from "../../CommonComp/LoadingPaper"
import PaperBackground from "../../CommonComp/PaperBackground"
import axios from "axios"

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

export default function SearchComp() {
  const [restos, setRestos] = useState<any[]>([])
  const { searchNum }: any = useParams()
  const navigate = useNavigate()

  const getList = async (num: string) => {
    let wList: any = []

    if (num === "0") {
      await axios
        // .get("http://127.0.0.1:8000/data/recommend/resto/thirty")
        .get("http://j7a401.p.ssafy.io/data/recommend/resto/thirty")
        .then((res) => {
          wList = res.data.thirList
        })
    } else if (num === "1") {
      await axios
        // .get("http://127.0.0.1:8000/data/recommend/resto/liked")
        .get("http://j7a401.p.ssafy.io/data/recommend/resto/liked")
        .then((res) => {
          wList = res.data.likeList
        })
    } else if (num === "2") {
      await axios
        .get("http://j7a401.p.ssafy.io/data/recommend/resto/youtuber")
        .then((res) => {
          wList = res.data.youList
        })
    } else if (num === "3") {
      await axios
        .get("http://j7a401.p.ssafy.io/data/recommend/resto/developer")
        .then((res) => {
          wList = res.data.devList
        })
    }

    setRestos(wList)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getList(searchNum)
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
