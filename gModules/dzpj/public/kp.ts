import { isOpenFp } from "../fun";
import { kpIng } from "../fun/kping";
import { KpJgConfig, KpParam } from "../type/index";

export function kp(data: KpParam, ly: DzPjKpLy, lx: DzPjKpLx, printCs: any) {
  return isOpenFp().then((res: KpJgConfig) => {
    return kpIng(Object.assign({
      kpdbm: res.kpdbm,
      jkdm: res.jkdm
    }, data), res.sync, lx, ly, printCs)
  })
}