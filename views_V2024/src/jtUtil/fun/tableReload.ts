import { LayuiTableReloadParam } from "../type";
/**
 * 重新加载表格数据的配置函数。
 * 
 * 此函数用于生成传递给 Layui 表格重载方法的参数对象，根据给定的数据、总数、每页数量、高度、父元素以及分页信息来配置。
 * 
 * @param data - 用于填充表格的数据数组。
 * @param count - 数据总条数。
 * @param page - 分页信息对象，包含当前页码和每页大小等（可选）。
 * @returns 返回一个符合 Layui 表格重载参数格式的对象。
 */
export function tableReload(
  data: any[] = []
  , count?: number
  , page?: any): LayuiTableReloadParam {
  let val: LayuiTableReloadParam = {
    data: data || [],
    count
  }
  if (page) {
    val.page = { count, curr: page.page, limit: (page.size || 20) }
  }
  return val
}