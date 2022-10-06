import { Box, Avatar, Grid } from "@mui/material"
import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import cardImg from "../../assets/cardImg.png"
import PaperBackground from "../CommonComp/PaperBackground"

const cardStyle = {
  height: "60vw",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}

const imgStyle: {} = {
  position: "absolute",
  opacity: 0.35,
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
}

const contentArea = {
  position: "relative",
  height: "100%",
  fontSize: "12vw",
  opacity: "100%",
  zIndex: 11,
  wordBreak: "keep-all",
  px: "15px",
}

const titles = [
  "30년 이상 노포",
  "인기 노포",
  "유투버 추천 리스트",
  "1등팀의 추천 리스트",
]

const getCard = (index: number) => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    sessionStorage.setItem("pageNum", "1")
  })
  return (
    <PaperBackground>
      <Box sx={cardStyle} onClick={() => navigate(`/search/${index}`)}>
        <Grid
          container
          justifyContent="center"
          alignContent={"center"}
          sx={contentArea}
        >
          {titles[index]}
        </Grid>
        <img style={imgStyle} src={cardImg} />
        <hr />
      </Box>
    </PaperBackground>
  )
}

export default function SearchPage() {
  return (
    <>
      <Box sx={{ fontSize: "15vw", color: "rgb(2 49 119)" }}>추-천 리스트</Box>

      <hr />
      {titles.map((title, index) => {
        return (
          <Box key={index} sx={{ mt: "24px" }}>
            {getCard(index)}
          </Box>
        )
      })}
    </>
  )
}
