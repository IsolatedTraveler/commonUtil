import { T_BODY } from "../var/const";
import { getTMain } from "./getTMain";

/**
 * 获取表格的tbody元素。
 * 
 * @param elem - 必需的JQuery对象，通常是table元素，用于确定从哪个表格获取tbody。
 * @param main - 可选的JQuery对象，代表主要的容器元素。如果未提供，则会调用`getTMain`函数来获取它。
 * @returns 返回包含tbody元素的JQuery对象。
 */
export function getTBody(elem: JQuery, main?: JQuery): JQuery {
  main = main || getTMain(elem)
  return main.find(T_BODY)
}