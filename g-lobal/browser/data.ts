import { getSystemVal } from "./base"

export function getBrowserParam(mkbh: any, name: any) {
  return JSON.parse(getSystemVal("varget", [mkbh as never, name as never]) || null)
}
export function setBrowserParam(mkbh: any, name: any, value: any) {
  return getSystemVal("varpost", [mkbh as never, name as never, JSON.stringify(value) as never])
}