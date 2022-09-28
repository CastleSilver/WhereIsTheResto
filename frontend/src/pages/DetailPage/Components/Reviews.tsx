import { Box } from "@mui/system"
import React from "react"
import Review from "./Review"
const titleArera = {
  fontFamily: "Chosun",
  fontSize: "40px",
  color: "rgb(2 49 119)",
  textAlign: "left",
  paddingLeft: "15px",
  fontWeight: "bold",
  marginBottom: "16px",
}

export default function Reviews() {
  return (
    <>
      <Box sx={titleArera}>사용자 리-뷰</Box>
      <Review />
    </>
  )
}
