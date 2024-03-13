import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url"
export function loadStyle(url: string): Promise<null> {
  var node = d.createElement('link'),
    useHead = d.getElementsByTagName('head')[0]
  return new Promise((resolve, reject) => {
    node.rel = 'stylesheet'
    node.type = 'text/css'
    node.href = getParamsUrl({ v: new Date().getTime() }, dealsUrl(url, getBaseUrl()))
    useHead.appendChild(node)
    resolve(null)
  })
}