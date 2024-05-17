import { dealRequestData } from "../../common";
import { AjaxRequestConfig, AjaxRequestOption } from "../../type";
import { setXhr } from "../fun";
/**
 * 封装用于发起POST类型的Ajax请求。
 *
 * 此函数特别为POST请求设计，自动设置请求类型为'POST'，并处理数据预处理、URL构建、附加参数及可配置的鉴权与请求配置。
 * 数据在发送前会通过`dealRequestData`函数进行处理，这一步骤可以根据需求定制数据格式化或序列化逻辑。
 * 支持指定URL类型（默认为'service'）和其他自定义配置，增加了请求的灵活性和便捷性。
 *
 * @param {string} url - 目标API的URL地址。
 * @param {any} data - 需要发送到服务器的数据。在调用`setXhr`前，这些数据会先经过`dealRequestData`处理。
 * @param {AjaxRequestOption} [option={ urlType: 'service' }] - 请求的附加选项，包括URL类型等，默认URL类型为'service'。
 * @param {AjaxRequestConfig} [config] - 可选的请求配置，允许自定义如请求头、超时时间等高级设置。
 *
 * @returns {Promise<XhrRes>} - 返回一个包含POST请求响应的Promise对象，响应结构遵循`XhrRes`定义。
 */
export function ajaxPost(url: string, data: any, option: AjaxRequestOption = { urlType: 'service' }, config?: AjaxRequestConfig) {
  return setXhr(url, dealRequestData(data, option), option.param, 'POST', option, config)
}