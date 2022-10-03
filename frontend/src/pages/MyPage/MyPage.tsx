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
import DesignTwo from "./Components/DesignTwo"
import DesignThree from "./Components/DesignThree"

// Styling Code
const myPageStyle = {
  paddingTop: "30px",
  px: "19px",
}

export default function MyPage() {
  const userAZTI = useAppSelector(selectUser)
  const userInfo = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()

  const [contentNum, setContentNum] = useState(
    () => Number(window.sessionStorage.getItem("conNum")) || 0
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getUserAsync(Number(userAZTI.userId)))
    console.log("제공된 데이터", userInfo)
  }, [dispatch, userInfo])

  useEffect(() => {
    window.sessionStorage.setItem("conNum", String(contentNum))
  }, [contentNum, setContentNum])

  const [design, setDesign] = useState(1)

  return (
    <>
      <Box sx={{ m: "auto" }}>
        <button onClick={() => setDesign(1)}>1번 시안</button>
        <button onClick={() => setDesign(2)}>2번 시안</button>
        <button onClick={() => setDesign(3)}>3번 오리지널</button>
      </Box>
      {userInfo === undefined && (
        <>
          <LoadingPaper />
        </>
      )}
      {userInfo !== undefined && (
        <Box sx={myPageStyle}>
          {design === 1 && <DesignTwo userInfo={userInfo} />}
          {design === 2 && <DesignThree userInfo={userInfo} />}
          {design === 3 && <TopArea userInfo={userInfo} />}
          <Box sx={{ paddingTop: "24px" }}></Box>
          <MyContents contentNum={contentNum} setContentNum={setContentNum} />
          {contentNum === 0 && <RestoList restos={userInfo.like} />}
          {contentNum === 1 && <MyReview reviews={userInfo.review} />}
          {contentNum === 2 && <div>{userInfo.visited[0].id}</div>}
        </Box>
      )}
    </>
  )
}
