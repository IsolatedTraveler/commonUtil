import { setUserInfoVal, setUserVar, system, userInfo } from "../var/index";
import { getBrowserParam } from '../browser/index'
import { user } from "../var/index";
import { setPageTemp, session } from "../base/index";
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
