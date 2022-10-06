import Button from "@mui/material/Button"
import Radio, { RadioProps } from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import FormLabel from "@mui/material/FormLabel"
import Grid from "@mui/material/Grid"
import ReplayIcon from "@mui/icons-material/Replay"

// CSS
import "./AztiQuestionCss.css"

import React, { memo } from "react"
import { useState, useEffect, useCallback } from "react"
import { ConstructionOutlined } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../userStore/store"
import { userinfo } from "../userStore/userSlice"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// components
import KakaoShareButton from "./KakaoShareButton"

// 결과 만 백엔드로 보내줄 것

function AztiQuestion() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect
  useEffect(() => {
    const sendUserAzti = () => {
      dispatch(userinfo(user_status))
    }
    sendUserAzti()
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://developers.kakao.com/sdk/js/kakao.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const SelectUserAzti = useSelector((state: RootState) => state.userazti)

  // Radio button style
  function BpRadio(props: RadioProps) {
    return <Radio color="secondary" {...props} />
  }

  useEffect(() => {}, [])

  type azti = {
    cost_effective: string
    mood: string
    place: string
    drinking: string
  }
  const user_azti: azti = {
    cost_effective: "",
    mood: "",
    place: "",
    drinking: "",
  }

  const [question_parameter, setParameter] = useState<number>(1)
  const [value, setValue] = React.useState("")
  const [user_status, setUserazti] = useState<azti>(user_azti)
  const [buttonCheck, setButtonCheck] = useState<number>(0)

  // radio button control
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue((event.target as HTMLInputElement).value)
    setButtonCheck((event) => (event += 1))
  }

  // sumit event control
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (question_parameter === 1) {
      user_status.cost_effective = value
      // 숫자 증가
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
    } else if (question_parameter === 2) {
      user_status.mood = value
      // 숫자 증가
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
    } else if (question_parameter === 3) {
      user_status.place = value
      // 숫자 증가
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
    } else if (question_parameter === 4) {
      user_status.drinking = value
      // 숫자 증가
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
      dispatch(userinfo(user_status))
    } else if (question_parameter === 5) {
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
    } else if (question_parameter === 6) {
      buttonClick()
      // buttonCheck 초기화
      setButtonCheck((event) => (event = 0))
    } else if (question_parameter === 7) {
    }
  }

  // question_parameter 변경
  const buttonClick = () => setParameter((event) => (event += 1))
  const resetButton = () => setParameter((event) => (event = 1))

  // button 상태 변경
  const buttonGoback = () => {
    setParameter((event) => (event -= 1))
    setButtonCheck((event) => (event = 0))
  }

  // 오늘 식당 추천
  const [todayRes, setTodayRes] = useState<string>("")
  const [todayMenu, setTodayMenu] = useState<string>("")

  let sPick = Math.floor(Math.random() * 9)
  useEffect(() => {
    const recoFood = () => {
      const url = `http://j7a401.p.ssafy.io/data/recommend/cbf/${SelectUserAzti.user_azti}`
      axios
        .get(url)
        .then((res) => {
          const today = res.data.recommendCbfList[sPick]

          setTodayRes((event) => (event = today.resto_name))
          setTodayMenu((event) => (event = today.menu1))
        })
        .catch((err) => {
          console.log(err)
        })
    }
    recoFood()
  }, [question_parameter])

  // 현재 문제
  if (question_parameter === 1) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 1</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-2">
                {" "}
                유명한 식당이라면, <br />
                가격이 비싸도 상관 없다 .{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="none_cost_effective"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">예-스</h3>}
              />
              <FormControlLabel
                value="cost_effective"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">노-우</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                <span>다음 질문</span>
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 2) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 2</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-3">
                {" "}
                일을 하던 도중 비가오는 상황!
                <br /> 다음 중 생각나는 것은?{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="moist"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">파전에 막걸리!</h3>}
              />
              <FormControlLabel
                value="dry"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">집에 가기 힘들겠다..</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                onClick={buttonGoback}
              >
                이전 질문
              </Button>
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                다음 질문
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 3) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 3</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-3">
                {" "}
                동네에서 새로운 맛집을 발견했다!
                <br /> 당신의 선택은?{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="hipster"
                control={<BpRadio />}
                label={
                  <h3 className="text-blue-1">나만 아는 맛집으로 둔다.</h3>
                }
              />
              <FormControlLabel
                value="insider"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">인스타에 공유 한다.</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                onClick={buttonGoback}
              >
                이전 질문
              </Button>
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                다음 질문
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 4) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 4</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-3">
                {" "}
                쌀쌀한 날씨에 <br />
                뜨끈한 된장찌개와 솥뚜껑 삼겹살{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="soju"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">이모 소주 하나 주세요!</h3>}
              />
              <FormControlLabel
                value="coke"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">이모 콜라 하나 주세요!</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                onClick={buttonGoback}
              >
                뒤로가기
              </Button>
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                다음 질문
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 5) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 5</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-3">
                {" "}
                술마실 때 눈물이 나는 이유는 <br /> 무엇일까용?{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="q5_1"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">"짠!" 하니까!</h3>}
              />
              <FormControlLabel
                value="q5_2"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">음...글쎄요...</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                onClick={buttonGoback}
              >
                뒤로가기
              </Button>
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                다음 질문
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 6) {
    return (
      <div>
        <br />
        <h1 className="text-yellow-1"> 퀘-스챤 6</h1>
        <br />
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            question_parameter +
            ".png"
          }
          alt=""
          id="question_img"
        />
        {/* azti question form */}
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} variant="standard">
            <FormLabel id="demo-error-radios">
              <h1 className="text-orange-3">
                {" "}
                오늘 '그집 어데고'와 함께 <br /> 노포 탐방 어떠세요?{" "}
              </h1>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="q6_1"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">너무 좋은걸요!</h3>}
              />
              <FormControlLabel
                value="q6_2"
                control={<BpRadio />}
                label={<h3 className="text-blue-1">빨리 가보고 싶어요!</h3>}
              />
            </RadioGroup>
            <Grid
              container
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                onClick={buttonGoback}
              >
                뒤로가기
              </Button>
              <Button
                color="secondary"
                sx={{ mt: 1, mr: 1 }}
                type="submit"
                disabled={buttonCheck == 0}
              >
                결과 보기
              </Button>
            </Grid>
          </FormControl>
        </form>
      </div>
    )
  } else if (question_parameter === 7) {
    localStorage.setItem("userKoreanAzti", SelectUserAzti.user_azti_type)

    const buttonToMain = () => {
      const hook = () => {
        const url = "http://j7a401.p.ssafy.io/api/user/azti"
        const data = {
          aztiType: `${SelectUserAzti.user_azti}`,
        }
        axios
          .patch(url, data, {
            headers: {
              Authorization: `${localStorage.getItem("login-kakao")}`,
            },
          })
          .then((res) => {})
          .then((err) => {})
      }
      hook()

      navigate("/main")
    }

    return (
      <div>
        <h1 className="text-yellow-1">결과</h1>
        <h3 className="text-orange-4"> 당신은 </h3>
        <h3 className="text-orange-3">{SelectUserAzti.user_azti_type}</h3>
        <img
          src={
            "https://aztipictures.s3.ap-northeast-2.amazonaws.com/azti_pic/" +
            SelectUserAzti.user_azti +
            ".png"
          }
          id="user-azti"
          alt="user_azti"
        />
        <h6 color="secondary"> - 출저 : 그림왕 양치기 -</h6>
        <Grid
          container
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <span className="text-orange-5"> 오늘 </span>
          <p> </p>
          <span className="text-orange-3"> {todayRes} </span>
          <span className="text-orange-5">에서</span>
        </Grid>
        <Grid
          container
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <span className="text-orange-3"> {todayMenu} </span>
          <span className="text-orange-5">어때요?</span>
        </Grid>

        {/* <Button onClick={() => dispatch({type : userinfo(), payload: user_status})}></Button> */}
        {/* <Button onClick={() => dispatch(userinfo(user_status))}> */}
        {/* 카카오 공유 하기 부분  */}
        <Grid
          container
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <KakaoShareButton todayRes={todayRes} todayMenu={todayMenu} />
          <Button color="secondary" onClick={resetButton}>
            <ReplayIcon />
          </Button>
        </Grid>
        <br />
        <Button variant="contained" color="secondary" onClick={buttonToMain}>
          추천 받기
        </Button>
      </div>
    )
  }
}
export default AztiQuestion
