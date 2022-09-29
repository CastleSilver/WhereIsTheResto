import { setRequest, myAxios } from "../settings"

const RESTO = "/resto"

const resto = {
  get: async (restoId: number) => {
    const reqData = {
      uri: RESTO + `/${restoId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    const res = await myAxios(req)
    return res
  },
}

export default resto
