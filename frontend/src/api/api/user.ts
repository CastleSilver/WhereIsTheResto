import { setRequest, myAxios } from "../settings"
import { userUpdateType } from "../reqType"
import { recomList, restoInfo, userInfo } from "./fakeData"

const USERS = "/user"

const user = {
  info: async (userId: number) => {
    const reqData = {
      uri: USERS + `/${userId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    return res
  },

  delete: async () => {
    const reqData = {
      uri: USERS + "",
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
  },

  update: async (data: userUpdateType) => {
    const reqData = {
      uri: USERS + "",
      method: "PATCH",
      data,
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    return res
  },

  getRecom: async () => {
    return recomList
  },
}

export default user
