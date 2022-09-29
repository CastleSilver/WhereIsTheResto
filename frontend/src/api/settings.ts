// import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "localhost:8080/api"
const header = {
  Authorization:
    "Bearer eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDM3OTAxNDc1OSwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQzODI2MTQsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.Tin7bhxhI_rx8RX2zQ0XHk66c58dWs7CY1PumSEEjeE",
}

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

export const axios = async (req: reqType) => {
  console.log("%caxios 시작" + req.method, "background: red; color: white")
  console.log("-ing", req)
  try {
    const res = await axios(req)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  console.log("%caxios 완료", "background: blue; color: white")
}
