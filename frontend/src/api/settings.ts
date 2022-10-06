import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "http://j7a401.p.ssafy.io/api"

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
    res = error
  } finally {
    return res
  }
}
