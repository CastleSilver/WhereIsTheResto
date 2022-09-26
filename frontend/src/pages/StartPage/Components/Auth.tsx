import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN";

  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  // axios 로 백엔드 전송 및 받아와햐 하는데
  axios({
    method: "get",
    url: `http://localhost:8080/api/oauth/login/kakao/${code}`,
  })
    .then((res) => {
      console.log(res);
      navigate("/main");
    })
    .catch((err) => {
      console.log(err);
      navigate("/");
    });
  // 인가코드
  console.log(code);

  return null;
}
export default Auth;
