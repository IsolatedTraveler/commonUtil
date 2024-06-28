import { DzpjKpConfig, DzpjKpIsPrint, DzpjKpParam } from "../../type"

// 首行内容
export var dzpjKpConfig: DzpjKpConfig = {}, dzpjKpSync: boolean, dzpjKpIsPrint: DzpjKpIsPrint, dzpjKpParam: DzpjKpParam = {}
export function setDzpjKpSync(a: boolean) {
  return dzpjKpSync = a
}
export function setDzpjKpIsPrint(a: DzpjKpIsPrint) {
  return dzpjKpIsPrint = a
}