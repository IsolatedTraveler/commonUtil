import { DzPjKpLx, DzPjKpLy, KpPrintParam } from "../../type"
import { dzpjKppz } from "../var"
import { getKpRes } from "./getKpRes"

export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy, printParam: KpPrintParam) {
  let cs = dzpjKppz[lx][ly]
  if (cs) {
    let { url, bbid } = cs
    return getKpRes(data, url, bbid, printParam)
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}

