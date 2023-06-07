
// eslint-disable-next-line no-unused-vars
import { jqMode } from "../../global/ajax/var/ajax";
import { commonHttppost, commonQueryAsyncHttppost_callback, getAjax, getAjaxSync, upload } from "./fun/ajax";

import { dealAjaxData } from "./fun/reWrite";
// eslint-disable-next-line no-unused-vars
const Class = function () {
  // eslint-disable-next-line no-import-assign
  jqMode = null
  that.getAjax = getAjax
  that.getAjaxSync = getAjaxSync
  that.commonHttppost = commonHttppost
  that.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
  that.upload = upload
  that.dealAjaxData = dealAjaxData
}
export default Class