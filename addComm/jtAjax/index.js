
import { getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, setPageSize } from "./fun/ajax";
import { encryption, getPostData } from "./fun/reWrite";
// eslint-disable-next-line no-unused-vars
const Class = function() {
  that.getAjax = getAjax
  that.getAjaxSync = getAjaxSync
  that.commonHttppost = commonHttppost
  that.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
  that.getConfig = getConfig
  that.upload = upload
  that.setPageSize = setPageSize
  that.getPostData = getPostData
  that.encryption = encryption
}
export default Class