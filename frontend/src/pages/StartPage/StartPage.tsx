// Images
import mainLogo from "../../assets/Logo.png"
import feZero from "../../assets/feZero.jpg"
import kakaoBtn from "../../assets/kakao_login_btn.png"
import { StartImg } from "../../assets/imageUrl"

// MUI
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

const pageStyle = {
  height: "95vh",
  display: "flex",
}

const logoStyle = {
  marginBottom: "36px",
  width: "85%",
}

const imgStyle = {
  marginBottom: "36px",
  width: "85%",
}

const kakaoStyle = {
  width: "85%",
}

export default function StartPage() {
  // 상단 오렌지색 수평선
  const linkRef = useRef()

  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a"
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return (
    <Box sx={pageStyle}>
      {/* 로고, 캐릭터, 카카오 로그인 영역 */}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={logoStyle}>
          <img src={mainLogo} alt="logo" width="100%" />
        </Grid>
        <Grid item sx={imgStyle}>
          <StartImg />
        </Grid>
        <Grid item sx={kakaoStyle}>
          <a href={KAKAO_AUTH_URL}>
            <img src={kakaoBtn} alt="logo" width="100%" />
            {/* 이 부분 떄문에 에러가 발생하는데, 배포 하면 지울 부분이라 괜찮을 듯! */}
          </a>
          <Link to="/main">개발용 MAIN 창으로</Link>
        </Grid>
      </Grid>
    </Box>
  )
}
