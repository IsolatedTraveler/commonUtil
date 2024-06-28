import { DzPjKpLx, DzPjKpLy, DzpjKpPrintParam } from "../../type"
import { DZPJ_KPPZ } from "../var"
import { getDzpjKpRes } from "./getDzpjKpRes"

export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy, printParam: DzpjKpPrintParam) {
  let cs = DZPJ_KPPZ[lx][ly]
  if (cs) {
    let { url, bbid } = cs
    return getDzpjKpRes(data, url, bbid, printParam)
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}

