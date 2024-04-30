import { AjaxRequestConfig, AjaxRequestOption } from "../../../../views/g-lobal/ajax/type";
import { XhrRes, dealRequestData } from "../../common/";
import { async } from "../fun";

/**
 * 发起一个异步的HTTP POST请求，适用于常见的查询操作。
 *
 * @param {string} url - 请求的目标URL。
 * @param {any} data - 需要发送到服务器的数据。
 * @param {AjaxRequestOption} [option={}] - 请求的附加选项，例如错误处理信息等，默认为空对象。
 * @param {AjaxRequestConfig} [config={}] - 配置选项，用于进一步定制请求行为，默认为空对象。
 * 
 * @returns {Promise<any>} 返回一个Promise，代表异步操作的结果。
 * 
 * @description
 * 此函数封装了HTTP POST请求的过程，通过组合基础请求参数、处理请求数据，
 * 并根据提供的选项和配置来定制请求
 */
export function asyncQueryPost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): Promise<XhrRes | any> {
  return async(url, dealRequestData(data, option, config), option.param, option, config, 'POST')
}