import { writeFile } from "./createFile"
import { firstUppers } from "./firstUpper"
import { renderModule } from "./renderModule"
import { getFileCode } from "./getFileCode"

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
const path = require('path')
const { date } = require('../var/public')
const { fileExit, fileRead } = require('./readFile')

export function getCode(name: string, src: string, version: string, printSrc: Array<string>, ly: string) {
  console.log(ly, name)
  let moduleFile = path.resolve(src, name)
  return renderModule(moduleFile, name).then((back: any) => {
    console.log(back.url)
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return fileRead(wrap).then((wrap: string) => {
      return getFileCode(fileExit(moduleFile, 'index'), wrap).then((res: string) => {
        return Promise.all(printSrc.map(it => {
          let outFile = path.resolve(it, name + '.js'), Name = firstUppers(name, true)
          return writeFile(outFile, res.replace(/@VERSION/g, version).replace(/@DATE/g, date)
            .replace(/w\.FIRSTMODULENAME/g, 'w.jt' + Name)
            .replace(/FIRSTMODULENAME/g, Name)
            .replace(/\/\/ PLUGIN IGNORE START(\s|\S)+\/\/ PLUGIN IGNORE END\s/, '')
            .replace(/MODULENAME/g, name)).catch(() => { }).then(() => {
              console.log(outFile)
            })
        })).then(() => {
          return back
        })
      }).catch((e: any) => {
        console.log(name + ':Failed')
        return back
      })
    })
  }).then((back: any) => {
    if (back) {
      return writeFile(back.url, back.code).catch(() => { }).then(() => {
        console.log(name + ':Finnsh')
      })
    } else {
      console.log(name + ':Finnsh')
    }
  })
}
