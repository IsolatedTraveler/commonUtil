import { GrigPage } from "../fun/grid/getPager";
import { loadDataGrigPageData } from "./loadDataGrigPageData";

/**
 * @description 为Combogrid控件加载分页数据的便捷函数
 * @param {string} gridSelector Combogrid控件的选择器字符串，用于定位Combogrid实例
 * @param {string} url 数据加载的API地址，用于获取Combogrid展示的数据源
 * @param {GrigPage} param 加载数据所需的参数，包括分页信息和搜索条件（如pageNumber, pageSize, dm等）
 * @return {void} 此函数直接作用于指定的Combogrid控件，不直接返回数据，而是更新Combogrid的展示内容和状态
 */
export function loadComboGrigPageData(gridObject: string, url: string, param: GrigPage) {
  // 调用loadDataGrigPageData函数并传递'comboGrid'作为控件类型
  loadDataGrigPageData(gridObject, url, param, 'comboGrid')
}
