import { setRequest, myAxios } from "../settings"

const VISITED = "/visited"

const visited = {
  do: async (restoId: number, visited: boolean) => {
    const reqData = {
      uri: VISITED,
      method: "POST",
    }

    if (visited) {
      reqData.method = "DELETE"
    }

    const req = setRequest(reqData)
    const res = await myAxios(req)
    console.log(`좋아요 ${visited} => ${!visited}`)
  },
}

export default visited
