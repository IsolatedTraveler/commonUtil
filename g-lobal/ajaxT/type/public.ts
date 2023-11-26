// 请求地址
export type AjaxRequestUrl = string
export type AjaxRequestType = 'GET' | 'POST'
export type AjaxRequestAsync = Boolean
export type AjaxRequestData = any
export type AjaxRequestParam = AjaxRequestData
export interface ajaxResposeJudge {
  message: string
  i: string | number
}
export type ajaxResposeData = any
export type AjaxRequestConfig = any
export interface AjaxRequestOption {
  param?: AjaxRequestData
  isShowLoad?: Boolean // 是否显示遮罩层
  msg?: string // 错误提示信息
  isNotGetUser?: Boolean // 是否校验当前登录用户信息
}

export type AjaxErrBack = undefined | Function
export type AjaxSuuBack = undefined | Function