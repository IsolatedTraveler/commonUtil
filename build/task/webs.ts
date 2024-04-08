import { buildModule } from "../../public"
import { buildModuleArr, getSpecifiedFileDir } from "../fun"
import { outMl, ml } from '../var/webs'
export function buildWebs(version: string) {
  return getSpecifiedFileDir(ml, buildModule.webs).then(res => {
    buildModuleArr(version, outMl, ml, res.map(it => it.replace(ml, '').replace(/^[\\\/]*/g, '')), 'webs', 'page')
  })
}