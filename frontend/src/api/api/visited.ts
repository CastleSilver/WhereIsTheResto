import { setRequest, myAxios } from "../settings"

const VISITED = "/visited"

const visited = {
  do: async (restoId: number, visited: boolean) => {
    const reqData = {
      uri: VISITED,
      method: "POST",
      data: { restoId },
    }

    if (visited) {
      reqData.method = "DELETE"
    }

    const req = setRequest(reqData)
    const res = await myAxios(req)
  },
}

export default visited
