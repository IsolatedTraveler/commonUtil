import { exeBuild } from "../fun"
import {outMl, ml} from '../var/layModule'
export function buildLayModule(version: string) {
  return exeBuild(version, outMl, ml, 'layModules')
}