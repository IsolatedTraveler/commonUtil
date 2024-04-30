import { loadXzqhComboGrigPageData } from "./loadXzqhComboGrigPageData";
/**
 * @description 处理Combogrid网格分页变化事件的函数
 * @param {Object} gridObject Combogrid对象的jQuery引用
 * @param {Object} param 加载数据所需的参数对象，应包含pageNumber和pageSize属性
 */
export function xzqhComboGridPageChange(gridObject: Object, param: any) {
  try {
    var pager = $(gridObject).combogrid('grid').datagrid('getPager');
    const reloadData = (pageNumber: number, pageSize: number) => {
      try {
        param.pageNumber = pageNumber;
        param.pageSize = pageSize;
        loadXzqhComboGrigPageData(gridObject, param);
      } catch (e) {
        GLOBAL$COMMON$V2024$.alertMsg(e);
      }
    }
    $(pager).pagination({
      displayMsg: '',
      onRefresh: reloadData,
      onChangePageSize: (pageSize: number) => reloadData(1, pageSize),
      onSelectPage: reloadData
    });
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e)
  }
}