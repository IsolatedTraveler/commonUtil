export function setPageTemp(val, callBack, param) {
  if (!val) {
    return callBack(param)
  }
  return val
}