// React 시스템 Import
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import { selectUserInfo, getUserAsync } from "../userStore/userInfoSlice"
import { selectUser } from "../userStore/userSlice"

// 기타 라이브러리 Import
import { Box } from "@mui/material"

// Components Import
import TopArea from "./Components/TopArea"
import MyContents from "./Components/MyContents"
import MyReview from "./Components/MyReview"
import RestoList from "./Components/RestoList"
import LoadingPaper from "../CommonComp/LoadingPaper"

// Styling Code
const myPageStyle = {
  paddingTop: "30px",
}

export default function MyPage() {
  // REDUX System
  const userAZTI = useAppSelector(selectUser)
  const userInfo = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()

  // My Page 렌더링 후, Bottom Bar 동기화를 위한 Session Storage 활용
  const [contentNum, setContentNum] = useState(
    () => Number(window.sessionStorage.getItem("conNum")) || 0
  )

  // ----------------------------------- My Page 렌더링 후 이루어지는 작업들 -----------------------------------
  useEffect(() => {
    window.scrollTo(0, 0) // 최상단 페이지 이동
    const a = localStorage.getItem("userId")
    dispatch(getUserAsync(Number(a))) // userId를 통해 User 정보를 받아옴
    console.log(userInfo)
  }, [dispatch])

  useEffect(() => {
    window.sessionStorage.setItem("conNum", String(contentNum))
    sessionStorage.setItem("pageNum", "2")
  }, [contentNum, setContentNum])
  // ---------------------------------------------------------------------------------------------------------
  return (
    <>
      {userInfo === undefined && <LoadingPaper />}
      {userInfo !== undefined && (
        <Box sx={myPageStyle}>
          <TopArea userInfo={userInfo} />
          <Box sx={{ paddingTop: "24px" }}></Box>
          <MyContents contentNum={contentNum} setContentNum={setContentNum} />
          {contentNum === 0 && <RestoList restos={userInfo.like} cat={0} />}
          {contentNum === 1 && <MyReview reviews={userInfo.review} />}
          {contentNum === 2 && <RestoList restos={userInfo.visited} cat={1} />}
        </Box>
      )}
    </>
  )
}
