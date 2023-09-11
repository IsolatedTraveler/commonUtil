import {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload
} from "../../../global/ajax/public/ajax";
export {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  upload
} from "../../../global/ajax/public/ajax";
export function setPageSize(obj) {
  if (obj.pageSize) {
    let size = obj.pageSize, num = obj.pageNumber
    obj.rn_s = that.calc(that.calc(size, that.calc(num, 1, '-'), '*'), 1, '+') + ''
    obj.rn_e = that.calc(size, num, '*') + ''
  }
  delete obj.pageSize
  delete obj.pageNumber
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