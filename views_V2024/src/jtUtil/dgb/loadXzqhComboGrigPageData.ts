import { getXzqh } from "./getXzqh";
/**
 * @description 根据参数加载Combogrid的数据并处理分页
 * @param {Object} gridObject Combogrid对象的jQuery引用
 * @param {Object} param 加载数据所需的参数对象，应包含dm(查询条件), pageNumber(当前页码), pageSize(每页大小)
 */

export function loadXzqhComboGrigPageData(gridObject: any, param: any) {
  try {
    gridObject = $(gridObject)
    const grid = gridObject.combogrid("grid");
    const pager = grid.datagrid('getPager');
    // 同步Combogrid的分页器页码
    if (param.pageNumber) {
      if (param.pageNumber !== pager.pageNumber) {
        pager.pagination({ pageNumber: param.pageNumber });
      }
    }
    const query = param.dm;
    if (query) {
      const { list, total } = getXzqh(query, param.pageNumber, param.pageSize);
      if (total > 0) {
        gridObject.combogrid('setValue', query);
        grid.datagrid('loadData', { total, rows: list });
        gridObject.combogrid('showPanel');
      } else {
        grid.datagrid('loadData', [])
      }
    }
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e);
  }
}