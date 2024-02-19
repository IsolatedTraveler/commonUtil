import { isOpenFp } from "../fun";
import { kpIng } from "../fun/kping";
import { DzPjKpLx, DzPjKpLy, KpJgConfig, KpRquestParam } from "../type/index";

export function kp(data: KpRquestParam, ly: DzPjKpLy, lx: DzPjKpLx) {
  let user = GLOBAL$USER$.getUser() || {}
  // 判断是否开票
  return isOpenFp().then((res: KpJgConfig) => {
    // 开票
    return kpIng(Object.assign({
      kpdbm: res.kpdbm,
      jkdm: res.jkdm,
      jgid: user.jgid
    }, data), lx, ly)
  }).catch(() => { })
}