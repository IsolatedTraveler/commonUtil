import { getCode } from "../fun"
import { outMl, ml } from '../var/gModule'
export function buildModule(version: string, gn: string) {
  return getCode(gn, ml, version, outMl, 'gModules')
}