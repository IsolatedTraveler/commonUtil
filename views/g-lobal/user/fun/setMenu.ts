import { commonHttppost } from "../../ajax"
import { system } from "../../allVar"
import { session, setPageTemp } from "../../temp"
import { getUserInfo } from "../public/getUser"
import { setMenuVal } from "../var"
import { dealMenu } from "./dealMenu"

function getMenuBySql() {
  let menu
  if (system) {
    menu = JSON.parse(system.hiscdqx()).yhcd
  } else {
    menu = getUserInfo().cdqx || commonHttppost('/rest/queryDataBySql/000000/999', {}).data
  }
  that.session('menu', menu)
  return menu
}
export function setMenu() {
  let menu = session('menu')
  return setMenuVal(dealMenu(setPageTemp(menu, getMenuBySql) || []))
}