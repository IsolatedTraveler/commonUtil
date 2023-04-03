import { that } from "../var/init";

export function loadDataGrigPageData(gridObject, url, params) {
  try {
    $(gridObject).datagrid("loading");
    var resData = that.commonHttppost(url, params).data;
    if (resData && resData.list) {
      $(gridObject).datagrid("loadData", {total: resData.total, rows: resData.list});
    } else {
      $(gridObject).datagrid("loadData", resData || []);
    }
    setTimeout(function () {
      $(gridObject).datagrid("loaded");
    }, 200);
    return resData;
  } catch (e) {
    JsErrorTrace(e);
  }
}
