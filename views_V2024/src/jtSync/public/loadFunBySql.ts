import { exeCategory, loadCategoryBySql } from "../fun";
import { initJtSync, judgeLoad } from "../var";
export function loadFunBySql(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = initJtSync().then(() => {
      return loadCategoryBySql(category).catch(res => {
        judgeLoad[category] = null
        return Promise.reject(res)
      })
    })
  }
  return exeCategory(category, fun, param)
}