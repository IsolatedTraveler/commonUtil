import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { ajaxTimeOut } from "../var";

export function sync(url: string, data: any, option: AjaxRequestOption, config: AjaxRequestConfig, type: 'GET' | 'POST') {
  const xhr = setXhr(url, type, false)
  try {
    xhr.send();
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('同步请求成功，响应内容：', xhr.responseText);
    } else {
      throw new Error(`同步请求失败，状态码：${xhr.status}`);
    }
  } catch (e) {
    console.error('请求过程中发生错误：', e);
  }
}
export function setXhr(url: string, type: 'GET' | 'POST', sync: boolean) {
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, sync)
  xhr.open(type, url, sync)
  xhr.setRequestHeader('Content-Type', GLOBAL$COMMON$.contentType);
  xhr.timeout = ajaxTimeOut
  return xhr
}