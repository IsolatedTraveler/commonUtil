import { loadXzqhComboGrigPageData } from "./loadXzqhComboGrigPageData";

export function xzqhComboGridPageChange(gridObject: any, param: any) {
  try {
    var pager = $(gridObject).combogrid('grid').datagrid('getPager');
    $(pager).pagination({
      displayMsg: '',
      onBeforeRefresh: function () {
      },
      onRefresh: function (pageNumber: any, pageSize: any) {
        try {
          param.pageNumber = pageNumber;
          param.pageSize = pageSize;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onChangePageSize: function (pageSize: any) {
        try {
          param.pageNumber = 1;
          param.pageSize = pageSize;
          $(gridObject).combogrid('grid').datagrid("options").pageSize = pageSize;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onSelectPage: function (pageNumber: any, pageSize: any) {
        try {
          param.pageNumber = pageNumber;
          param.pageSize = pageSize;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      }
    });
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}