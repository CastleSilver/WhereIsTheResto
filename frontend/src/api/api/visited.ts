import { setRequest, axios } from "../settings"

const VISITED = "/like"

const visited = {
  do: async (restoId: number) => {
    const reqData = {
      uri: VISITED + `${restoId}`,
      method: "POST",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },

  undo: async (restoId: number) => {
    const reqData = {
      uri: VISITED + `${restoId}`,
      method: "DELETE",
    }
    const req = setRequest(reqData)
    const res = await axios(req)
  },
}

export default visited
