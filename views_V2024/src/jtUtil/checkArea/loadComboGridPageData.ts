import { loadDataGrigPageData } from "./loadDataGrigPageData";

/**
 * @description 为Combogrid加载分页数据的函数
 * @param {string} gridObject Combogrid的选择器字符串
 * @param {string} url 数据请求的URL
 * @param {Object} param 加载数据所需参数，包括分页信息、搜索条件等
 */
export function loadComboGrigPageData(gridObject: string, url: string, param: any) {
  loadDataGrigPageData(gridObject, url, param, 'comboGrid')
}
