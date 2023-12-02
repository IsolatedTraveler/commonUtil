import { DzPjKpLx, DzPjKpLy } from "../type"
import { isPrint, sync } from "../var"

export function kpIng(data: any, lx: DzPjKpLx, ly: DzPjKpLy) {
  let cs = dzpjKppz[lx][ly]
  if (cs) {
    let { url, bbid } = cs
    return getKpRes(data, url, bbid).then(() => {
      if (bbid && isPrint != '否') {
        // 打印
      }
    })
  } else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` })
  }
}
function getKpRes(data: any, url: string, bbid: string | undefined) {
  let kp = commonQueryAsyncHttppost_callback(url, data).catch(() => {
    if (isPrint == '提示' && bbid) {
      return confirmMsg('电子票据开票失败，异否继续打印收费凭证？', ['是', '否'])
    } else {
      return Promise.reject()
    }
  })
  if (sync) {
    return kp
  } else {
    return Promise.resolve()
  }
}