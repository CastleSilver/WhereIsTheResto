import React, { useEffect, useState } from "react"
import { userProfile } from "../CommonComp/index"
import { Box, Grid } from "@mui/material"
import { user } from "../../api/index"

// MyPage 전용 Components
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"

const myPageStyle = {
  paddingTop: "30px",
  px: "19px",
}

// const getData = async () => {
//   const res = await user.info(0)
// }

export default function MyPage() {
  const [contentNum, setContentNum] = useState(
    () => Number(window.localStorage.getItem("conNum")) || 0
  )

  useEffect(() => {
    window.localStorage.setItem("conNum", String(contentNum))
  }, [contentNum, setContentNum])

  const [lodaing, setLoading] = useState(true)
  const [myData, setMyData] = useState({})

  useEffect(() => {
    const getData = async () => {
      const res = await user.info(0)
      alert(`${res.data.msg}`)
      setMyData(res)
    }
    getData()
  }, [])

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
