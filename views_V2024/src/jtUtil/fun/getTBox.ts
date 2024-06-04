import { T_BOX } from "../var";
/**
 * 获取给定元素中的特定子元素，这些子元素具有预定义的选择器 `T_BOX`.
 *
 * @param elem - 需要从中查找子元素的JQuery对象.
 * @returns 返回一个JQuery对象，包含了所有匹配选择器 `T_BOX` 的子元素.
 */
export function getTBox(elem: JQuery): JQuery {
  return elem.find(T_BOX)
}