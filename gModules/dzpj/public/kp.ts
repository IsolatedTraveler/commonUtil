import { isOpenFp } from "../fun";
import { kpIng } from "../fun/kping";
import { KpLx, KpLy, KpParam } from "../type";

export function kp(data: KpParam, ly: KpLy, lx: KpLx, printCs: any) {
  return isOpenFp().then(res => {
    return kpIng(Object.assign({
      kpdbm: res.kpdbm,
      jkdm: res.jkdm
    }, data), res.sync, lx, ly, printCs)
  })
}