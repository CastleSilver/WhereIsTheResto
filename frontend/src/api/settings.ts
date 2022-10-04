import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "http://j7a401.p.ssafy.io/api"

const key = localStorage.getItem("login-kakao")
// const key =
//   "eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDg4OTU0MDczOCwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQ4OTMxNDAsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.wssEUEFOwZ1t2WY8HCBxYcfYtRU_BcJfd4eIaliMi-M"
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
    console.log("AXIOS 성공", res)
  } catch (error: any) {
    res = error.response.data
    console.log("AXIOS 실패", error)
  } finally {
    console.log("%c  axios 종료  RESPONSE ", "background: blue; color: white")
    return res
  }
}
