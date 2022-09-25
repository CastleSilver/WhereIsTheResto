import { BurstMode } from "@mui/icons-material"
import { Grid, Button } from "@mui/material"
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import RstInfo from "../../components/RstInfo"
import UserCard from "../../components/UserCard"
import LikeComp from "./LikeComp"
import ReviewComp from "./ReviewComp"
import VisitedComp from "./VisitedComp"

const btns = ["좋아요", "내 리-뷰", "가본 곳"]

export default function MyPage() {
  const [pick, setPick] = useState(0)

  return (
    <>
      <Grid container display="flex" alignItems="center">
        <Grid item xs={4}>
          <UserCard />
        </Grid>
        <Grid item xs={8}>
          <p className="text-yellow-1">감성 촉촉 힙스터</p>
          <br />
          <p className="text-yellow-1">한국 아재</p>
        </Grid>
      </Grid>

      <Grid container display="flex" spacing={2}>
        {btns.map((btn, index) => {
          return (
            <Grid item xs={4}>
              <Button
                fullWidth={true}
                variant={pick === index ? "contained" : "outlined"}
                color={"warning"}
                onClick={() => {
                  setPick(index)
                }}
              >
                {btn}
              </Button>
            </Grid>
          )
        })}
      </Grid>

      {pick === 0 && <ReviewComp />}
      {pick === 1 && <VisitedComp />}
      {pick === 2 && <LikeComp />}
    </>
  )
}
