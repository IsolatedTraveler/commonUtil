import { getConfig } from "../../common"
import { loadJs } from "../../file"
import { CLODOP_URL } from "./const"

export let clodop: any, getClodoped: Promise<any> | undefined
export function setClodop() {
  if (clodop) {
    return Promise.resolve(clodop)
  } else if (!getClodoped) {
    getClodoped = Promise.all([getClodopIng(), getConfig()]).then(([_res, config]) => {
      clodop = window.getClodop()
      clodop.SET_LICENSES(config.lodop_licenses_name, config.lodop_licenses_id, '', '');
      return clodop
    })
  }
  return getClodoped
}
export function clearClodop() {
  clodop = undefined
  getClodoped = undefined
}
function getClodopIng() {
  if (window.getClodop) {
    return Promise.resolve()
  } else {
    return loadJs(CLODOP_URL).then(() => {
      if (window.getClodop) {
        return
      } else {
        return Promise.reject(new Error('未安装Clodop插件，请安装Clodop插件后刷新使用'))
      }
    })
  }
}