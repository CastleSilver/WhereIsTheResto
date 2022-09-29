import { Grid, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import React from "react"
import Review from "./Review"
import { useAppSelector } from "../../userStore/hooks"
import { selectResto } from "../../userStore/restoSlice"
import { unstable_extendSxProp } from "@mui/system"
const titleArea = {
  fontFamily: "BMEULJIRO",
  fontSize: "36px",
  color: "rgb(2 49 119)",
  textAlign: "left",
  paddingLeft: "15px",
  fontWeight: "bold",
  marginBottom: "16px",
}

const btnStyle = {
  fontSize: "4.5vw",
  padding: "0.5vw",
}

export default function Reviews() {
  const reviews = useAppSelector(selectResto)?.review

  return (
    <>
      {reviews === undefined && <div>로딩 중</div>}
      {reviews !== undefined && (
        <>
          <Box sx={titleArea}>| 리-뷰</Box>
          {Object.keys(reviews).length === 0 && <div>리뷰가 없습니다</div>}
          {Object.keys(reviews).length !== 0 && <div>리뷰가 있어용</div>}
        </>
      )}
    </>
  )
}
