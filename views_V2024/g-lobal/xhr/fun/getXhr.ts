import { CONTENTTYPE } from "../../common/xhr/magic/var/const"
import { AjaxRequestConfig, AjaxRequestType, UrlType, XhrRes } from "../../type"
import { buildAbsoluteUrl } from "../../url/public/buildAbsoluteUrl"
import { buildUrlWithQueryParams } from "../../url/public/buildUrlWithQueryParams"
import { errFormat } from "../../util/public/errFormat"
import { AJAX_TIMEOUT } from "../var"
import { dealXhrRes } from "./dealXhrRes"
import { setXhrKeyVal } from "./setXhrKeyVal"

/**
 * 发起一个Ajax请求的通用函数，支持GET和POST等HTTP方法。
 *
 * 此函数封装了XMLHttpRequest的使用细节，包括URL构建、请求头设置、超时处理及响应解析，
 * 并通过Promise模式提供了一种链式异步处理机制，便于错误捕获和结果处理。
 *
 * @param {string} url - 请求的目标URL。
 * @param {any} data - 要发送的数据，对于POST请求是请求体，GET请求可忽略或用于生成查询参数。
 * @param {any} param - 附加的URL查询参数对象，将被转换为查询字符串追加到URL末尾。
 * @param {AjaxRequestType} [type='GET'] - 请求类型，默认为GET，可选POST等。
 * @param {UrlType} [urlType='origin'] - URL类型指示符，用于构建绝对URL，如'origin'或'base'等。
 * @param {AjaxRequestConfig} [config={}] - 额外的请求配置，比如请求头、超时等。
 *
 * @returns {Promise<XhrRes>} - 返回一个包含请求响应的Promise对象，响应数据结构由`XhrRes`定义。
 */
export function getXhr(
  url: string,
  data: any,
  param: any,
  type: AjaxRequestType = 'GET',
  urlType: UrlType = 'origin',
  config: AjaxRequestConfig = {}): Promise<XhrRes> {
  return new Promise((resolve, reject) => {
    try {
      url = buildAbsoluteUrl(url, urlType)
      url = buildUrlWithQueryParams(param, url)
      const xhr = new XMLHttpRequest()
      xhr.open(type, url, true)
      xhr.setRequestHeader('Content-Type', CONTENTTYPE)
      setXhrKeyVal(xhr, 'setRequestHeader', config.headers)
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
      reject(errFormat('请求过程中发生错误：' + (e.message || e)))
    }
  })
}