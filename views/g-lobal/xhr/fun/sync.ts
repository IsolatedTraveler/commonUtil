import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { getAllUrl, getParamsUrl } from "../../url";
import { UrlType } from "../../url/type";
import { errFormat } from "../../util";
import { ajaxRerr, ajaxTimeOut } from "../var";
/**
 * 发送同步请求
 * @param {string} url - 请求地址
 * @param {*} data - 请求数据
 * @param {*} option - 请求选项
 * @param {*} config - 配置信息
 * @param {string} type - 请求方式
 */
export function dealXhrRes(xhr: XMLHttpRequest) {
  if (xhr.status >= 200 && xhr.status < 300) {
    return JSON.parse(xhr.responseText)
  } else {
    return errFormat('请求失败：' + ajaxRerr[xhr.status])
  }
}
export function sync(url: string, data: any = {}, param: any = {}, option: AjaxRequestOption = {}, config: AjaxRequestConfig = {}, type: 'GET' | 'POST') {
  try {
    const xhr = setXhr(url, type, option.urlType, param, config, false)
    const time = setTimeout(() => {
      xhr.abort()
    }, ajaxTimeOut);
    console.time()
    xhr.send(data);
    console.timeEnd()
    clearTimeout(time)
    return dealXhrRes(xhr)
  } catch (e: any) {
    return errFormat('请求过程中发生错误：' + (e.message || e))
  }
}
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
  url = getAllUrl(url, urlType)
  url = getParamsUrl(param, url)
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, async)
  xhr.setRequestHeader('Content-Type', GLOBAL$COMMON$.contentType)
  return xhr
}