
export function xzqhComboGridPageChange(gridObject, param) {

  var pager = $(gridObject).combogrid("grid").datagrid("getPager");
  $(pager).pagination({
    displayMsg: "",
    onBeforeRefresh: function () { },
    onRefresh: function (page, size) {
      try {
        param.page = page;
        param.size = size;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    onChangePageSize: function (size) {
      try {
        param.page = 1;
        param.size = size;
        $(gridObject).combogrid("grid").datagrid("options").pageSize = size;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    onSelectPage: function (page, size) {
      try {
        param.page = page;
        param.size = size;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
  });
}
export function loadXzqhComboGrigPageData(gridObject, params) {
  if (params.page) {
    var pager = $(gridObject).combogrid("grid").datagrid("getPager"); // get the pager of datagrid
    if (params.page != pager.pageNumber) {
      pager.pagination({
        pageNumber: params.page,
      });
    }
  }
  var q = params.dm;
  var page = params.page + "";
  var size = params.size + "";
  if (q != "") {
    var resultData = getXzqh(q, page, size);
    if (resultData.total > 0) {
      $(gridObject).combogrid("setValue", q);
      $(gridObject).combogrid("grid").datagrid("loadData", resultData);
      $(gridObject).combogrid("showPanel");
    } else {
      $(gridObject).combogrid("grid").datagrid("loadData", []);
    }
  }
}
export function getXzqh(jsm, page, size) {
  var data = that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', { jsm, page, size }).data || {}
  return {
    total: data.total,
    rows: data.list
  }
}
