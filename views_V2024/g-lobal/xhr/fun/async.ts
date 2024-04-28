import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types";
import { errFormat } from "../../util";
import { ajaxTimeOut } from "../var";
import { dealXhrRes } from "./deaXhrRes";
import { setXhr } from "./setXhr";
/**
 * 发起一个异步的HTTP请求（支持GET和POST）。
 *
 * 此函数封装了XMLHttpRequest的使用，提供了请求的发起、响应处理以及错误处理的统一接口。
 * 支持自定义请求参数、附加参数、请求配置以及超时设置，适用于多种网络请求场景。
 *
 * @param {string} url - 请求的目标URL。
 * @param {any} [data={}] - 请求发送的数据，对于GET请求将附加为查询参数，POST请求则作为请求体。
 * @param {any} [param={}] - 额外的请求参数，可用于拼接URL或作为其他配置。
 * @param {AjaxRequestOption} [option={}] - 请求的附加选项，比如URL类型、错误处理等。
 * @param {AjaxRequestConfig} [config={}] - 高级配置，可能包含认证信息、请求头等。
 * @param {'GET' | 'POST'} type - 请求方法，支持'GET'或'POST'。
 *
 * @returns {Promise<any>} 返回一个Promise，成功时携带响应数据，失败则抛出错误信息。
 */
export function async(url: string, data: any = {}, param: any = {}, option: AjaxRequestOption = {}, config: AjaxRequestConfig = {}, type: AjaxRequestType) {
  return new Promise((resolve, reject) => {
    try {
      const xhr = setXhr(url, type, option, param, config, true)
      xhr.timeout = ajaxTimeOut
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