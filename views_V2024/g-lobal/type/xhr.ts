import { UrlType } from "./url"
export type AjaxRequestType = 'GET' | 'POST'
export interface AjaxRequestConfig {
  contentType?: string | boolean
  headers?: any
  processData?: boolean
}
export interface AjaxRequestOption {
  param?: any
  isShowLoad?: Boolean // 是否显示遮罩层
  msg?: string // 错误提示信息
  isNotGetUser?: Boolean // 是否校验当前登录用户信息
  isNotWrapped?: Boolean // 是否将传入数据用data封装 false 封装  true  不封装
  isCheck?: Boolean // 是否进行权限校验
  urlType?: UrlType
  url?: string
  isBase64?: Boolean
  isPwd?: Boolean
  isJson?: Boolean
}
export interface XhrRes {
  code: 1 | number
  message: string
  data: {
    list: any[]
    total: number
    accessToken: string
  }
}
export interface XhrAuthParam {
  isCheck?: Boolean
  reset?: Boolean
}