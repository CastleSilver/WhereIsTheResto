import { Grid, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import React from "react"
import Review from "./Review"
const titleArera = {
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
  return (
    <>
      <Box sx={titleArera}>
        <Grid container justifyContent={"space-between"}>
          <span>| 사용자 리-뷰</span>
          <Link to="/review/write">
            <Button color="warning" variant="contained" sx={btnStyle}>
              작성
            </Button>
          </Link>
        </Grid>
      </Box>
      <Review />
    </>
  )
}
