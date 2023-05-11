import { that } from "../var/init";

export function dataGridPageChange(gridObject, url, param) {
  try {
    var pager = $(gridObject).datagrid("getPager");
    $(pager).pagination({
      displayMsg: param.msg == " " ? param.msg : undefined,
      onBeforeRefresh: function () { },
      onRefresh: function (page, size) {
        try {
          param.page = page;
          param.size = size;
          that.loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelectPage: function (page, size) {
        try {
          param.page = page;
          param.size = size;
          that.loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
    });
  } catch (e) {
    JsErrorTrace(e);
  }
}
export function comboGridPageChange(gridObject, url, q, param) {
  try {
    var pager = $(gridObject).combogrid("grid").datagrid("getPager");
    $(pager).pagination({
      displayMsg: "",
      onBeforeRefresh: function () { },
      onRefresh: function (page, size) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.page = page;
            param.size = size;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onChangePageSize: function (size) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.page = 1;
            param.size = size;
            $(gridObject).combogrid("grid").datagrid("options").pageSize = size;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelectPage: function (page, size) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.page = page;
            param.size = size;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
    });
  } catch (e) {
    JsErrorTrace(e);
  }
}
export function loadComboGrigPageData(gridObject, url, params) {
  try {
    if (params.page) {
      var pager = $(gridObject).combogrid("grid").datagrid("getPager"); // get the pager of datagrid
      if (params.page != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.page,
        });
      }
    }
    var q = params.dm;
    if (q != "" || params.blanksearch || params.key || params.jsm) {
      var resData = that.commonHttppost(url, params).data;
      if (resData.total > 0) {
        $(gridObject).combogrid("setValue", q);
        $(gridObject).combogrid("grid").datagrid("loadData", { total: resData.total, rows: resData.list });
        $(gridObject).combogrid("showPanel");
        $(gridObject).combogrid("grid").datagrid("highlightRow", 0);
        //alert("showPanel");
      } else {
        $(gridObject).combogrid("grid").datagrid("loadData", []);
      }
    }
  } catch (e) {
    JsErrorTrace(e);
  }
}
