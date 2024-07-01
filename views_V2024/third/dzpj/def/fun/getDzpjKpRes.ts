import { ajaxPost } from "../../../../g-lobal"
import { DzpjKpPrintParam } from "../../type"
import { dzpjKpIsPrint, dzpjKpSync } from "../var"
import { isPrintPz } from "./isPrintPz"
/**
 * 处理电子票据开票请求，并根据结果决定是否打印收费凭证。
 * @param {any} data - 开票所需的数据。
 * @param {string} url - 发送开票请求的 URL。
 * @param {string|undefined} bbid - 业务编号，用于标识特定的业务场景。
 * @param {DzpjKpPrintParam} printParam - 打印参数，控制打印行为。
 * @returns {Promise} - 返回一个 Promise，表示开票和打印操作的结果。
 */
export function getDzpjKpRes(data: any, url: string, bbid: string | undefined, printParam: DzpjKpPrintParam) {
  // 返回同步和异步不同的处理方式
  let kp = ajaxPost(url, data).then(() => {
    // 开票成功，判断是否打印收费凭证
    return isPrintPz(bbid, data, dzpjKpIsPrint, '电子票据开票成功，是否打印收费凭证？', printParam).catch(() => null)
  }).catch(() => {
    // 开票失败，提示用户，用户自行选择是否打印收费凭证
    return isPrintPz(bbid, data, dzpjKpIsPrint == '否' ? '否' : '提示', '电子票据开票失败，是否继续打印收费凭证？', printParam).finally(() => Promise.reject())
  })
  if (dzpjKpSync) {
    return kp
  } else {
    return Promise.resolve()
  }
}