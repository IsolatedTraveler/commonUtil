import { CONTENTTYPE } from "../../common/xhr/magic/var"
import { AjaxRequestType, UrlType, XhrRes } from "../../type"
import { buildAbsoluteUrl, buildUrlWithQueryParams } from "../../url"
import { errFormat } from "../../util"
import { AJAX_TIMEOUT } from "../var"
import { dealXhrRes } from "./deaXhrRes"

/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function getXhr(
  url: string,
  data: any,
  param: any,
  type: AjaxRequestType = 'GET',
  urlType: UrlType = 'origin'): Promise<XhrRes> {
  return new Promise((resolve, reject) => {
    try {
      url = buildAbsoluteUrl(url, urlType)
      url = buildUrlWithQueryParams(param, url)
      const xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.setRequestHeader('Content-Type', CONTENTTYPE)
      xhr.timeout = AJAX_TIMEOUT
      xhr.onload = () => {
        resolve(dealXhrRes(xhr))
      };
      xhr.onerror = () => {
        reject(errFormat('请求失败：网络错误'))
      };
      xhr.ontimeout = () => {
        reject(errFormat('请求失败：网络连接超时'))
      }
      xhr.send(data);
    } catch (e: any) {
      return reject(errFormat('请求过程中发生错误：' + (e.message || e)))
    }
  })
}