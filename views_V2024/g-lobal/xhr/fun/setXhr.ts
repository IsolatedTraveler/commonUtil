import { CONTENTTYPE } from "../../common/xhr/magic/var"
import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../type"
import { buildAbsoluteUrl, buildUrlWithQueryParams } from "../../url"
import { getXhr } from "./getXhr"

/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function setXhr(
  url: string,
  data: any,
  type: AjaxRequestType,
  { urlType, isCheck }: AjaxRequestOption,
  param: any,
  config: AjaxRequestConfig,
  isRest: boolean) {
  if (isCheck && that.checkAuth) {
    that.checkAuth(config, url, isRest)
  }
  return getXhr(url, data, param, type, urlType)
}