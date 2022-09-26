import React, { useState } from "react"
import { userProfile } from "../CommonComp/index"
import { Box, Grid } from "@mui/material"

// MyPage 전용 Components
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"

const myPageStyle = {
  paddingTop: "30px",
  px: "19px",
}

export default function MyPage() {
  const [contentNum, setContentNum] = useState(0)

  return (
    <>
      <Box sx={myPageStyle}>
        <TopArea />
        <MyContents contentNum={contentNum} setContentNum={setContentNum} />
        {contentNum === 0 && <RestoList />}
        {contentNum === 1 && <MyReview />}
        {contentNum === 2 && <RestoList />}
      </Box>
    </>
  )
}
