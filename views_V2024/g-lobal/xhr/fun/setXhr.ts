import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types"
import { contentType } from "../../common/xhr/magic/var"
import { buildAbsoluteUrl, buildUrlWithQueryParams } from "../../url"

/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function setXhr(
  url: string,
  type: AjaxRequestType,
  { urlType, isCheck }: AjaxRequestOption,
  param: any,
  config: AjaxRequestConfig,
  async: boolean,
  isRest: boolean) {
  if (isCheck && that.checkAuth) {
    that.checkAuth(config, url, isRest)
  }
  url = buildAbsoluteUrl(url, urlType)
  url = buildUrlWithQueryParams(param, url)
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, async)
  xhr.setRequestHeader('Content-Type', contentType)
  return xhr
}