import { AjaxRequestType } from "../views_V2024/g-lobal";
type XMLSjlx = 'string' | 'jsonS' | 'jsonE'
export interface XMLData {
  state: 'success' | 'error' | 'timeout'
  sjlx: XMLSjlx
}
export const XML_ERROR_DATA = { "code": -1, "data": null, "message": "请求失败：网络错误" }
export const XML_TIMEOUT_DATA = { "code": -1, "data": null, "message": "请求失败：网络连接超时" }
export const XML_JSON_E_DATA = { code: -1, message: "错误测试", data: null }
export class XMLHttpRequest {
  status = 0
  responseText = ''
  method = 'GET'
  url = ''
  async = true
  requestHeaders: any = {}
  constructor() {
  }
  open(method: AjaxRequestType, url: string, async: boolean) {
    this.method = method;
    this.url = url;
    this.async = async;
    this.status = 1;
  }
  setRequestHeader(header: string, value: string) {
    this.requestHeaders[header] = value;
  }
  send(data: XMLData) {
    if (this.async) {
      setTimeout(() => {
        this.onreadystatechange(data);
      }, 0);
    } else {
      this.onreadystatechange(data)
    }
  }
  private getSjData(sjlx: XMLSjlx) {
    if (sjlx === 'string') {
      this.responseText = 'success'
    } else if (sjlx === 'jsonS') {
      this.responseText = JSON.stringify({ code: 1, data: {}, message: '' })
    } else if (sjlx === 'jsonE') {
      this.responseText = JSON.stringify({ code: -1, data: null, message: '错误测试' })
    }
  }
  onreadystatechange({ state, sjlx }: XMLData) {
    if (state == 'success') {
      this.status = 200
      this.getSjData(sjlx)
      this.onload()
    } else if (state == 'error') {
      this.status = 404
      this.onerror()
    } else if (state === 'timeout') {
      this.ontimeout()
    }
  }
  onload() {
  }
  onerror() {
  }
  ontimeout() {
  }
}