import { DzPjKpLx, DzPjKpLy, DzpjKpPrintParam } from "../../type"
import { DZPJ_KPPZ } from "../var"
import { getDzpjKpRes } from "./getDzpjKpRes"
/**
 * 开票处理函数
 * @param {any} data - 发票数据
 * @param {DzPjKpLx} lx - 开票类型
 * @param {DzPjKpLy} ly - 开票类别
 * @param {DzpjKpPrintParam} printParam - 打印参数
 * @returns {Promise<any>} - 返回一个Promise，成功则包含发票处理结果，失败则抛出错误
 */
export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy, printParam?: DzpjKpPrintParam) {
  let cs = (DZPJ_KPPZ[lx] || {})[ly]
  if (cs) {
    let { url, bbid } = cs
    return getDzpjKpRes(data, url, bbid, printParam)
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}

