import { setRequest, myAxios } from "../settings"

const LIKE = "/like"

const like = {
  do: async (restoId: number, liked: boolean) => {
    // const token = document.querySelector('meta[name="csrf-token"]')

    const reqData = {
      uri: LIKE,
      method: "POST",
      data: { restoId },
      // headers: { "X-CSRF-TOKEN": `${token.content}` },
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": `Enter CSR Token here`,
      },
    }

    if (liked) {
      reqData.method = "DELETE"
    }

    const req = setRequest(reqData)
    const res = await myAxios(req)
  },
}

export default like
