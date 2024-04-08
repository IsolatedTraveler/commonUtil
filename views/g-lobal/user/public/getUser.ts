import { setUserInfoVal, setUserVal, system, user, userInfo } from "../../allVar";
import { getBrowserParam } from "../../browser/public/data";
import { session } from "../../temp/session";
import { setPageTemp } from "../../temp/tempData";
import { logOut } from "./logOut";
export function getUser() {
  if (system) {
    return setUserVal(getBrowserParam("0", 'ryxx'))
  } else {
    return setPageTemp(user, setUser)
  }
}
function setUser() {
  setUserVal(getUserInfo().ryxx)
  if (!user) {
    logOut()
  }
  return user
}
export function getUserInfo() {
  return setPageTemp(userInfo, setUserInfo) || {}
}
function setUserInfo() {
  setUserInfoVal(session('userinfo'))
  if (!userInfo) {
    logOut()
  }
  return userInfo
}
