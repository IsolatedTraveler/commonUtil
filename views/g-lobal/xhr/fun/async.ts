import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { errFormat } from "../../util";
import { ajaxTimeOut } from "../var";
import { dealXhrRes, setXhr } from "./sync";
/**
 * 异步发送请求
 * @param {string} url - 请求URL
 * @param {*} data - 请求数据
 * @param {*} option - 请求选项
 * @param {*} config - 配置信息
 * @param {string} type - 请求类型
 * @returns {Promise} 返回处理Promise
 */
export function async(url: string, data: any = {}, param: any = {}, option: AjaxRequestOption = {}, config: AjaxRequestConfig = {}, type: 'GET' | 'POST') {
  return new Promise((resolve, reject) => {
    try {
      const xhr = setXhr(url, type, option.urlType, param, config, true)
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