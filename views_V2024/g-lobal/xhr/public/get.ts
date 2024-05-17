import { AjaxRequestConfig, AjaxRequestOption } from "../../type";
import { setXhr } from "../fun";
/**
 * @description 封装用于发起GET类型的Ajax请求。
 * 
 * 此函数简化了设置，专为GET请求设计，自动处理URL构建、查询参数附加、以及可选的鉴权检查逻辑。
 * 它通过调用`setXhr`函数实现请求的实际发送，并允许传递额外的配置和鉴权选项。
 *
 * @param {string} url - 目标API的URL地址。
 * @param {any} data - GET请求通常不需要请求体，但可以通过此参数传递附加数据，可能用于内部处理或附加到查询字符串。
 * @param {AjaxRequestOption} option - 请求的附加选项，预期包含鉴权检查(`isCheck`)等配置。
 * @param {AjaxRequestConfig} config - 请求的额外配置，如请求头、超时时间等。
 * 
 * @returns {Promise<XhrRes>} - 返回一个包含请求响应的Promise对象，响应结构由`XhrRes`定义。
 */
export function ajaxGet(url: string, data: any, option: AjaxRequestOption, config: AjaxRequestConfig) {
  return setXhr(url, option.param, data, 'GET', option, config)
}