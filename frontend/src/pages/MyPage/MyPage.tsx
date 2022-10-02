// React 시스템 Import
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import {
  selectUserInfo,
  getUserAsync,
  updateUserAsync,
  deleteUserAsync,
} from "../userStore/userInfoSlice"
import { selectUser } from "../userStore/userSlice"

// 기타 라이브러리 Import
import { Box, Grid, Button } from "@mui/material"

// Components Import
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"
import LoadingPaper from "../CommonComp/LoadingPaper"

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
    console.log("제공된 데이터", userInfo)
  }, [dispatch, userInfo])

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
          <TopArea userInfo={userInfo} />
          <MyContents contentNum={contentNum} setContentNum={setContentNum} />
          {contentNum === 0 && <RestoList restos={userInfo.like} />}
          {contentNum === 1 && <MyReview />}
          {contentNum === 2 && <div>{userInfo.visited[0].id}</div>}
        </Box>
      )}
    </>
  )
}
