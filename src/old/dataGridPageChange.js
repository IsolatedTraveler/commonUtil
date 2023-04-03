import { that } from "../var/init";

export function dataGridPageChange(gridObject, url, param) {
  try {
    var pager = $(gridObject).datagrid("getPager");
    $(pager).pagination({
      displayMsg: param.msg == " " ? param.msg : undefined,
      onBeforeRefresh: function () {},
      onRefresh: function (pageNumber, pageSize) {
        try {
          param.pageNumber = pageNumber;
          param.pageSize = pageSize;
          that.loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      // onChangePageSize: function (pageSize) {
      //   try {
      //     param.pageNumber = 1;
      //     param.pageSize = pageSize;
      //     $(gridObject).datagrid("options").pageSize = pageSize;
      //     that.loadDataGrigPageData(gridObject, url, param);
      //   } catch (e) {
      //     JsErrorTrace(e);
      //   }
      // },
      onSelectPage: function (pageNumber, pageSize) {
        try {
          param.page = pageNumber;
          param.size = pageSize;
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
      onBeforeRefresh: function () {},
      onRefresh: function (pageNumber, pageSize) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSizeize = pageSize;
            loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onChangePageSize: function (pageSize) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.pageNumber = 1;
            param.pageSize = pageSize;
            $(gridObject).combogrid("grid").datagrid("options").pageSize =
              pageSize;
              loadComboGrigPageData(gridObject, url, param);
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelectPage: function (pageNumber, pageSize) {
        try {
          if (q != "" || param.blanksearch) {
            param.dm = q;
            param.pageNumber = pageNumber;
            param.pageSize = pageSize;
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
    if (params.pageNumber) {
      var pager = $(gridObject).combogrid("grid").datagrid("getPager"); // get the pager of datagrid
      if (params.pageNumber != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.pageNumber,
        });
      }
    }
    var q = params.dm;
    if (q != "" || params.blanksearch || params.key || params.jsm) {
      var resData = that.commonHttppost(url, params).data;
      if (resData.total > 0) {
        $(gridObject).combogrid("setValue", q);
        $(gridObject).combogrid("grid").datagrid("loadData", {total: resData.total, rows: resData.list});
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
