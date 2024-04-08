import { writeFile } from "./createFile"
import { firstUppers } from "./firstUpper"
import { renderModule } from "./renderModule"
import { getFileCode } from "./getFileCode"
import path from 'path'
import { date } from '../var/public'
import { fileExit, fileRead } from './readFile'
/**
* @description 
* @author 何波
* @date 2023-11-30 15:47:18
* @param {
  name: "组件名",
  src: "组件目录所在路径",
  version: "版本信息",
  grunt: grunt,
  printSrc: "输出路径"
} 
*/

export function getCode(
  name: string,
  src: string,
  version: string,
  printSrc: Array<string>,
  ly: string,
  { reName = '' }) {
  let moduleFile = path.resolve(src, name), moduleName = [reName, name].filter(it => it).join('_')
  reName = reName || name
  console.log(ly, moduleName)
  return renderModule(moduleFile, reName).then((back: any) => {
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return fileRead(wrap).then((wrap: string) => {
      return getFileCode(fileExit(moduleFile, 'index'), wrap).then((res: string) => {
        return Promise.all(printSrc.map(it => {
          let outFile = path.resolve(it, name + '.js'), Name = firstUppers(reName, true)
          return writeFile(outFile, res.replace(/@VERSION/g, version).replace(/@DATE/g, date)
            .replace(/w\.FIRSTMODULENAME/g, 'w.jt' + Name)
            .replace(/FIRSTMODULENAME/g, Name)
            .replace(/[ ]*\/\/ PLUGIN IGNORE START(\s|\S)+\/\/ PLUGIN IGNORE END\s/, '')
            .replace(/MODULENAME/g, reName)).catch(() => { }).then(() => {
              console.log(outFile)
            })
        })).then(() => {
          return back
        })
      }).catch((e: any) => {
        console.log(moduleName + ':Failed')
        return back
      })
    })
  }).then((back: any) => {
    if (back) {
      return writeFile(back.url, back.code).catch(() => { }).then(() => {
        console.log(moduleName + ':Finnsh')
      })
    } else {
      console.log(moduleName + ':Finnsh')
    }
  })
}
