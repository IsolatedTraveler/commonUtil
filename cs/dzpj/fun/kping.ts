import { DzPjKpLx, DzPjKpLy } from "../type"
import { isPrint, sync } from "../var"

export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy) {
  let cs = dzpjKppz[lx][ly]
  if (cs) {
    let { url, bbid } = cs
    return getKpRes(data, url, bbid).then(() => {
      if (bbid && isPrint != '否') {
        GLOBAL$BROWSER$.bbPrint(bbid, data)
      }
    })
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}
function getKpRes(data: any, url: string, bbid: string | undefined) {
  let kp = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(url, data).catch(() => {
    if (bbid) {
      if (isPrint == '提示' || isPrint == '是') {
        return GLOBAL$LAYER$.confirmMsg('电子票据开票失败，是否继续打印收费凭证？', ['是', '否'])
      }
    }
    return Promise.reject()
  })
  if (sync) {
    return kp
  } else {
    return Promise.resolve()
  }
}