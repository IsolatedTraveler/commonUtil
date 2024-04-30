import { gridPageChange } from "../fun";
/**
 * 处理组合网格（Combogrid）的分页变化事件，包括页面切换、每页显示数量改变及刷新。
 * @param {any} gridObject 组合网格对象的选择器或实例
 * @param {string} url 数据加载的API地址
 * @param {any} q 当前查询的关键字
 * @param {any} param 其他请求参数对象，包含如blanksearch等状态标识
 */
export function comboGridPageChange(gridObject: any, url: any, q: string, param: any) {
  try {
    const grid = $(gridObject)
    gridPageChange(grid, param, url, grid.combogrid('grid').datagrid('getPager'), 'comboGrid', q)
  } catch (e: any) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}