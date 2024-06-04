import { T_MAIN } from "../var";
import { getTBox } from "./getTBox";
/**
 * 从给定的JQuery元素或其包含的T_BOX元素中找到具有预定义选择器 `T_MAIN` 的子元素。
 *
 * @param elem - 主JQuery对象，用于搜索 `T_MAIN` 元素。
 * @param [box] - 可选参数，已经找到的 `T_BOX` JQuery对象。如果未提供，则会自动搜索。
 * @returns 返回一个JQuery对象，包含了所有匹配选择器 `T_MAIN` 的子元素。
 */
export function getTMain(elem: JQuery, box?: JQuery): JQuery {
  box = box || getTBox(elem)
  return box.find(T_MAIN)
}