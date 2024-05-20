import { LayuiPage } from "./page"

export interface LayuiTableCol {

}
export interface LayuiTableRes {
  data:any[]
}
export interface LayuiTableParam {
  elem: string 
  cols: LayuiTableCol[][]
  id:string
  height?: string
  disabled?:boolean
  data?: any[]
  page?:LayuiPage|Boolean
  limit?: number
  limits?:number[]
  // 加载完成后执行的方法
  done?:(res: LayuiTableRes, curr:number, count:number)=>void
}