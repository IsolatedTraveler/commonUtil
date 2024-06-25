import { exeCategory, loadCategory } from "../fun";
import { judgeLoad } from "../var";

export function loadFun(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = loadCategory(category)
  }
  return exeCategory(category, fun, param)
}