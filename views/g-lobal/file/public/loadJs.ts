import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url"
import { elemLoaded } from "../fun"

export function loadJs(url: string): Promise<null> {
  var node = d.createElement('script'),
    useHead = d.getElementsByTagName('head')[0]
  return new Promise((resolve, reject) => {
    node.async = true
    node.src = getParamsUrl({ v: new Date().getTime() }, dealsUrl(url, getBaseUrl()))
    useHead.appendChild(node)
    $(node).on('load', function (this: any, e: any) {
      elemLoaded.call(this as any, e, resolve, reject);
    })
  })
}
export function loadJsJudge(url: string, name: string, win: any = w) {
  if (win[name]) {
    return Promise.resolve()
  } else {
    return loadJs(url)
  }
}