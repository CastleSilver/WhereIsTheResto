// Images
import mainLogo from "../../assets/Logo.png"
import feZero from "../../assets/feZero.jpg"
import kakaoBtn from "../../assets/kakao_login_btn.png"
import { StartImg } from "../../assets/imageUrl"

// MUI
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import { useRef } from "react"

export default function StartPage() {
  // 상단 오렌지색 수평선
  const linkRef = useRef()

  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a"
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback"
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  const pageStyle = {
    display: "flex",
    height: "95vh",
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

  return (
    <Box sx={pageStyle}>
      {/* 상단 오렌지색 수평선 */}
      {/* 로고, 캐릭터, 카카오 로그인 영역 */}
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <p>{linkRef.current}</p>
        <Box sx={logoStyle}>
          <img src={mainLogo} alt="logo" width="100%" />
        </Box>
        <Box sx={imgStyle}>
          <StartImg />
        </Box>
        <Box sx={kakaoStyle}>
          <a href={KAKAO_AUTH_URL}>
            <img src={kakaoBtn} alt="logo" width="100%" />
          </a>
        </Box>
      </Grid>
    </Box>
  )
}
