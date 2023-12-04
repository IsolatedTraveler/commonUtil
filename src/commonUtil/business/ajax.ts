import { Class } from "../core";
import { dealAjaxData } from "../public/fun/ajax";
import { encryption, getPostData } from "../reWrite/fun/ajax";
Class.prototype.getAjax = getAjax
Class.prototype.getAjaxSync = getAjaxSync
Class.prototype.getPostData = getPostData
Class.prototype.commonHttppost = commonHttppost
Class.prototype.commonQueryAsyncHttppost_callback = commonQueryAsyncHttppost_callback
Class.prototype.getConfig = getConfig
Class.prototype.upload = upload
Class.prototype.encryption = encryption
Class.prototype.dealAjaxData = dealAjaxData