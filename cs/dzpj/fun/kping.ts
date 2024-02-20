import { DzPjKpLx, DzPjKpLy, KpIsPrint, KpPrintParam } from "../type"
import { isPrint, sync } from "../var"

export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy, printParam: KpPrintParam) {
  let cs = dzpjKppz[lx][ly]
  if (cs) {
    let { url, bbid } = cs
    return getKpRes(data, url, bbid, printParam)
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}
function isPrintPz(bbid: string | undefined, data: any, isPrint: KpIsPrint, msg: string, printParam: KpPrintParam) {
  if (bbid) {
    if (isPrint == '提示') {
      GLOBAL$LAYER$.confirmMsg(msg, ['是', '否']).then(() => {
        GLOBAL$BROWSER$.bbPrint(bbid || '', data, printParam)
      })
    } else if (isPrint == '是') {
      GLOBAL$BROWSER$.bbPrint(bbid || '', data, printParam)
    }
  }
}
function getKpRes(data: any, url: string, bbid: string | undefined, printParam: KpPrintParam) {
  // 返回同步和异步不同的处理方式
  let kp = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(url, data).then(() => {
    // 开票成功，判断是否打印收费凭证
    isPrintPz(bbid, data, isPrint, '是否打印收费凭证？', printParam)
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