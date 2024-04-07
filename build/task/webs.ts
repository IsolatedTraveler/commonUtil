import { exeBuild, getAllSonDir } from "../fun"
import path from 'path'
import { ml} from '../var/webs'
// function build(name: string, ml: string, version: string, outMl: Array<string>, ly: string, { module }: any) {
//   ml = path.resolve(ml, name)
//   outMl = outMl.map((it: string) => path.resolve(it, name))
//   return exeBuild(version, outMl, ml, name, { ly, reName: name, module })
// }
export function buildWebs(version: string) {
  return getAllSonDir(ml).then(res => {
    console.log(res)
  })
  // return exeBuild(version, outMl, ml, 'third', { fun: build })
}