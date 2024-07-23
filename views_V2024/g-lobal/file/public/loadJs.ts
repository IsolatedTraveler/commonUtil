import { buildUrlWithQueryParams, getAppBaseUrl } from "../../url/main"
import { elemLoaded } from "../fun"
/**
 * @description 动态加载指定URL的JavaScript文件。
 * 该函数会创建一个script标签，附加必要的属性，并将其插入到文档的head部分。
 * 成功或失败时，会通过Promise回调通知调用者。
 *
 * @param {string} url - 要加载的JavaScript文件的URL路径。
 * @returns {Promise<null>} - 返回一个Promise，加载成功时resolve(null)，失败则reject带有错误信息。
 */
export function loadJs(url: string): Promise<null> {
  var node = document.createElement('script'),
    useHead = document.getElementsByTagName('head')[0]
  return new Promise((resolve, reject) => {
    node.async = true
    node.src = buildUrlWithQueryParams({ v: new Date().getTime() }, new URL(url, getAppBaseUrl()).href)
    useHead.appendChild(node)
    $(node).on('load', function (this: any, e: any) {
      elemLoaded.call(this as any, e, resolve, reject);
    })
  })
}