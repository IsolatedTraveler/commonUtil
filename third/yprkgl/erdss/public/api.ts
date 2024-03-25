interface YpListParam {
  start: string
  end: string
}
interface RkParam {
  DrugAllotBillCode: string
}
var server = 'http://loc.frp.cdjtwx.com:81/233-7080/jtphis'
export function getYplist(param: YpListParam) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(server + '/magicXb/YY19/02/01/eq/t-ypcglb', param)
}
export function yprk(param: RkParam) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(server + '/magicXb/YY19/02/01/eq/t-yprk', param)
}
export function qxrk(param: RkParam) {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(server + '/magicXb/YY19/02/01/eq/t-qxrk', param)
}