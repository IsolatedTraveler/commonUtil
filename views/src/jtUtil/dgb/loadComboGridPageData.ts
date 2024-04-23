export function loadComboGrigPageData(gridObject: string, url: string, params: any) {
  try {
    if (params.pageNumber) {
      var pager = $(gridObject).combogrid("grid").datagrid('getPager');    // get the pager of datagrid
      if (params.pageNumber != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.pageNumber
        });
      }
    }
    var q = params.dm;
    if (q != '' || params.blanksearch || params.key || params.jsm) {
      var resData = GLOBAL$AJAX$.commonHttppost(url, params).data;
      if (resData.total > 0) {
        resData.rows = resData.list
        $(gridObject).combogrid('setValue', q);
        $(gridObject).combogrid('grid').datagrid('loadData', resData);
        $(gridObject).combogrid("showPanel");
        $(gridObject).combogrid('grid').datagrid("highlightRow", 0);
        //alert("showPanel");
      } else {
        $(gridObject).combogrid('grid').datagrid('loadData', []);
      }
    }
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}