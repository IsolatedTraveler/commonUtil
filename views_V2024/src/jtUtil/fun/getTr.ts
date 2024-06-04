import { getTBody } from "./getTBody";
/**
 * 从给定的JQuery元素或其内部的表格主体中找到具有指定索引的行元素。
 *
 * @param elem - 主JQuery对象，用于确定表格的位置。
 * @param i - 要查找的行元素的索引值。
 * @param [body] - 可选参数，已经找到的表格主体 (`tbody`) 的JQuery对象。如果未提供，将自动从 `elem` 中查找。
 * @returns 返回一个JQuery对象，该对象包含了与指定索引匹配的行元素。
 */
export function getTr(elem: JQuery, i: number, body?: JQuery): JQuery {
  body = body || getTBody(elem)
  return body.find('tr[data-index="' + i + '"]')
}