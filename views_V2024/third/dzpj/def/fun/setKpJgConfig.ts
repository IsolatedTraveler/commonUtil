import { ajaxPost } from "../../../../g-lobal"
import { DzpjKpJgConfig, DzpjKpJgid } from "../../type"
import { DZPJ_PZXX_URL } from "../var"
/**
 * 设置监控配置
 * @param {string} jgid 监控组ID，用于查询特定的监控配置
 * @returns {Promise<DzpjKpJgConfig>} 一个Promise对象，成功时解析为监控配置对象，失败时被reject
 */
export function setKpJgConfig(jgid: DzpjKpJgid): Promise<DzpjKpJgConfig> {
  return ajaxPost(DZPJ_PZXX_URL, { jgid }).then((res: any) => {
    if (res.code == '1' && res.data && res.data.length) {
      let data = res.data, resultVal = {} as any
      resultVal.url = data[0].dz.replace(/\/$/, '')
      data.forEach((it: any) => {
        let id = it.dm
        resultVal[id] = resultVal[id] || it.sdz
      })
      return resultVal
    } else {
      return Promise.reject(res)
    }
  })
}