import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { setXhr } from "./sync";

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