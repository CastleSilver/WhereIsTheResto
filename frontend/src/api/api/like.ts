import { setRequest, myAxios } from "../settings"

const LIKE = "/like"

const like = {
  do: async (restoId: number) => {
    const reqData = {
      uri: LIKE + `${restoId}`,
      method: "POST",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
  },

  undo: async (restoId: number) => {
    const reqData = {
      uri: LIKE + `${restoId}`,
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
  },
}

export default like
