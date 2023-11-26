export var jqMode: string, Authorization: string | undefined, contentType = 'application/json; charset=utf-8'
export function setJqMode(a: string) {
  jqMode = a
}
export function setAuthorization(v: string | undefined) {
  return Authorization = v
}
export function setAjaxContentType(v: string) {
  contentType = v
}