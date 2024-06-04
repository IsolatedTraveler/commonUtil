import { ajaxPost, alertMsg } from "../../../../g-lobal";
import { DataGridLy, GrigPage } from "../../type/grid";
import { getPager } from "../fun/getPager";

/**
 * @description 同步加载Grid或Combogrid控件的分页数据
 * @param {string} gridSelector Grid或Combogrid的选择器字符串
 * @param {string} url 数据加载的API地址
 * @param {GrigPage} param 加载数据所需的参数，包含分页信息等
 * @param {DataGridLy} ly 控件类型，默认为grid
 * @return {Array} 返回从服务器获取的数据列表。如果请求失败或无数据，返回空数组
 */
export function loadDataGrigPageData(gridObject: any, url: string, param: GrigPage, ly: DataGridLy = 'grid') {
  try {
    const { gridObj, grid } = getPager(gridObject, param.pageNumber, ly)
    // 显示加载状态
    grid.datagrid("loading");
    // 异步请求数据，使用await确保数据获取完成后再继续执行
    return ajaxPost(url, param).then(({ data: { total, list = [] } }) => {
      grid.datagrid('loadData', total ? { total, rows: list } : []);
      // 加载数据到datagrid
      if (total > 0 && (ly === 'comboGrid' || ly === 'xzqh')) {
        gridObj.combogrid('setValue', param.dm || param.jsm);
        gridObj.combogrid('showPanel');
        if (ly === 'comboGrid') {
          grid.datagrid("highlightRow", 0);
        }
      }
      // 数据加载完毕后，模拟延迟隐藏加载状态（如果datagrid本身不自动处理）
      grid.datagrid("loaded");
      return list;
    })
  } catch (e) {
    alertMsg(e);
    return Promise.resolve()
  }
}