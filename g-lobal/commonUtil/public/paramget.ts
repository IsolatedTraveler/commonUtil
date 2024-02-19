import { commonHttppost } from "../../ajax/public/post"
import { systemDataParam } from "../../allVar"
import { system } from "../../browser/var"
import { setPageTemp } from "../../temp/tempData"

export function paramget(mkdm: string, bh: string | number | undefined = undefined) {
  if (system) {
    let res = system.paramget(mkdm, bh)
    return bh ? res : JSON.parse(res)
  } else {
    let res = setPageTemp(systemDataParam, paramSet, mkdm)
    return bh ? res[bh] : res
  }
}
function paramSet(mkdm: string) {
  let data = commonHttppost('/xt01-xtjc/ty/s-xtcs', { mkdm, jqm: '' }).data || [], res: any = {}
  data.forEach((it: any) => {
    res[it.xh] = it.csz
  })
  return res
}