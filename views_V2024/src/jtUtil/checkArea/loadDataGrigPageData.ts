
export interface GrigPage {
  pageNumber: number
  pageSize: number
  blanksearch?: string
  dm?: string
}
export type DataGridLy = 'grid' | 'comboGrid'
function getPager(gridObject: any, pageNumber: number, ly: DataGridLy) {
  const gridObj = $(gridObject), grid = ly === 'comboGrid' ? gridObj.combogrid("grid") : gridObj
    , pager = grid.datagrid('getPager')
  if (pageNumber && pageNumber !== pager.pageNumber) {
    pager.pagination({ pageNumber });
  }
  return {
    gridObj,
    grid
  }
}
/**
 * @description 同步加载Grid控件分页数据的函数
 * @param {string} gridObject Grid控件的选择器字符串，用于定位到Grid
 * @param {string} url 数据加载的API地址
 * @param {Object} param 加载数据所需的参数，应包含分页信息等
 * @return {Promise<any>} 返回从服务器获取的数据列表Promise对象
 */
export function loadDataGrigPageData(gridObject: any, url: string, param: GrigPage, ly: DataGridLy = 'grid') {
  try {
    const { gridObj, grid } = getPager(gridObject, param.pageNumber, ly)

    // 显示加载状态
    grid.datagrid("loading");
    // 异步请求数据，使用await确保数据获取完成后再继续执行
    const { total, list = [] } = GLOBAL$XHR$V2024$.commonHttppost(url, param).data || {};
    // 加载数据到datagrid
    if (ly === 'comboGrid') {
      if (total > 0) {
        gridObj.combogrid('setValue', param.dm);
        grid.datagrid('loadData', { total, rows: list });
        gridObj.combogrid('showPanel');
        grid.datagrid("highlightRow", 0)
      } else {
        grid.datagrid('loadData', [])
      }
    } else {
      grid.datagrid('loadData', list);
    }
    // 数据加载完毕后，模拟延迟隐藏加载状态（如果datagrid本身不自动处理）
    setTimeout(() => {
      grid.datagrid("loaded");
    }, 200);
    return list;
  } catch (e) {
    GLOBAL$COMMON$V2024$.alertMsg(e);
  }
}
