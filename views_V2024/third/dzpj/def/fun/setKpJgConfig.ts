import { ajaxPost } from "../../../../g-lobal"
import { KpJgConfig, KpJgid } from "../../type"
import { PZXX_URL } from "../var"

export function setKpJgConfig(jgid: KpJgid): Promise<KpJgConfig> {
  return ajaxPost(PZXX_URL, { jgid }).then((res: any) => {
    if (res.code == '1' && res.data && res.data.length) {
      let data = res.data, resultVal = {} as any
      resultVal.url = data[0].dz.replace(/\/$/, '')
      data.forEach((it: any) => {
        let id = it.dm
        resultVal[id] = resultVal[id] || it.sdz
      })
      return resultVal
    } else {
      return Promise.reject()
    }
  })
}