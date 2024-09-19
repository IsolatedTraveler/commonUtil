import { getConfig, getUser } from "../../../../g-lobal";
import { DzPjKpLx, DzPjKpLy, DzPjKpRquestParam, DzpjKpJgConfig, DzpjKpPrintParam } from "../../type";
import { isOpenFp, kpIng } from "../fun";
export function kp(data: DzPjKpRquestParam, ly: DzPjKpLy, lx: DzPjKpLx, printParam: DzpjKpPrintParam = {}) {
  let user = getUser() || {}
  return getConfig().then(() => {
    // 判断是否开票
    printParam = printParam || {}
    return isOpenFp(printParam).then((res: DzpjKpJgConfig) => {
      // 开票
      return kpIng(
        Object.assign(
          {
            kpdbm: res.kpdbm,
            jkdm: res.jkdm,
            jgid: user.jgid
          },
          data
        ),
        lx,
        ly,
        printParam
      );
    });
  }).catch(() => { })
}