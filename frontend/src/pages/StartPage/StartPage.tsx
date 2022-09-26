// Images
import mainLogo from "../../assets/main_logo.png";
import feZero from "../../assets/feZero.jpg";
import kakaoBtn from "../../assets/kakao_login_btn.png";

// MUI
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function StartPage() {
  // 상단 오렌지색 수평선
  const topAreaStyle = {
    paddingTop: "5vh",
    marginBottom: "5vh",
    borderBottom: "2px solid rgb(216, 99, 69)",
  };

  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
        <a href={KAKAO_AUTH_URL}>
          <img src={kakaoBtn} alt="logo" width="50%" />
        </a>
      </Grid>
    </>
  );
}
