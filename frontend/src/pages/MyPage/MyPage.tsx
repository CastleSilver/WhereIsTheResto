import { useEffect, useState } from "react"
import { Box, Grid } from "@mui/material"

// MyPage 전용 Components
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"
import { useLocation } from "react-router-dom"
import LoadingPaper from "../CommonComp/LoadingPaper"

const myPageStyle = {
  paddingTop: "30px",
  px: "19px",
}

export default function MyPage() {
  const [loading, setLoading] = useState(true)
  const [myData, setMyData] = useState({})
  const [userId, setUserId] = useState(1)

  const [contentNum, setContentNum] = useState(
    () => Number(window.localStorage.getItem("conNum")) || 0
  )
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    window.localStorage.setItem("conNum", String(contentNum))
  }, [contentNum, setContentNum])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })
  return (
    <>
      {loading && <LoadingPaper />}
      {!loading && (
        <Box sx={myPageStyle}>
          <TopArea />
          <MyContents contentNum={contentNum} setContentNum={setContentNum} />
          {contentNum === 0 && <RestoList />}
          {contentNum === 1 && <MyReview />}
          {contentNum === 2 && <RestoList />}
        </Box>
      )}
    </>
  )
}
