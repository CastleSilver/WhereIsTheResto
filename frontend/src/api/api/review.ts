import { setRequest, myAxios } from "../settings"
import { reviewCreateType, reviewUpdateType } from "../reqType"

const REVIEW = "/review"

const review = {
  create: async (data: FormData) => {
    const reqData = {
      uri: REVIEW + "",
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data,
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    console.log(res)
    return res
  },

  get: async (reviewId: number) => {
    const reqData = {
      uri: REVIEW + `/${reviewId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    return res
  },

  delete: async (reviewId: number) => {
    const req = setRequest({
      uri: REVIEW + `/${reviewId}`,
      method: "DELETE",
    })
    const res = await myAxios(req)
    return res
  },

  update: async (data: reviewUpdateType) => {
    const req = setRequest({
      uri: REVIEW + `/${data.restoId}`,
      method: "PATCH",
      data,
    })
    const res = await myAxios(req)
    return res
  },
}

export default review
