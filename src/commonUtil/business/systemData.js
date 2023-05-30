import Class from "../core";
import {getSystemTime, getRyxx, faceVerify } from "../public/systemData/data";
import { getKsxx, dicget, possessMkqx, paramget } from "../reWrite/systemData/data";
import { dealMenu, getMenu, getUser } from "../reWrite/systemData/user";

Class.prototype.getSystemTime = getSystemTime
Class.prototype.getKsxx = getKsxx
Class.prototype.getRyxx = getRyxx
Class.prototype.faceVerify = faceVerify
Class.prototype.dicget = dicget
Class.prototype.possessMkqx = possessMkqx
Class.prototype.paramget = paramget
Class.prototype.getUser = getUser
Class.prototype.getMenu = getMenu
Class.prototype.dealMenu = dealMenu