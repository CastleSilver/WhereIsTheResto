import { setRequest, axios } from "../settings"
import { reviewCreateType, reviewUpdateType } from "../reqType"

const REVIEW = "/review"

const review = {
  create: async (data: reviewCreateType) => {
    const reqData = {
      uri: REVIEW + "",
      method: "POST",
      data: data,
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  get: async (reviewId: number) => {
    const reqData = {
      uri: REVIEW + `/${reviewId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  delete: async (reviewId: number) => {
    const req = setRequest({
      uri: REVIEW + `/${reviewId}`,
      method: "DELETE",
    })
    const res = await axios(req)
  },

  update: async (data: reviewUpdateType) => {
    const req = setRequest({
      uri: REVIEW + `/${data.restoId}`,
      method: "PATCH",
      data,
    })
    const res = await axios(req)
  },
}

export default review
