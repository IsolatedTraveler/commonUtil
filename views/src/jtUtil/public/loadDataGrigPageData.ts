export function loadDataGrigPageData(gridObject: string, url: string, params: any) {
  try {
    if (params.page) {
      var pager = $(gridObject).datagrid('getPager');     // get the pager of datagrid
      if (params.page != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.page
        });
      }
    }
    $(gridObject).datagrid("loading");
    var resData = GLOBAL$AJAX$.commonHttppost(url, params).data.list;
    $(gridObject).datagrid('loadData', resData);
    setTimeout(function () {
      $(gridObject).datagrid("loaded");
    }, 200);
    return resData;
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}