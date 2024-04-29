import { AjaxRequestConfig, AjaxRequestOption } from "../../../../types";
import { XhrRes } from "../../common";
import { async } from "../fun";

/**
 * 发起一个异步的HTTP GET请求。
 *
 * 此函数封装了发送GET请求的过程，允许附带查询数据。
 * 它结合了基础请求参数、请求数据处理，并根据提供的选项和配置自定义请求。
 *
 * @param {string} url - 目标API的URL。
 * @param {any} data - 需要附加到URL作为查询参数的数据。
 * @param {AjaxRequestOption} [option={}] - 自定义请求选项，默认为一个空对象。
 * @param {AjaxRequestConfig} [config={}] - 额外的请求配置，默认为一个空对象。
 *
 * @returns {Promise<any>} 返回一个包含响应数据的Promise对象。
 */
export function asyncGetPost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): XhrRes | any {
  return async(url, option.param, data, option, config, 'GET')
}