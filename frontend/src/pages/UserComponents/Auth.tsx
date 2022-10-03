import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../userStore/userSlice";

function Auth() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a";
  const REDIRECT_URI = "http://j7a401.p.ssafy.io/oauth/kakao/callback";
  const CLIENT_SECRET = "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const code = new URL(window.location.href).searchParams.get("code");

  console.log(code);

  // axios 로 백엔드 전송 및 받아와햐 하는데
  useEffect(() => {
    (async () => {
      try {
        console.log("백 보내기 전");
        const res = await axios.post(
          `http://j7a401.p.ssafy.io/api/oauth/login/kakao?code=${code}`
        );
        console.log("백 요청 후");
        console.log(res);
        // localStorage => token 저장
        localStorage.setItem(
          "login-kakao",
          Object.values(res.data)[1] as string
        );

        // userId 와 토큰도 redux store에 저장 두자
        dispatch(userLogin(res.data));

        navigate("/azti");
      } catch (e) {
        console.log(e);
        navigate("/");
      }
    })();
  }, []);

  // 인가코드
  console.log(code);

  return null;
}
export default Auth;
