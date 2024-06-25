import { buildUrlWithQueryParams, convertToAbsoluteUrl, getAppBaseUrl } from "../../url/main"
import { elemLoaded } from "../fun"

export function loadJs(url: string): Promise<null> {
  var node = document.createElement('script'),
    useHead = document.getElementsByTagName('head')[0]
  return new Promise((resolve, reject) => {
    node.async = true
    node.src = buildUrlWithQueryParams({ v: new Date().getTime() }, convertToAbsoluteUrl(url, getAppBaseUrl()))
    useHead.appendChild(node)
    $(node).on('load', function (this: any, e: any) {
      elemLoaded.call(this as any, e, resolve, reject);
    })
  })
}