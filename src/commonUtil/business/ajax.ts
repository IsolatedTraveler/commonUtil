import { commonQueryAsyncHttppost_callback, getAjaxSync, getConfig, upload } from "../../../g-lobal";
import Class from "../core";
import { dealAjaxData } from "../public/fun/ajax";
import { getToken } from "../public/fun/config";
import { encryption, getPostData } from "../reWrite/fun/ajax";
Class.prototype.getAjax = getAjax
Class.prototype.getAjaxSync = getAjaxSync
Class.prototype.getPostData = getPostData
Class.prototype.commonHttppost = commonHttppost
Class.prototype.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
Class.prototype.getConfig = getConfig
Class.prototype.getToken = getToken
Class.prototype.upload = upload
Class.prototype.encryption = encryption
Class.prototype.dealAjaxData = dealAjaxData
Class.prototype.jqFun = {
  magic: getToken
}