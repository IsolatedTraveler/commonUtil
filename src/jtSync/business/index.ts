import { Class } from "../core";
import { init, loadFun, loadFunBySql } from "../public";

Class.prototype.init = init
Class.prototype.loadFun = loadFun
Class.prototype.loadFunBySql = loadFunBySql
Class.prototype.dealAjaxData = GLOBAL$AJAX$.dealAjaxData
Class.prototype.commonQueryAsyncHttppost_callback = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback
Class.prototype.getConfig = GLOBAL$AJAX$.getConfig
Class.prototype.getAjax = GLOBAL$AJAX$.getAjax