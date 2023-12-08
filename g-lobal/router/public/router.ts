import { routerUrl, system } from "../../allVar"
import { getSystemVal } from "../../browser"
import { getBaseUrl, getParamsUrl } from "../../url"
import { dealsUrl } from "../../url/public/concat"
import { chageTab } from "../function/chageTab"
import { dealWebTabName } from "../function/dealWebTabName"
import { redirect } from "./redirect"

export function router(pid: string, id: any, title: any, url: any, data: any = undefined) {
  if (system) {
    if (url) {
      url = dealsUrl(url, dealsUrl('webs', getBaseUrl()))
      if (data) {
        url = getParamsUrl(data, url);
      }
    }
    let res = JSON.parse(getSystemVal("openHisSystem", [pid, id === pid ? "" : id, url]));
    if (res.code !== "1" && url) {
      w.location.href = dealsUrl(url)
    }
  } else {
    // 自定义页面
    if (/jt-/.test(pid) && !id) {
      w.name = pid
      dealWebTabName(pid, true)
      location.href = dealsUrl(url, getBaseUrl())
    } else {
      let name = 'cd-' + pid
      if (name === w.name) {
        id && chageTab(id, title, url, data)
      } else {
        dealWebTabName(name)
        const a = w.open(dealsUrl(routerUrl, getBaseUrl()), name, '')
        redirect((a as Window), pid, id, title, url, data)
      }
    }
  }
}