import { AjaxRequestConfig, AjaxRequestOption } from "../../../../views/g-lobal/ajax/type";
import { async } from "../fun";
import { dealRequestData } from "../fun/dealRequestData";

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
 * 并根据提供的选项和配置来定制请求。它内部调用了`async`函数（未在此代码段中定义），
 * 该函数应负责实际发起网络请求并处理响应。`dealRequestData`函数（同样未在此定义）
 * 用于处理请求数据，可能是为了序列化或其他预处理步骤。
 * 
 * 示例用法：
 * asyncQueryPost('/api/data', { query: 'value' })
 *   .then(response => console.log(response))
 *   .catch(error => console.error('请求失败:', error));
 */
export function asyncQueryPost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return async(url, dealRequestData(data, option, config), option.param, option, config, 'POST')
}