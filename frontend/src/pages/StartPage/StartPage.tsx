// Images
import mainLogo from "../../assets/main_logo.png"
import feZero from "../../assets/feZero.jpg"
import kakaoBtn from "../../assets/kakao_login_btn.png"

// MUI
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"

export default function StartPage() {
  // 상단 오렌지색 수평선
  const topAreaStyle = {
    padding: "0px 5px",
    margin: "44px 0px 132px 0px",
    borderBottom: "2px solid rgb(216, 99, 69)",
  }

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
        <img src={feZero} alt="logo" width="50%" />
        <Link to="main">
          <img src={kakaoBtn} alt="logo" width="50%" />
        </Link>
      </Grid>
    </>
  )
}
