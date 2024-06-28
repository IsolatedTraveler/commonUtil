import { getConfig, getUser } from "../../../../g-lobal";
import { DzPjKpLx, DzPjKpLy, KpJgConfig, KpPrintParam, KpRquestParam } from "../../type";
import { isOpenFp, kpIng } from "../fun";
export function kp(data: KpRquestParam, ly: DzPjKpLy, lx: DzPjKpLx, printParam: KpPrintParam = {}) {
  let user = getUser() || {}
  return getConfig().then(() => {
    // 判断是否开票
    return isOpenFp().then((res: KpJgConfig) => {
      // 开票
      return kpIng(Object.assign({
        kpdbm: res.kpdbm,
        jkdm: res.jkdm,
        jgid: user.jgid
      }, data), lx, ly, printParam)
    })
  }).catch(() => { })
}