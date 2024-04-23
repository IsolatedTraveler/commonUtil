import { UrlType } from "../../url/type"

// 请求地址
export type AjaxRequestUrl = string
export type AjaxRequestType = 'GET' | 'POST'
export type AjaxRequestAsync = Boolean
export type AjaxRequestData = any
export type AjaxRequestParam = AjaxRequestData
export interface Result {
  message?: string
  i?: string | number | undefined
  code?: string | number
}
export type ajaxResposeData = any
export interface AjaxRequestHead {
  Authorization?: string
}
export interface AjaxRequestConfig {
  contentType?: string | boolean
  headers?: AjaxRequestHead
  processData?: boolean
}
export interface AjaxRequestOption {
  param?: AjaxRequestData
  isShowLoad?: Boolean // 是否显示遮罩层
  msg?: string // 错误提示信息
  isNotGetUser?: Boolean // 是否校验当前登录用户信息
  isNotWrapped?: Boolean // 是否将传入数据用data封装 false 封装  true  不封装
  urlType?: UrlType
  url?: string
  isBase64?: Boolean
  isPwd?: Boolean
  isJson?: Boolean
}

export type AjaxErrBack = undefined | Function
export type AjaxSuuBack = undefined | Function