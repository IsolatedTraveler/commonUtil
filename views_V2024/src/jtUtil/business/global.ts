import { dicget, ajaxGet, ajaxPost, getUrlParams, toDecimalNumber, alertMsg, getConfig, getUser, openDialog, possessMkqx, debounce, openMsgBox, closeParentPop, confirmMsg } from "../../../g-lobal";
import { Class } from "../core";
// common
Class.prototype.getConfig = getConfig
Class.prototype.confirmMsg = confirmMsg
Class.prototype.alertMsg = alertMsg
Class.prototype.getUser = getUser
Class.prototype.openDialog = openDialog
Class.prototype.possessMkqx = possessMkqx
Class.prototype.dicget = dicget
// layer
Class.prototype.closeParentPop = closeParentPop
Class.prototype.openMsgBox = openMsgBox
// url
Class.prototype.getUrlParams = getUrlParams
// util
Class.prototype.toDecimalNumber = toDecimalNumber
Class.prototype.debounce = debounce
// xhr
Class.prototype.ajaxPost = ajaxPost
Class.prototype.ajaxGet = ajaxGet