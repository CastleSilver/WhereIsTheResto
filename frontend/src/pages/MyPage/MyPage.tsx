import { useEffect, useState } from "react"
import { Box, Grid, Button } from "@mui/material"

// MyPage 전용 Components
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"
import LoadingPaper from "../CommonComp/LoadingPaper"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import {
  selectUserInfo,
  getUserAsync,
  updateUserAsync,
  deleteUserAsync,
} from "../userStore/userInfoSlice"
import { selectUser } from "../userStore/userSlice"

const myPageStyle = {
  paddingTop: "30px",
  px: "19px",
}

export default function MyPage() {
  const userAZTI = useAppSelector(selectUser)
  const userInfo = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()

  const [contentNum, setContentNum] = useState(
    () => Number(window.localStorage.getItem("conNum")) || 0
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getUserAsync(Number(userAZTI.userId)))
  }, [dispatch])

  useEffect(() => {
    window.localStorage.setItem("conNum", String(contentNum))
  }, [contentNum, setContentNum])

  return (
    <>
      {userInfo === undefined && (
        <>
          <LoadingPaper />
        </>
      )}
      {userInfo !== undefined && (
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
