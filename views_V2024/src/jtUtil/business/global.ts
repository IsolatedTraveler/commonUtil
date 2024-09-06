import {
  dicget,
  ajaxGet,
  ajaxPost,
  ajaxPost1,
  getUrlParams,
  toDecimalNumber,
  alertMsg,
  getConfig,
  getUser,
  openDialog,
  possessMkqx,
  debounce,
  openMsgBox,
  closeParentPop,
  confirmMsg,
  throttle,
  getServerUrl,
  unique
} from '../../../g-lobal';
import {Class} from '../core';
// common
Class.prototype.getConfig = getConfig;
Class.prototype.confirmMsg = confirmMsg;
Class.prototype.alertMsg = alertMsg;
Class.prototype.getUser = getUser;
Class.prototype.openDialog = openDialog;
Class.prototype.possessMkqx = possessMkqx;
Class.prototype.dicget = dicget;
// layer
Class.prototype.closeParentPop = closeParentPop;
Class.prototype.openMsgBox = openMsgBox;
// url
Class.prototype.getUrlParams = getUrlParams;
Class.prototype.getServerUrl = getServerUrl;
// util
Class.prototype.toDecimalNumber = toDecimalNumber;
Class.prototype.debounce = debounce;
Class.prototype.throttle = throttle;
Class.prototype.unique = unique;
// xhr
Class.prototype.ajaxPost = ajaxPost;
Class.prototype.ajaxPost1 = ajaxPost1;
Class.prototype.ajaxGet = ajaxGet;
