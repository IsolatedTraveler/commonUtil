import { tempData } from "../../temp/tempData"
import { system } from "../var"

export function getBrowserParam(mkbh: any, name: any) {
  if (system) {
    return JSON.parse(system.varget(mkbh, name) || null)
  } else {
    return tempData(`bro-${mkbh}-${name}`, undefined, sessionStorage)
  }
}
export function setBrowserParam(mkbh: any, name: any, value: any = undefined) {
  if (system) {
    return system.varpost(mkbh, name, JSON.stringify(value))
  } else {
    return tempData(`bro-${mkbh}-${name}`, value, sessionStorage)
  }
}