import React from "react";
import { useMediaQuery } from "react-responsive";

import Grid from "@mui/material/Grid";

import Logo from "../asset/img/Logo.png";
import Kakao from "../asset/img/kakao_login.png";

function Home() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px )"
  });

  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div className="Home">
      <div className="Test">
        {isMobile ? (
          // 모바일 일때
          <div>
            <Grid>
              <h1>로그인 / 모바일</h1>
              <img src={Logo} alt="" />
              <a href={KAKAO_AUTH_URL}>
                <img src={Kakao} alt="" />
              </a>
            </Grid>
          </div>
        ) : (
          // PC 화면 일 때
          <div>
            <h1>로그인 / 피씨</h1>
            <img src={Logo} alt="" />
            <a href={KAKAO_AUTH_URL}>
              <img src={Kakao} alt="" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
