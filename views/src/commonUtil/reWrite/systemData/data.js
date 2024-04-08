/* eslint-disable no-undef */
import { systemDataMkqx } from "../../var/systemData"

function setPossessMkqx(mkbh) {
  let data = that.commonHttppost('/zs01-xtjc/ymgngl/s-yhqx', { mkbh }).data || [], res = {}
  data.forEach(it => {
    res[it.dm] = '1'
  })
  systemDataMkqx[mkbh] = res
  return res
}
export function dicget(dm) {
  return that.commonHttppost('/zs03-ywzd/ywtyzd/s-zdxx', { fldm: dm, yxbz: '1' }).data
}
export function possessMkqx(mkbh, dm) {
  let res = setPageTemp(systemDataMkqx[mkbh], setPossessMkqx, mkbh)
  return dm ? (res[dm] || '0') : res
}
export function getKsxx(bmxz, fwdx, judge) {
  return that.commonHttppost('/zs02-ywjc/bmxxgl/s-bmjbxx', { bmxz, fwdx: judge ? fwdx : fwdx == 1 ? '1|3' : fwdx == '2' ? '2|3' : fwdx, bz: 1 }).data || []
}
export default {
  getKsxx,
  paramget: GLOBAL$COMMONUTIL$.paramget,
  dicget,
  possessMkqx
}