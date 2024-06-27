import { exeCategory, loadCategory } from "../fun";
import { judgeLoad } from "../var";
/**
 * 根据类别加载模块（如未加载）并执行指定函数。
 *
 * @param {string} category - 模块的类别。
 * @param {string} fun - 要在加载的模块上执行的函数名称。
 * @param {any} param - 传递给函数的参数。
 * @returns {*} - 执行函数后的返回值。
 */
export function loadFun(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = loadCategory(category)
  }
  return exeCategory(category, fun, param)
}