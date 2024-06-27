import { KpConfig, KpIsPrint, KpParam } from "../../type"

// 首行内容
export var kpConfig: KpConfig = {}, sync: boolean, isPrint: KpIsPrint, kpParam: KpParam = {}
export function setSync(a: boolean) {
  return sync = a
}
export function setIsPrint(a: KpIsPrint) {
  return isPrint = a
}