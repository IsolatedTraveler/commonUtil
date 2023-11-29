
// 开票结算id
export type KpJsId = string
// 开票单位名称
export type KpDw = string
// 退票原因
export type KpTpMsg = string
// 开票单位类型，默认个人   个人 | 机构
export type KpDwLx = 1 | 2
export interface KpRquestParam {
  jsid: KpJsId
  pjmc: KpDw
  kplx?: KpDwLx
  tpyy?: KpTpMsg
}