export const systemV = window.jthisJsObject || window.wdphisJsObject,
  system = systemV.jthis || systemV.wdphis,
  urlRegV = '/webs/|/public/|/public21/|/public23/|/lib/|/lib21/|/lib23/|/.+\\[^/].js|/[^/]+\\.html'
export var webName, urlBase
export function setWebName(a) {
  webName = a
}
export function setUrlBase(a) {
  urlBase = a
}