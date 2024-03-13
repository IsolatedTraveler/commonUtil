import { judgeLoad } from "../var"

export function exeCategory(category: string, fun: string, param: any) {
  return (judgeLoad[category] as Promise<null>).then((jkcs) => {
    var res = w['jt_third_' + category as keyof Window]
    if (res && res[fun]) {
      return res[fun](param, jkcs)
    } else {
      return Promise.reject(new Error(`第三方插件未提供该方法${fun}`))
    }
  })
}