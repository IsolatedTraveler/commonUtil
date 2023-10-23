
// eslint-disable-next-line no-unused-vars
import { contentType, jqMode } from "../../g-lobal/ajax/var/ajax";
import { commonHttppost, commonQueryAsyncHttppost_callback, getAjax, getAjaxSync, upload } from "./fun/ajax";

import { dealAjaxData, getServiceUrl } from "./fun/reWrite";
// eslint-disable-next-line no-unused-vars
const Class = function () {
  // eslint-disable-next-line no-import-assign
  jqMode = null
  // eslint-disable-next-line no-import-assign
  contentType = 'application/x-www-form-urlencoded'
  that.getAjax = getAjax
  that.getAjaxSync = getAjaxSync
  that.commonHttppost = commonHttppost
  that.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
  that.upload = upload
  that.getServiceUrl = getServiceUrl
  that.dealAjaxData = dealAjaxData
}
export default Class