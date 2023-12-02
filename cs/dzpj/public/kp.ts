import { isOpenFp } from "../fun";
import { kpIng } from "../fun/kping";
import { DzPjKpLx, DzPjKpLy, KpJgConfig, KpRquestParam } from "../type/index";

export function kp(data: KpRquestParam, ly: DzPjKpLy, lx: DzPjKpLx) {
  return isOpenFp().then((res: KpJgConfig) => {
    return kpIng(Object.assign({
      kpdbm: res.kpdbm,
      jkdm: res.jkdm
    }, data), lx, ly)
  }).catch(() => { })
}