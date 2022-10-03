// api 관련 Import (직접 만든 local 파일들)
import { setRequest, myAxios } from "../settings"
import { restoInfo } from "./fakeData"
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
