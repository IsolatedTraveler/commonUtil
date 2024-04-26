import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { getAllUrl, getParamsUrl } from "../../url";
import { UrlType } from "../../url/type";
import { ajaxTimeOut } from "../var";
/**
 * 发送同步请求
 * @param {string} url - 请求地址
 * @param {*} data - 请求数据
 * @param {*} option - 请求选项
 * @param {*} config - 配置信息
 * @param {string} type - 请求方式
 */
export function sync(url: string, data: any, param: any, option: AjaxRequestOption, config: AjaxRequestConfig, type: 'GET' | 'POST') {
  const xhr = setXhr(url, type, option.urlType, param, false)
  try {
    xhr.send(data);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('同步请求成功，响应内容：', xhr.responseText);
    } else {
      throw new Error(`同步请求失败，状态码：${xhr.status}`);
    }
  } catch (e) {
    console.error('请求过程中发生错误：', e);
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
  async: boolean) {
  url = getAllUrl(url, urlType)
  url = getParamsUrl(param, url)
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, async)
  xhr.setRequestHeader('Content-Type', GLOBAL$COMMON$.contentType);
  xhr.timeout = ajaxTimeOut
  return xhr
}