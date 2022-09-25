// Base Import
import React, { useState } from "react"
import { Link } from "react-router-dom"

// Image
import { Logo } from "../../assets/imageUrl"

// MUI
import { Grid, Box } from "@mui/material"
import BottomBar from "../../components/BottomBar"

// Components
import BestCard from "./Card"
import CaroArea from "./CaroArea"

export default function MainPage() {
  const [myType, setMyType] = useState("감성촉촉 힙스터 한국 아재")

  return (
    <>
      <Box sx={{ marginY: "70px" }}>
        <p>
          <span className="text-yellow-1">{myType}</span>
          <span className="text-orange-1">인</span>
        </p>
        <p>
          <span className="text-yellow-1">User</span>
          <span className="text-orange-1">를 위한 맛집 리-스트</span>
        </p>
      </Box>
      <Box sx={{ marginY: "70px" }}>
        <BestCard />
      </Box>
      <Box sx={{ marginY: "70px" }}>
        <CaroArea />
      </Box>
    </>
  )
}
