import { setRequest, axios } from "../settings"

const LIKE = "/like"

const like = {
  do: async (restoId: number) => {
    const reqData = {
      uri: LIKE + `${restoId}`,
      method: "POST",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  undo: async (restoId: number) => {
    const reqData = {
      uri: LIKE + `${restoId}`,
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },
}

export default like
