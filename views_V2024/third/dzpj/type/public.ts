
// 开票结算id
export type DzPjKpJsId = string
// 开票单位名称
export type DzPjKpDw = string
// 退票原因
export type DzPjKpTpMsg = string
// 开票单位类型，默认个人   个人 | 机构
export type DzPjKpDwLx = 1 | 2
export interface DzPjKpRquestParam {
  jsid: DzPjKpJsId
  pjmc: DzPjKpDw
  kplx?: DzPjKpDwLx
  tpyy?: DzPjKpTpMsg
}
// 开票来源   门诊 | 住院 | 挂号 | 门特
export type DzPjKpLy = 'mz' | 'zy' | 'gh' | 'mt'
// 开票类型   开票 | 退票
export type DzPjKpLx = 'kp' | 'tp'
export interface DzPjKpPzCs {
  url: string,
  bbid?: string
}
export type DzPjKpPzLx = {
  [index in DzPjKpLy]: DzPjKpPzCs
}
export type DzPjKpPz = {
  [index in DzPjKpLx]: DzPjKpPzLx
}