import { alertMsg, getConfig } from "../../common"
import { loadJs } from "../../file"
import { CLODOP_URL } from "./const"

export let clodop: any, getClodoped: Promise<any>
export function setClodop() {
  if (clodop) {
    return Promise.resolve(clodop)
  } else if (!getClodoped) {
    getClodoped = getClodopIng().then((res) => {
      clodop = res
      res.SET_LICENSES(getConfig('lodop_licenses_name'), getConfig('lodop_licenses_id'), '', '');
      return clodop
    })
  }
  return getClodoped
}
function getClodopIng() {
  if (window.getClodop) {
    return Promise.resolve(window.getClodop())
  } else {
    return loadJs(CLODOP_URL).then(() => {
      if (window.getClodop) {
        return window.getClodop()
      } else {
        alertMsg('未安装Clodop插件，请安装Clodop插件后刷新使用', '提示')
        return Promise.reject()
      }
    })
  }
}