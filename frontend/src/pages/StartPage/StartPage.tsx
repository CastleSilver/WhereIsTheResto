// Images
import mainLogo from "../../assets/Logo.png"
import feZero from "../../assets/feZero.jpg"
import kakaoBtn from "../../assets/kakao_login_btn.png"

// MUI
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"

export default function StartPage() {
  // 상단 오렌지색 수평선
  const topAreaStyle = {
    paddingTop: "5vh",
    marginBottom: "5vh",
    borderBottom: "2px solid rgb(216, 99, 69)",
  }

  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://j7a401.p.ssafy.io/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const koreanAztiType = {
    mcis: "감성 알뜰 인싸 주당",
    dcis: "현실 알뜰 인싸 주당",
    mnis: "감성 호탕 인싸 주당",
    dnis: "현실 호탕 인싸 주당",
    mchs: "감성 알뜰 힙스터 주당",
    dchs: "현실 알뜰 힙스터 주당",
    mnhs: "감성 호탕 힙스터 주당",
    dnhs: "현실 호탕 힙스터 주당",
    mchc: "감성 알뜰 힙스터 술린이",
    dchc: "현실 알뜰 힙스터 술린이",
    mnhc: "감성 호탕 힙스터 술린이",
    dnhc: "현실 호탕 힙스터 술린이",
    mcic: "감성 알뜰 인싸 술린이",
    dcic: "현실 알뜰 인싸 술린이",
    mnic: "감성 호탕 인싸 술린이",
    dnic: "현실 호탕 인싸 술린이",
  }
  let sPick = Math.floor(Math.random() * 16)
  return (
    <>
      {/* 상단 오렌지색 수평선 */}
      <Box sx={topAreaStyle}></Box>

      {/* 로고, 캐릭터, 카카오 로그인 영역 */}
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={mainLogo} alt="logo" width="90%" />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            Object.keys(koreanAztiType)[sPick] +
            ".png"
          }
          alt="logo"
          width="50%"
        />
        <br />
        <a href={KAKAO_AUTH_URL}>
          <img src={kakaoBtn} alt="logo" width="50%" />
        </a>
      </Grid>
    </>
  )
}
