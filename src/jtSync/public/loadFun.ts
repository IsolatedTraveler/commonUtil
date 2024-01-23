import { exeCategory, loadCategory, loadCategoryBySql } from "../fun";
import { judgeLoad } from "../var";

export function loadFun(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = loadCategory(category)
  }
  return exeCategory(category, fun, param)
}
export function loadFunBySql(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = loadCategoryBySql(category).catch(res => {
      judgeLoad[category] = null
      return Promise.reject(res)
    })
  }
  return exeCategory(category, fun, param)
}