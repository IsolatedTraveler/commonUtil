import { AjaxRequestType, session } from "../views_V2024/g-lobal";
import { XHR_JQ_URL, CONFIG_URL } from "../views_V2024/g-lobal/common/main";
import { config } from "./config";
type XMLSjlx = 'string' | 'jsonS' | 'jsonE' | 'session'
export interface XMLData {
  state: 'success' | 'error' | 'timeout' | 'xhrError'
  sjlx: XMLSjlx
  data?: XMLData
}
export const XML_ERROR_DATA = { "code": -1, "data": null, "message": "请求失败：网络错误" }
export const XML_TIMEOUT_DATA = { "code": -1, "data": null, "message": "请求失败：网络连接超时" }
export const XML_XHR_ERROR_DATA = { "code": -1, "data": null, "message": "请求过程中发生错误：请求过程报错" }
export const XML_JSON_E_DATA = { code: -1, message: "错误测试", data: null }
export const XML_JSON_S_DATA = { code: 1, message: undefined, data: {} }
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
  send(data: XMLData | string) {
    try {
      if (typeof data === 'string') {
        data = JSON.parse(data) as XMLData
      }
    } catch (e) {
      // 
    }
    if ((data as XMLData).state === 'xhrError') {
      throw '请求过程报错'
    }
    if (this.async) {
      setTimeout(() => {
        this.onreadystatechange(data as XMLData);
      }, 0);
    } else {
      this.onreadystatechange(data as XMLData)
    }
  }
  private getSjData(sjlx: XMLSjlx) {
    var data, str = 'success'
    if (new RegExp(XHR_JQ_URL).test(this.url)) {
      const { jqcs } = getXmlCalc()
      var accessToken
      if (jqcs) {
        accessToken = sessionStorage.getItem(`Authorization${jqcs}`)
      }
      if (!accessToken) {
        accessToken = sessionStorage.getItem('Authorization')
      }
      data = { code: 1, data: { accessToken } }
    } else if (sjlx === 'jsonS') {
      data = { code: 1, data: {}, message: '' }
    } else if (sjlx === 'jsonE') {
      data = { code: -1, data: null, message: '错误测试' }
    } else if (sjlx === 'session' || sessionStorage.getItem('xml') === 'session') {
      const url = sessionStorage.getItem('xhrUrl') || ''
      const i = sessionStorage.getItem(url)
      data = JSON.parse(sessionStorage.getItem('session' + i) as string)
    } else if (sjlx === 'string') {
      str = 'success'
    } else if (new RegExp(CONFIG_URL).test(this.url)) {
      data = config
    } else {
      const url = sessionStorage.getItem('xhrUrl') || ''
      const i = sessionStorage.getItem(url)
      data = JSON.parse(sessionStorage.getItem('session' + i) as string)
    }
    this.responseText = data ? JSON.stringify(data) : str
  }
  calc(str?: string | null) {
    if (str && new RegExp(str).test(this.url)) {
      const v = Number(sessionStorage.getItem(str) || 0)
      sessionStorage.setItem(str, `${v + 1}`)
      sessionStorage.setItem(str + '-header', JSON.stringify(this.requestHeaders))
    }
  }
  onreadystatechange({ state, sjlx, data }: XMLData) {
    if (data) {
      state = state || data.state
      sjlx = sjlx || data.sjlx
    }
    this.calc(XHR_JQ_URL)
    this.calc(sessionStorage.getItem('xhrUrl'))
    const stateV = sessionStorage.getItem('state')
    if (state == 'error' || stateV === 'error') {
      this.status = 404
      this.onerror()
      return
    } else if (state === 'timeout' || stateV === 'timeout') {
      this.ontimeout()
      return
    } else {
      this.status = 200
      this.getSjData(sjlx)
      this.onload()
    }
    if (stateV) {
      sessionStorage.removeItem('state')
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
  session('userinfo', { ryxx: {} })
  sessionStorage.setItem('xhrUrl', url)
  sessionStorage.setItem('xhrJqUrl', XHR_JQ_URL)
  sessionStorage.setItem(url, '0')
  sessionStorage.setItem(XHR_JQ_URL, '0')
  sessionStorage.removeItem(url + '-header')
  sessionStorage.removeItem(XHR_JQ_URL + '-header')
}
export function getXmlCalc(): any {
  const url = sessionStorage.getItem('xhrUrl') || ''
  return {
    xhrUrl: sessionStorage.getItem(url),
    jqcs: sessionStorage.getItem(XHR_JQ_URL),
    head: sessionStorage.getItem(url + '-header'),
    jqHead: sessionStorage.getItem(XHR_JQ_URL + '-header')
  }
}
export function setXmlRes(data: any[]) {
  data.forEach((it, i) => {
    sessionStorage.setItem('session' + (i + 1), JSON.stringify(it))
  })
}
export function setXmlResMagicFormat(data: any[]) {
  data.forEach((it, i) => {
    sessionStorage.setItem('session' + (i + 1), JSON.stringify({ code: 1, data: { list: it }, message: 'cs' }))
  })
}