import { Class } from "../core";
import { alertPwd, getTopMenuId, renderTop, routerByData } from "../public/business/login";
Class.prototype.router = GLOBAL$ROUTER$.router
Class.prototype.exit = GLOBAL$USER$.exit
Class.prototype.logOut = GLOBAL$USER$.logOut
Class.prototype.login = GLOBAL$USER$.login
Class.prototype.dealLogin = GLOBAL$COMMONUTIL$.dealLogin
Class.prototype.getRouterW = GLOBAL$ROUTER$.getRouterW
Class.prototype.getTopMenuId = getTopMenuId
Class.prototype.routerByData = routerByData
Class.prototype.alertPwd = alertPwd
Class.prototype.renderTop = renderTop
