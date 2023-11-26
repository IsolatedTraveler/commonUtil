// 开票来源   门诊 | 住院 | 挂号
export type KpLy = 'mz' | 'zy' | 'gh'
// 开票类型   开票 | 退票
export type KpLx = 'kp' | 'tp'
// 开票结算id
export type KpJsId = string
// 开票单位名称
export type KpDw = string
// 退票原因
export type KpTpMsg = string
// 开票单位类型，默认个人   个人 | 机构
export type KpDwLx = 1 | 2
export interface KpParam {
  jsid: KpJsId
  pjmc: KpDw
  kplx?: KpDwLx
  tpyy?: KpTpMsg
}