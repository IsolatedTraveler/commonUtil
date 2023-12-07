import {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload
} from "../../../g-lobal/";
export {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload
} from "../../../g-lobal/";
export function setPageSize(obj) {
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
export default {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload,
  setPageSize
}