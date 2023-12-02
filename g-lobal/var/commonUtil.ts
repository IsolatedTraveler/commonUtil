export const systemV = window.jthisJsObject || window.wdphisJsObject || {},
  system = systemV.jthis || systemV.wdphis

export var urlBase: string | undefined,
  that: any,
  user: any, menu: any

export function setUrlBase(a: string | undefined) {
  return urlBase = a
}
export function setUserVar(a: any) {
  return user = a
}
export function setMenuVal(a: any) {
  return menu = a
}