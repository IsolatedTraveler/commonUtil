import { LayuiTableParam } from "./layui"
export interface JtPage {
  page?: number
  size?: number
}
export interface JtTableParam extends LayuiTableParam {
  filter?: string
  // table当前页面唯一标识符
  name?: string
  // table当前页面关联Form表单
  select?: string
  cover?: LayuiTableParam
  getData?: (param: JtPage) => void
  // 行样式
  rowClass?: (row: any, i: number) => string
  click?: (row: any) => boolean
}
export interface JtTableData {
  list: any[]
  total: number
}