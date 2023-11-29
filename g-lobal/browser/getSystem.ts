import { alertMsg } from "../layer";
import { system } from "../var";

export function getSystemVal(name: string, param: Array<any> | undefined = undefined) {
  if (system) {
    if (param) {
      return system[name](...param)
    } else {
      return system[name]()
    }
  } else {
    // 报错
    alertMsg("该方法依赖专有浏览器，请在专有浏览器中使用")
  }
}