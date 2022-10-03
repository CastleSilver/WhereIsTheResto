import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "http://localhost:8080/api"
// const key =
//   "eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDU2MDQzMjI1NywiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQ1NjQwMzIsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.3PPZ83s1e_Azsfx9uJTHONZkmcJQ6kv3kIFVY4ctEV0"
const key = localStorage.getItem("login-kakao")
const Authorization = `Bearer ${key}`

export const setRequest = (reqInfo: reqInfoType) => {
  let req: any = {
    url: BASE_URL + reqInfo.uri,
    method: reqInfo.method,
    headers: { ...reqInfo.headers, Authorization },
  }

  const { params, data } = reqInfo
  if (params !== undefined) {
    req = { ...req, params }
  }

  if (data !== undefined) {
    req = { ...req, data }
  }
  return req
}

export const myAxios = async (req: any) => {
  console.log(
    "%c  axios 시작  REQUEST ",
    "background: orange; color: white",

    req
  )
  let res
  try {
    const temp = await axios(req)
    res = temp.data
  } catch (error: any) {
    console.log(error)
    res = error.response.data.message
  } finally {
    console.log(
      "%c  axios 종료  RESPONSE ",
      "background: blue; color: white",
      res
    )
    console.log("%c 현재는 임시 데이터가 제공되었습니다 ", "color: blue; ;")
    return res
  }
}
