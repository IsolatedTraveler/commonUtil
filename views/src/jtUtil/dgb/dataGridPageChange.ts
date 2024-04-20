import { loadDataGrigPageData } from "../public/loadDataGrigPageData";

export function dataGridPageChange(gridObject: string, url: string, param: any) {
  try {
    var pager = $(gridObject).datagrid('getPager');
    $(pager).pagination({
      displayMsg: param.msg == ' ' ? param.msg : undefined,
      onBeforeRefresh: function () {
      },
      onRefresh: function (pageNumber: number, pageSize: number) {
        try {
          param.page = pageNumber;
          param.size = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onChangePageSize: function (pageSize: number) {
        try {
          param.page = 1;
          param.size = pageSize;
          $(gridObject).datagrid('options').pageSize = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      },
      onSelectPage: function (pageNumber: number, pageSize: number) {
        try {
          param.page = pageNumber;
          param.size = pageSize;
          loadDataGrigPageData(gridObject, url, param);
        } catch (e) {
          GLOBAL$BROWSER$.errorTrace(e);
        }
      }
    });
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}