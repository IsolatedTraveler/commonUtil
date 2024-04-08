import { alertMsg } from "../../../layer/public/alert"
import { system } from "../../var"
import { setJtPhisSystem } from "../../var/global"
export function getJtPhisSystem() {
  let systemV = w.jthisJsObject || w.wdphisJsObject
  if (systemV) {
    setJtPhisSystem(systemV.jthis || systemV.wdphis)
  }
}
export function getSystemVal(name: string, param: Array<any> | undefined = undefined) {
  if (system) {
    if (system[name]) {
      if (param) {
        return system[name](...param)
      } else {
        return system[name]()
      }
    } else {
      alertMsg(`当前浏览器未定义该方法（${name}），请联系厂家提供技术支持`)
    }
  } else {
    // 报错
    alertMsg("该方法依赖专有浏览器，请在专有浏览器中使用")
  }
}