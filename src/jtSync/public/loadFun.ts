import { loadCategory } from "../fun";
import { judgeLoad } from "../var";

export function loadFun(category: string, fun: string, param: any) {
  if (!judgeLoad[category]) {
    judgeLoad[category] = loadCategory(category)
  }
  return judgeLoad[category].then(res => {
    if (res.fun) {
      res.fun(param)
    } else {
      return Promise.reject(new Error(`第三方插件未提供该方法${fun}`))
    }
  })
}