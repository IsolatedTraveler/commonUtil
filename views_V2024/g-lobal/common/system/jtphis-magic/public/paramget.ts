import { ajaxPost } from "../../../../xhr"
import { XTCS, XTCS_URL } from "../var"

export function paramget(mkdm: string, bh: string | number | undefined = undefined) {
  if (!XTCS[mkdm]) {
    XTCS[mkdm] = ajaxPost(XTCS_URL, { mkdm, jqm: '' }).then(({ data = [] }) => {
      const res: any = {};
      (data as any).forEach((it: any) => {
        res[it.xh] = it.csz
      })
      return res
    })
  }
  return XTCS[mkdm].then((res: any) => bh ? res[bh] : res)
}