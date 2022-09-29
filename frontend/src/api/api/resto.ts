import { setRequest, myAxios } from "../settings"
import { restoResType } from "../resType"

const RESTO = "/resto"

const resto = {
  get: async (restoId: number) => {
    const reqData = {
      uri: RESTO + `/${restoId}`,
      method: "GET",
    }
    const req = setRequest(reqData)
    let res: restoResType
    try {
      res = await myAxios(req)
    } catch (error: any) {
      res = error
    }
    return res
  },
}

export default resto
