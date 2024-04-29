import { AjaxRequestConfig, AjaxRequestOption } from "../../../../types";
import { XhrRes } from "../../common";
import { dealRequestData } from "../fun/dealRequestData";
import { sync } from "../fun/sync";
/**
 * 发起一个同步的HTTP POST请求，适用于常见的查询操作。
 *
 * @param {string} url - 请求的目标URL。
 * @param {any} data - 需要发送到服务器的数据。
 * @param {AjaxRequestOption} [option={}] - 请求的附加选项，例如错误处理信息等，默认为空对象。
 * @param {AjaxRequestConfig} [config={}] - 配置选项，用于进一步定制请求行为，默认为空对象。
 * 
 * @returns {any} 
 * 
 * @description
 * 此函数封装了HTTP POST请求的过程，通过组合基础请求参数、处理请求数据，
 * 并根据提供的选项和配置来定制请求
 */
export function commonHttppost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): XhrRes | any {
  return sync(url, dealRequestData(data, option, config), option.param, option, config, 'POST')
}