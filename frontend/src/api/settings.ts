// import axios from "axios"
import { reqInfoType, reqType } from "./reqType"

const BASE_URL = "localhost:8080/api"
const header = "header 값 채워 넣으셔야 해요"

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
  console.log(req)
  console.log("%caxios 완료", "background: blue; color: white")
}
