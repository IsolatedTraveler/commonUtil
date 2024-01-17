import { dealsUrl, getParamsUrl } from "../../url"
function elemLoaded(this: any, e: any, resolve: Function, reject: Function) {
  if (e.type === 'load') {
    resolve()
  } else {
    reject()
  }
}
export function loadJs(url: string): Promise<null> {
  var node = d.createElement('script'),
    useHead = d.getElementsByTagName('head')[0]
  return new Promise((resolve, reject) => {
    node.async = true
    node.src = getParamsUrl({ v: new Date().getTime() }, dealsUrl(url))
    useHead.appendChild(node)
    $(node).on('load', function (this: any, e: any) {
      elemLoaded.call(this as any, e, resolve, reject);
    })
  })
}