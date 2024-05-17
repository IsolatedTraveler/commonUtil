import { ajaxGet, ajaxPost, getUrlParams, toDecimalNumber } from "../../../g-lobal";
import { alertMsg, getConfig, getUser, openDialog } from "../../../g-lobal/common";
import { possessMkqx } from "../../../g-lobal/common/system/jtphis-magic/public/possessMkqx";
import { Class } from "../core";
// common
Class.prototype.getConfig = getConfig
Class.prototype.alertMsg = alertMsg
Class.prototype.getUser = getUser
Class.prototype.openDialog = openDialog
Class.prototype.possessMkqx = possessMkqx
// url
Class.prototype.getUrlParams = getUrlParams
// util
Class.prototype.toDecimalNumber = toDecimalNumber
// xhr
Class.prototype.ajaxPost = ajaxPost
Class.prototype.ajaxGet = ajaxGet