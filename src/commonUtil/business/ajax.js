import Class from "../core";
import { getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, dealAjaxData, upload } from "../public/fun/ajax";
import { getConfig, getToken } from "../public/fun/config";
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