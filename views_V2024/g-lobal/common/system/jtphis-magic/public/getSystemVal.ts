import { alertMsg } from "../../../pop"
import { SYSTEM } from "../var"

export function getSystemVal(name: string, param: Array<any> | undefined = undefined) {
  if (SYSTEM) {
    if (SYSTEM[name]) {
      if (param) {
        return SYSTEM[name](...param)
      } else {
        return SYSTEM[name]()
      }
    } else {
      alertMsg(`当前浏览器未定义该方法（${name}），请联系厂家提供技术支持`)
    }
  } else {
    // 报错
    alertMsg("该方法依赖专有浏览器，请在专有浏览器中使用", name)
  }
}