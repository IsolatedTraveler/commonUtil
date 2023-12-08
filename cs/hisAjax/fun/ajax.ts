export function setPageSize(obj: any) {
  if (obj.pageSize || obj.size) {
    let size = obj.pageSize || obj.size, num = obj.pageNumber || obj.page
    obj.rn_s = that.calc(that.calc(size, that.calc(num, 1, '-'), '*'), 1, '+') + ''
    obj.rn_e = that.calc(size, num, '*') + ''
  }
  delete obj.pageSize
  delete obj.pageNumber
  delete obj.page
  delete obj.size
  return obj
}