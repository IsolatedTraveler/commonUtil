export const systemV = window.jthisJsObject || window.wdphisJsObject,
  system = systemV.jthis || systemV.wdphis,
  urlRegV = '/webs/|/public/|/public21/|/public23/|/lib/|/lib21/|/lib23/|/.+\\[^/].js|/[^/]+\\.html'
export var webName: string | undefined, urlBase: string | undefined, user: any, userInfo: any,
  that: any, urlServer: string

export function setWebName(a: string | undefined) {
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