import { commonHttppost } from "../../ajax/public/post"
import { system, systemDataParam } from "../../allVar"
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
  let data = commonHttppost('/zs02-ywjc/xtcsgl/s-csxx', { mkdm, jqm: '' }).data || [], res: any = {}
  data.forEach((it: any) => {
    res[it.xh] = it.csz
  })
  return res
}