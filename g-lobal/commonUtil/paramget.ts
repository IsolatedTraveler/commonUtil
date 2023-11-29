import { setPageTemp } from "../base";
import { system, systemDataParam } from "../var";

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
  let data = that.commonHttppost('/zs02-ywjc/xtcsgl/s-csxx', { mkdm, jqm: '' }).data || [], res: any = {}
  data.forEach((it: any) => {
    res[it.xh] = it.csz
  })
  return res
}