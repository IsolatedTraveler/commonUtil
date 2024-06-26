import { judgeLoad } from "../var"
/**
 * 根据给定的类别和函数名，从第三方插件中执行函数。
 *
 * @async
 * @param {string} category - 目标第三方插件的类别。
 * @param {string} fun - 要调用的函数名称。
 * @param {any} param - 传递给第三方插件函数的参数。
 * 
 * @returns {Promise<any>} - 返回第三方插件执行结果的Promise，如果函数不存在则返回一个被拒绝的Promise。
 * 
 */
export function exeCategory(category: string, fun: string, param: any) {
  return (judgeLoad[category] as Promise<null>).then((jkcs) => {
    var res = window['jt_third_' + category as keyof Window]
    if (res && res[fun]) {
      return res[fun](param, jkcs)
    } else {
      return Promise.reject(new Error(`第三方插件未提供该方法${fun}`))
    }
  })
}