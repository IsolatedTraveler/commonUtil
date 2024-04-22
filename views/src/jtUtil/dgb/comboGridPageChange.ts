import { loadComboGrigPageData } from "./loadComboGridPageData";

export function comboGridPageChange(gridObject: any, url: any, q: any, param: any) {
  try {
    var pager = $(gridObject).combogrid('grid').datagrid('getPager');
    $(pager).pagination({
      displayMsg: '',
      onBeforeRefresh: function () {
      },
      onRefresh: function (pageNumber: number, pageSize: number) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSizeize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onChangePageSize: function (pageSize: number) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = 1;
            param.pageSize = pageSize;
            $(gridObject).combogrid('grid').datagrid("options").pageSize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onSelectPage: function (pageNumber: number, pageSize: number) {
        try {
          if (q != '' || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      }
    });
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}