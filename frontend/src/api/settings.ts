import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "http://localhost:8080/api"
const header = ""
// {
//   Authorization:
//     "Bearer eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDM3OTAxNDc1OSwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQzODI2MTQsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.Tin7bhxhI_rx8RX2zQ0XHk66c58dWs7CY1PumSEEjeE",
// }

export const setRequest = (reqInfo: reqInfoType) => {
  let req: reqType = {
    url: BASE_URL + reqInfo.uri,
    method: reqInfo.method,
    header,
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

export const myAxios = async (req: reqType) => {
  console.log(
    "%c  axios 시작  ",
    "background: orange; color: white",
    "REQUEST",
    req
  )
  let res
  try {
    res = await axios(req)
    return res.data
  } catch (error) {
    res = error
  } finally {
    console.log(
      "%c  axios 종료  ",
      "background: blue; color: white",
      "RESPONSE",
      res
    )
  }
}
