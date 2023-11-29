export const systemV = window.jthisJsObject || window.wdphisJsObject || {},
  system = systemV.jthis || systemV.wdphis,
  urlRegV = '/webs/|/public/|/public21/|/public23/|/lib/|/lib21/|/lib23/|/.+\\[^/].js|/[^/]+\\.html'
export var webName: string | undefined, urlBase: string | undefined,
  that: any, urlServer: string, systemDataParam: any,
  user: any, userInfo: any, menu: any

export function setWebNameVal(a: string | undefined) {
  return webName = a
}
export function setUrlBase(a: string | undefined) {
  return urlBase = a
}
export function setUserVar(a: any) {
  return user = a
}
export function setUserInfoVal(a: any) {
  return userInfo = a
}
export function setUrlServerVal(a: string) {
  return urlServer = a
}
export function setSystemDataParam(a: string) {
  return systemDataParam = a
}
export function setMenuVal(a: any) {
  return menu = a
}