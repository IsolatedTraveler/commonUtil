export var jqMode: string = 'jqMagic', Authorization: string | undefined | true,
  contentType = 'application/json; charset=utf-8',
  dataConfig: any, ajaxSuccessCode = 1, ajaxErrorCode = -1

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
export function setAjaxSuccessCode(succ: any, err: any) {
  ajaxSuccessCode = succ
  ajaxErrorCode = err
}