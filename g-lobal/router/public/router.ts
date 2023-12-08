import { routerUrl } from "../../allVar"
import { getBaseUrl } from "../../url"
import { dealsUrl } from "../../url/public/concat"
import { chageTab } from "../function/chageTab"
import { dealWebTabName } from "../function/dealWebTabName"
import { redirect } from "./redirect"

export function router(pid: string, id: any, title: any, url: any, data: any = undefined) {
  console.warn(id, title)
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
      redirect(a, pid, id, title, url, data)
    }
  }
}