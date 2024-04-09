import { buildModule } from "../../public"
import { buildModuleArr, getSpecifiedFileDir, writeFile } from "../fun"
import { outMl, ml, out } from '../var/webs'
import path from 'path'
const reg = /^(his)[\/\\]/
export function buildWebs(version: string) {
  return getSpecifiedFileDir(ml, buildModule.webs).then(res => {
    buildModuleArr(version, outMl, ml, res.map(it => it.replace(ml, '').replace(/^[\\\/]*/g, '')), 'webs', {
      reName: 'page',
      outAddName: '-his'
    }).then(res => {
      return Promise.resolve(res.map(({ code, url }) => {
        if (reg.test(url)) {
          return Promise.resolve(out.map(ml => {
            const file = path.resolve(path.resolve(ml, '../../webs'), url.replace(reg, ''))
            return writeFile(file, code).catch(() => { }).then(() => {
              console.log(file)
            })
          }))
        }
        return Promise.resolve()
      }))
    })
  })
}