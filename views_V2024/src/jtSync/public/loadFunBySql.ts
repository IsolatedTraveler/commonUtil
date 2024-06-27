import { exeCategory, loadCategoryBySql } from "../fun";
import { initJtSync, judgeLoad } from "../var";
/**
 * 根据SQL方式按类别加载模块（首次加载时执行）并执行指定函数。
 *
 * @param {string} category - 模块的分类标识。
 * @param {string} fun - 在加载模块中待执行的方法名。
 * @param {*} param - 传递给方法的参数。
 * @returns {Promise<*>} - 执行方法后的返回结果，可能为Promise.resolve的数据或Promise.reject的错误。
 */
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