import { getXzqh } from "./getXzqh";

export function loadXzqhComboGrigPageData(gridObject: any, param: any) {
  try {
    if (param.pageNumber) {
      var pager = $(gridObject).combogrid("grid").datagrid('getPager');    // get the pager of datagrid
      if (param.pageNumber != pager.pageNumber) {
        pager.pagination({
          pageNumber: param.pageNumber
        });
      }
    }
    var q = param.dm;
    var pageNumber = param.pageNumber + "";
    var pageSize = param.pageSize + "";
    if (q != '') {
      const res = getXzqh(q, pageNumber, pageSize)
      if (res.total > 0) {
        res.rows = res.list
        $(gridObject).combogrid('setValue', q);
        $(gridObject).combogrid('grid').datagrid('loadData', res);
        $(gridObject).combogrid("showPanel");
      } else {
        $(gridObject).combogrid('grid').datagrid('loadData', []);
      }
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}