import { T_BODY } from "../var/const";
import { getTMain } from "./getTMain";

// 获取layUi.table渲染后的主体表格
export function getTBody(elem: JQuery, main: JQuery = getTMain(elem)): JQuery {
  return main.find(T_BODY)
}