import { LayuiPage } from "./page"

export interface LayuiTableCol {

}
export interface LayuiTableRes {
  data: any[]
}
export interface LayuiTableParam {
  elem: string
  cols: LayuiTableCol[][]
  id: string
  height?: string
  disabled?: boolean
  data?: any[]
  page?: LayuiPage | boolean
  limit?: number
  limits?: number[]
  // 加载完成后执行的方法
  done?: (res: LayuiTableRes, curr: number, count: number) => void
}
export interface LayuiTablePage {
  limit?: number
  curr?: number
  count?: number
}
export interface LayuiTableReloadParam {
  height?: string | number
  data?: any[]
  count?: number
  page?: LayuiTablePage
}
export interface LayuiTable {
  on: (key: string, callBack: (rowData: any) => void) => void
  reload: (param: LayuiTableReloadParam) => void
}