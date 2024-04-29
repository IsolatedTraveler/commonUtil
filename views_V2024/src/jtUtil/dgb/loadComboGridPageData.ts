/**
 * @description 为Combogrid加载分页数据的函数
 * @param {string} gridObject Combogrid的选择器字符串
 * @param {string} url 数据请求的URL
 * @param {Object} param 加载数据所需参数，包括分页信息、搜索条件等
 */
export function loadComboGrigPageData(gridObject: string, url: string, param: any) {
  try {
    const gridObj = $(gridObject)
    const grid = gridObj.combogrid("grid");
    const pager = grid.datagrid('getPager');
    // 同步Combogrid的分页器页码
    if (param.pageNumber) {
      if (param.pageNumber !== pager.pageNumber) {
        pager.pagination({ pageNumber: param.pageNumber });
      }
    }
    const query = param.dm;
    if (query || param.blanksearch || param.key || param.jsm) {
      const { list, total } =  GLOBAL$AJAX$.commonHttppost(url, param).data
      if (total> 0) {
        gridObj.combogrid('setValue', query);
        grid.datagrid('loadData', {total, rows: list});
        gridObj.combogrid('showPanel');
        grid.datagrid("highlightRow", 0)
      } else {
        grid.datagrid('loadData',[])
      }
    }
  } catch (e) {
    GLOBAL$LAYER$V2024$.alertMsg(e);
  }
}