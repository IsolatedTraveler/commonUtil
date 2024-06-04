import { commonHttppost } from "../../ajax/public/post"
import { systemDataParam } from "../../allVar"
import { setPageTemp } from "../../temp/tempData"

export function paramget(mkdm: string, bh: string | number | undefined = undefined) {
  let res = setPageTemp(systemDataParam, paramSet, mkdm)
  return bh ? res[bh] : res
}
function paramSet(mkdm: string) {
  let data = commonHttppost('/magic/jtmis/ty/csgl/s-xtcs', { mkdm, jqm: '' }).data || [], res: any = {}
  data.forEach((it: any) => {
    res[it.xh] = it.csz
  })
  return res
}