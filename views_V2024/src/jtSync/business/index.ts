import { ajaxPost, getConfig, getServerUrl, openDialog } from "../../../g-lobal";
import { Class } from "../core";
import { initJtSync, loadFun, loadFunBySql } from "../public";

Class.prototype.init = initJtSync
Class.prototype.loadFun = loadFun
Class.prototype.loadFunBySql = loadFunBySql
Class.prototype.commonQueryAsyncHttppost_callback = ajaxPost
Class.prototype.getConfig = getConfig
Class.prototype.getServerUrl = getServerUrl
Class.prototype.openDialog = openDialog