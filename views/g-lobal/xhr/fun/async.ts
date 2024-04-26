import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { setXhr } from "./sync";
/**
 * 异步发送请求
 * @param {string} url - 请求URL
 * @param {*} data - 请求数据
 * @param {*} option - 请求选项
 * @param {*} config - 配置信息
 * @param {string} type - 请求类型
 * @returns {Promise} 返回处理Promise
 */
export function async(url: string, data: any, option: AjaxRequestOption, config: AjaxRequestConfig, type: 'GET' | 'POST') {
  return new Promise((resolve, reject) => {
    const xhr = setXhr(url, type, true)
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        resolve(new Error(`异步请求失败，状态码：${xhr.status}`));
      }
    };
    xhr.onerror = () => {
      reject(new Error('异步请求失败，网络错误'));
    };
    xhr.send();
  })
}