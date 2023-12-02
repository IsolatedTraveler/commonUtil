import { setUserVar } from "../../allSet";
import { system, user } from "../../allVar";
import { getBrowserParam } from "../../browser/data";
import { session } from "../../temp/session";
import { setPageTemp } from "../../temp/tempData";
import { userInfo } from "../var";
import { setUserInfoVal } from "../var/gloabl";
import { logOut } from "./logOut";
export function getUser() {
  if (system) {
    return setUserVar(getBrowserParam("0", 'ryxx'))
  } else {
    return setPageTemp(user, setUser)
  }
}
function setUser() {
  setUserVar(getUserInfo().ryxx)
  if (!user) {
    logOut()
  }
  return user
}
function getUserInfo() {
  return setPageTemp(userInfo, setUserInfo) || {}
}
function setUserInfo() {
  setUserInfoVal(session('userinfo'))
  if (!userInfo) {
    logOut()
  }
  return userInfo
}
