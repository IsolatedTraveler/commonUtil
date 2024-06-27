import { ajaxPost } from "../../../../g-lobal"
import { KpPrintParam } from "../../type"
import { isPrint, sync } from "../var"
import { isPrintPz } from "./isPrintPz"

export function getKpRes(data: any, url: string, bbid: string | undefined, printParam: KpPrintParam) {
  // 返回同步和异步不同的处理方式
  let kp = ajaxPost(url, data).then(() => {
    // 开票成功，判断是否打印收费凭证
    isPrintPz(bbid, data, isPrint, '电子票据开票成功，是否打印收费凭证？', printParam)
  }).catch(() => {
    // 开票失败，提示用户，用户自行选择是否打印收费凭证
    isPrintPz(bbid, data, isPrint == '否' ? '否' : '提示', '电子票据开票失败，是否继续打印收费凭证？', printParam)
    return Promise.reject()
  })
  if (sync) {
    return kp
  } else {
    return Promise.resolve()
  }
}