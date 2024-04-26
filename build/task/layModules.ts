import { getCode } from "../fun"
import { outMl, ml } from '../var/layModule'
export function buildLayModule(version: string, gn: string) {
  return getCode(gn, ml, version, outMl, 'layModules')
}