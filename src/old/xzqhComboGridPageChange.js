import { that } from "../var/init";

export function xzqhComboGridPageChange(gridObject, param) {
  
  var pager = $(gridObject).combogrid("grid").datagrid("getPager");
  $(pager).pagination({
    displayMsg: "",
    onBeforeRefresh: function () {},
    onRefresh: function (pageNumber, pageSize) {
      try {
        param.pageNumber = pageNumber;
        param.pageSize = pageSize;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    onChangePageSize: function (pageSize) {
      try {
        param.pageNumber = 1;
        param.pageSize = pageSize;
        $(gridObject).combogrid("grid").datagrid("options").pageSize =
          pageSize;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
    onSelectPage: function (pageNumber, pageSize) {
      try {
        param.pageNumber = pageNumber;
        param.pageSize = pageSize;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        JsErrorTrace(e);
      }
    },
  });
}
export function loadXzqhComboGrigPageData(gridObject, params) {
  if (params.pageNumber) {
    var pager = $(gridObject).combogrid("grid").datagrid("getPager"); // get the pager of datagrid
    if (params.pageNumber != pager.pageNumber) {
      pager.pagination({
        pageNumber: params.pageNumber,
      });
    }
  }
  var q = params.dm;
  var pageNumber = params.pageNumber + "";
  var pageSize = params.pageSize + "";
  if (q != "") {
    var resultData = getXzqh(q, pageNumber, pageSize);
    if (resultData.total > 0) {
      $(gridObject).combogrid("setValue", q);
      $(gridObject).combogrid("grid").datagrid("loadData", resultData);
      $(gridObject).combogrid("showPanel");
    } else {
      $(gridObject).combogrid("grid").datagrid("loadData", []);
    }
  }
}
export function getXzqh(jsm, pageNumber, pageSize) {
  var data = that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {jsm, pageNumber, pageSize}).data || {}
  return {
    total: data.total,
    rows: data.list
  }
}
