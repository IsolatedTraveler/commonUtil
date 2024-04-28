import { AjaxRequestConfig } from "../../../../views/g-lobal/ajax/type"
import { UrlType } from "../../../../views/g-lobal/url/type"
import { buildAbsoluteUrl } from "../../url/public/buildAbsoluteUrl"
import { createUrlWithParams } from "./createUrlWithParams"

/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function setXhr(
  url: string,
  type: 'GET' | 'POST',
  urlType: UrlType,
  param: any,
  config: AjaxRequestConfig,
  async: boolean) {
  if (type === 'POST' && that.checkAuth) {
    that.checkAuth(config, url)
  }
  url = buildAbsoluteUrl(url, urlType)
  url = createUrlWithParams(param, url)
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, async)
  xhr.setRequestHeader('Content-Type', GLOBAL$COMMON$.contentType)
  return xhr
}