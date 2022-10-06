import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userLogin } from "../userStore/userSlice"

function Auth() {
  const REST_API_KEY = "4451e1614fc6653da21821b099437e5a"
  const REDIRECT_URI = "http://j7a401.p.ssafy.io/oauth/kakao/callback"
  const CLIENT_SECRET = "vCiFAO1F3QiMUYfXmR1pddgTcLYFkMFN"

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const code = new URL(window.location.href).searchParams.get("code")

  // axios 로 백엔드 전송 및 받아와햐 하는데
  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.post(
          `http://j7a401.p.ssafy.io/api/oauth/login/kakao?code=${code}`
          // `http://localhost:5173/api/oauth/login/kakao?code=${code}`
          // `http://localhost:8080/api/oauth/login/kakao?code=${code}`
          // onst REDIRECT_URI = "http://localhost:5173/oauth/kakao/callback";
        )

        // localStorage => token 저장
        localStorage.setItem(
          "login-kakao",
          Object.values(res.data)[1] as string
        )
        // localStorage => userId 저장
        localStorage.setItem("userId", Object.values(res.data)[2] as string)
        // userId 와 토큰도 redux store에 저장 두자
        dispatch(userLogin(res.data))

        if (Object.values(res.data)[0] === false) {
          navigate("/main")
        } else {
          navigate("/azti")
        }
      } catch (e) {
        console.log(e)
        navigate("/")
      }
    })()
  }, [])

  // 인가코드

  return null
}
export default Auth
