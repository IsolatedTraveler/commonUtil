import { commonQueryAsyncHttppost_callback } from "../../../g-lobal"
import { confirm } from "../../../g-lobal/layer/public"
import { KpLx, KpLy } from "../type"
import { kppz } from "../var/const"

export function kpIng(data: any, sync: boolean = false, lx: KpLx, ly: KpLy, isPrint: any) {
  return getKpRes(data, sync, lx, ly, !!isPrint).then(() => {
    if (isPrint) {
      // 打印收费凭证
    }
  }).catch(() => { })

}
function getKpRes(data: any, sync: boolean = false, lx: KpLx, ly: KpLy, isPrint: Boolean) {
  let kp = commonQueryAsyncHttppost_callback(kppz[lx][ly], data).catch(() => {
    if (isPrint) {
      return confirm('电子票据开票失败，异否继续打印收费凭证？', ['是', '否'])
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