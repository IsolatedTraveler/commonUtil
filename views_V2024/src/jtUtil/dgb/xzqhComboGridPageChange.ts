import { gridPageChange } from "../fun";
import { loadXzqhComboGrigPageData } from "./loadXzqhComboGrigPageData";
/**
 * @description 处理Combogrid网格分页变化事件的函数
 * @param {Object} gridObject Combogrid对象的jQuery引用
 * @param {Object} param 加载数据所需的参数对象，应包含pageNumber和pageSize属性
 */
export function xzqhComboGridPageChange(gridObject: Object, param: any) {
  try {
    const grid = $(gridObject)
    gridPageChange(grid, param, GLOBAL$COMMON$.XZQHURL, grid.combogrid('grid').datagrid('getPager'), 'xzqh')
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}