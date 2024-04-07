import { buildModule } from "../../public"
import { buildModuleArr, getSpecifiedFileDir } from "../fun"
import { outMl,ml} from '../var/webs'
// function build(name: string, ml: string, version: string, outMl: Array<string>, ly: string, { module }: any) {
//   ml = path.resolve(ml, name)
//   outMl = outMl.map((it: string) => path.resolve(it, name))
//   return exeBuild(version, outMl, ml, name, { ly, reName: name, module })
// }
export function buildWebs(version: string) {
  return getSpecifiedFileDir(ml, buildModule.webs).then(res => {
    buildModuleArr(version, outMl, ml, res.map(it => it.replace(ml, '').replace(/^[\\\/]*/g, '')), 'webs', 'web')
  })
  // return exeBuild(version, outMl, ml, 'third', { fun: build })
}