import { Class } from "../core";
import { alertPwd, getRouterW, getTopMenuId, renderTop, routerByData } from "../public/business/login";
import { exit, login, logOut, router, exiting, dealLogin } from "../reWrite/business/login";
Class.prototype.exiting = exiting
Class.prototype.router = router
Class.prototype.exit = exit
Class.prototype.logOut = logOut
Class.prototype.login = login
Class.prototype.getRouterW = getRouterW
Class.prototype.getTopMenuId = getTopMenuId
Class.prototype.routerByData = routerByData
Class.prototype.alertPwd = alertPwd
Class.prototype.renderTop = renderTop
Class.prototype.dealLogin = dealLogin
