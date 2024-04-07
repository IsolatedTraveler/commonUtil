import { exeBuild } from "../fun"
import {outMl, ml} from '../var/gModule'
export function buildModule(version: string) {
  return exeBuild(version, outMl, ml, 'gModules')
}