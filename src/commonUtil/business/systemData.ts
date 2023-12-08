/* eslint-disable no-undef */
import { Class } from "../core";
import { getSystemTime, getRyxx, faceVerify } from "../public/systemData/data";
import { getKsxx, dicget, possessMkqx } from "../reWrite/systemData/data";
import { dealMenu, getMenu } from "../reWrite/systemData/user";

Class.prototype.getSystemTime = getSystemTime
Class.prototype.getKsxx = getKsxx
Class.prototype.getRyxx = getRyxx
Class.prototype.faceVerify = faceVerify
Class.prototype.dicget = dicget
Class.prototype.possessMkqx = possessMkqx
Class.prototype.paramget = GLOBAL$COMMONUTIL$.paramget
Class.prototype.getUser = GLOBAL$USER$.getUser
Class.prototype.getMenu = getMenu
Class.prototype.dealMenu = dealMenu