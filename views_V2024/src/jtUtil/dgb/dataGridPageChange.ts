import { loadDataGrigPageData } from "../public/loadDataGrigPageData";
/**
 * 处理组合网格（Combogrid）的分页变化事件，包括页面切换、每页显示数量改变及刷新。
 * @param {any} gridObject 组合网格对象的选择器或实例
 * @param {string} url 数据加载的API地址
 * @param {any} q 当前查询的关键字
 * @param {any} param 其他请求参数对象，包含如blanksearch等状态标识
 */
export function dataGridPageChange(gridObject: string, url: string, param: any) {
  try {
    var pager = $(gridObject).datagrid('getPager');
    const reloadData = (pageNumber: number, pageSize: number) => {
      try {
        param.pageNumber = pageNumber;
        param.pageSize = pageSize;
        loadDataGrigPageData(gridObject, url, param);
      } catch (e) {
        GLOBAL$LAYER$V2024$.alertMsg(e);
      }
    }
    $(pager).pagination({
      displayMsg: '',
      onRefresh: reloadData,
      onChangePageSize:  (pageSize: number) => reloadData(1, pageSize),
      onSelectPage: reloadData
    });
  } catch (e) {
    GLOBAL$BROWSER$.errorTrace(e);
  }
}