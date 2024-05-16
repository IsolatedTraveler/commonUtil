import { AjaxRequestType, buildAbsoluteUrl } from "../views_V2024/g-lobal";
import { XHR_JQ_URL } from "../views_V2024/g-lobal/common/xhr/magic/var";
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
    var data, str = 'success'
    if (new RegExp(XHR_JQ_URL).test(this.url)) {
      var accessToken = sessionStorage.getItem('Authorization')
      if (!accessToken) {
        const { jqcs } = getXmlCalc()
        accessToken = sessionStorage.getItem(`Authorization${jqcs}`)
      }
      data = { code: 1, data: { accessToken } }
    } else if (sjlx === 'jsonS') {
      data = { code: 1, data: {}, message: '' }
    } else if (sjlx === 'jsonE') {
      data = { code: -1, data: null, message: '错误测试' }
    }
    this.responseText = data ? JSON.stringify(data) : str
  }
  calc(str?: string | null) {
    if (str && new RegExp(str).test(this.url)) {
      const v = Number(sessionStorage.getItem(str) || 0)
      sessionStorage.setItem(str, `${v + 1}`)
    }
  }
  onreadystatechange({ state, sjlx }: XMLData) {
    this.calc(XHR_JQ_URL)
    this.calc(sessionStorage.getItem('xhrUrl'))
    if (state == 'error') {
      this.status = 404
      this.onerror()
      return
    } else if (state === 'timeout') {
      this.ontimeout()
      return
    } else {
      this.status = 200
      this.getSjData(sjlx)
      this.onload()
    }
  }
  onload() {
  }
  onerror() {
  }
  ontimeout() {
  }
}
export function initXml(url: string) {
  sessionStorage.setItem('xhrUrl', url)
  sessionStorage.setItem('xhrJqUrl', XHR_JQ_URL)
  sessionStorage.setItem(url, '0')
  sessionStorage.setItem(XHR_JQ_URL, '0')
}
export function getXmlCalc(): any {
  const url = sessionStorage.getItem('xhrUrl') || ''
  return {
    [url]: sessionStorage.getItem(url),
    jqcs: sessionStorage.getItem(XHR_JQ_URL)
  }
}