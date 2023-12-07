
// eslint-disable-next-line no-unused-vars
import { getServiceUrl } from "../../g-lobal";
import { setAjaxContentType, setJqMode } from "../../g-lobal/allSet";
import { commonHttppost, commonQueryAsyncHttppost_callback, getAjax, getAjaxSync, upload, setPageSize } from "./fun/ajax";

import { dealAjaxData } from "./fun/reWrite";
// eslint-disable-next-line no-unused-vars
const Class = function () {
  setJqMode('')
  setAjaxContentType('application/x-www-form-urlencoded')
  that.getAjax = getAjax
  that.getAjaxSync = getAjaxSync
  that.commonHttppost = commonHttppost
  that.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
  that.upload = upload
  that.getServiceUrl = getServiceUrl
  that.dealAjaxData = dealAjaxData
  that.setPageSize = setPageSize
}
export default Class