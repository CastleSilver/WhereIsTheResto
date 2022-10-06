import { setRequest, myAxios } from "../settings"

const LIKE = "/like"

const like = {
  do: async (restoId: number, liked: boolean) => {
    const reqData = {
      uri: LIKE,
      method: "POST",
      data: { restoId },
    }

    if (liked) {
      reqData.method = "DELETE"
    }

    const req = setRequest(reqData)
    const res = await myAxios(req)
  },
}

export default like
