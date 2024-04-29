/**
 * @description 同步加载Grid控件分页数据的函数
 * @param {string} gridObject Grid控件的选择器字符串，用于定位到Grid
 * @param {string} url 数据加载的API地址
 * @param {Object} params 加载数据所需的参数，应包含分页信息等
 * @return {Promise<any>} 返回从服务器获取的数据列表Promise对象
 */
export function loadDataGrigPageData(gridObject: string, url: string, params: any) {
  try {
    // 获取并更新分页器的页码
    gridObject = $(gridObject)
    const pager = $(gridObject).datagrid('getPager');
    if (params.pageNumber != pager.pageNumber) {
      pager.pagination({ pageNumber: params.pageNumber });
    }
    // 显示加载状态
    $(gridObject).datagrid("loading");
    // 异步请求数据，使用await确保数据获取完成后再继续执行
    const res = GLOBAL$XHR$V2024$.commonHttppost(url, params);
    const resData = res.data.list;
    // 加载数据到datagrid
    $(gridObject).datagrid('loadData', resData);
    // 数据加载完毕后，模拟延迟隐藏加载状态（如果datagrid本身不自动处理）
    setTimeout(() => {
      $(gridObject).datagrid("loaded");
    }, 200);
    return resData;
  } catch (e) {
    GLOBAL$LAYER$V2024$.alertMsg(e);
  }
}