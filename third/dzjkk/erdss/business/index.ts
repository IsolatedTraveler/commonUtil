import { Class } from "../core";
import { init, loadFun, loadFunBySql } from "../public";

Class.prototype.init = init
Class.prototype.loadFun = loadFun
Class.prototype.loadFunBySql = loadFunBySql
Class.prototype.dealAjaxData = GLOBAL$AJAX$.dealAjaxData