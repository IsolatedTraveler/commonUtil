export var jqMode: string, Authorization: string | undefined,
  contentType = 'application/json; charset=utf-8',
  dataConfig: any

export function setJqMode(a: string) {
  return jqMode = a
}
export function setAuthorization(v: string | undefined) {
  return Authorization = v
}
export function setAjaxContentType(v: string) {
  return contentType = v
}
export function setDataConfig(a: any) {
  return dataConfig = a
}