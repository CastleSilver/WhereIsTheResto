// import axios from "axios"
import { setRequest, axios } from "../settings"
import { userUpdateType } from "../reqType"

const USERS = "/user"

const user = {
  info: async (userId = 4) => {
    const reqData = {
      uri: USERS + `/${userId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  delete: async () => {
    const reqData = {
      uri: USERS + "",
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  update: async (data: userUpdateType) => {
    const reqData = {
      uri: USERS + "",
      method: "PATCH",
      data,
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },
}

export default user
