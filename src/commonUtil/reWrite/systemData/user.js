import { setPageTemp } from "../../public/fun/deeps";
import { formatTreeData } from "../../public/fun/init";
import { that, webNameReg } from "../../var/init";
import {user, userInfo, menu} from "../../../../global/base/var/user";
function setUserInfo() {
  userInfo = that.session('userinfo')
  if (!userInfo) {
    that.logOut()
  }
  return userInfo
}
function getUserInfo() {
  return setPageTemp(userInfo, setUserInfo) || {}
}
function setUser() {
  user = getUserInfo().ryxx
  if (!user) {
    that.logOut()
  }
  return user
}
function getMenuBySql() {
  menu = getUserInfo().cdqx || that.commonHttppost('/rest/queryDataBySql/000000/999', {}).data
  that.session('menu', menu)
  return menu
}
function setMenu() {
  menu = that.session('menu') 
  return menu = dealMenu(setPageTemp(menu, getMenuBySql) || [])
}
export function dealMenu(menu) {
  if (menu) {
    menu = formatTreeData(menu, 'id', 'sjid', 'cd-')
    if (menu.length === 1) {
      let a = menu[0]
      if (a && a.sjid && a.jtchild && a.jtchild.length) {
        menu = a.jtchild
        menu.__proto__ = a.__proto__
      }
    }
  }
  return menu
}
export function getUser() {
  return setPageTemp(user, setUser)
}
export function getMenu(judge) {
  setPageTemp(menu, setMenu)
  return judge ? menu['cd-' + w.name.replace(webNameReg, '')] : menu
}
export default {
  getUser,
  getMenu,
  dealMenu
}