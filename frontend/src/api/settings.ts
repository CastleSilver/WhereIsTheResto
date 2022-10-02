import axios from "axios";
import { reqInfoType, reqType } from "./reqType";

const BASE_URL = "http://j7a401.p.ssafy.io/api";
// const key =
//   "eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDU2MDQzMjI1NywiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQ1NjQwMzIsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.3PPZ83s1e_Azsfx9uJTHONZkmcJQ6kv3kIFVY4ctEV0"
const key = localStorage.getItem("login-kakao");
const Authorization = `Bearer ${key}`;

export const setRequest = (reqInfo: reqInfoType) => {
  let req: any = {
    url: BASE_URL + reqInfo.uri,
    method: reqInfo.method,
    headers: { ...reqInfo.headers, Authorization },
  };

  const { params, data } = reqInfo;
  if (params !== undefined) {
    req = { ...req, params };
  }

  if (data !== undefined) {
    req = { ...req, data };
  }
  return req;
};

export const myAxios = async (req: any) => {
  console.log(
    "%c  axios 시작  ",
    "background: orange; color: white",
    "REQUEST",
    req
  );
  let res;
  try {
    const temp = await axios(req);
    res = temp.data;
  } catch (error: any) {
    console.log(error);
    res = error.response.data.message;
  } finally {
    console.log(
      "%c  axios 종료  ",
      "background: blue; color: white",
      "RESPONSE",
      res
    );
    return res;
  }
};
