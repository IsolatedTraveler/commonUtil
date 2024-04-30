/**
 * @description 根据参数加载Combogrid的数据并处理分页
 * @param {Object} gridObject Combogrid对象的jQuery引用
 * @param {Object} param 加载数据所需的参数对象，应包含dm(查询条件), pageNumber(当前页码), pageSize(每页大小)
 */

import { loadDataGrigPageData } from "./loadDataGrigPageData";

export function loadXzqhComboGrigPageData(gridObject: any, param: any) {
  loadDataGrigPageData(gridObject, GLOBAL$COMMON$.XZQHURL, param, 'comboGrid')
}