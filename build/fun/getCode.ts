import { writeFile } from "./createFile"
import { firstUppers } from "./firstUpper"
import { renderModule } from "./renderModule"
import { getFileCode } from "./getFileCode"
import path from 'path'
import * as Terser from 'terser'
import { date } from '../var/public'
import { fileExit, fileRead } from './readFile'
import { qdzs, sfys } from "../../public"
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
function dealCode(code: string) {
  if (sfys || qdzs) {
    return Terser.minify(code, {
      mangle: false,
      compress: sfys,
      output: {
        comments: qdzs
      }
    }).then(({ code }) => code || '')
  } else {
    return Promise.resolve(code)
  }
}
export function getCode(
  name: string,
  src: string,
  version: string,
  printSrc: Array<string>,
  ly: string,
  { reName = '', outAddName = '', fileName = '' } = {} as any) {
  let moduleFile = path.resolve(src, name), moduleName = [reName, name].filter(it => it).join('_'), code: string = ''
    , outName = (fileName || name) + outAddName + '.js'
  reName = reName || name
  console.log(ly, moduleName)
  return renderModule(moduleFile, reName).then((back: any) => {
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return fileRead(wrap).then((wrap: string) => {
      return getFileCode(fileExit(moduleFile, 'index'), wrap).then((res: string) => {
        const Name = firstUppers(reName, true)
        code = res.replace(/@VERSION/g, version).replace(/@DATE/g, date)
          .replace(/w\.FIRSTMODULENAME/g, 'w.jt' + Name)
          .replace(/FIRSTMODULENAME/g, Name)
          .replace(/[ ]*\/\/ PLUGIN MODULE IGNORE START([\n\s\S]+)\/\/ PLUGIN MODULE IGNORE END\s/, '')
          .replace(/[ ]*\/\/ PLUGIN WIN IGNORE START([\n\s\S]+)\/\/ PLUGIN WIN IGNORE END\s/, '')
          .replace(/[ ]*\/\/ PLUGIN IGNORE START([\n\s\S]+)\/\/ PLUGIN IGNORE END\s/, '')
          .replace(/\[MODULENAME\]/g, '.' + reName)
          .replace(/MODULENAME/g, reName)
          .replace(/(\w+):[ ]*\1([ ]*)(,|\})/g, '$1$2$3')
        return dealCode(code).then((code) => {
          return Promise.all(printSrc.map(it => {
            let outFile = path.resolve(it, outName)
            return writeFile(outFile, code).catch(() => { }).then(() => {
              console.log(outFile)
            })
          })).then(() => {
            return { back, code, url: outName }
          })
        })
      }).catch((e: any) => {
        console.log(moduleName + ':Failed')
        return { back, code, url: outName }
      })
    })
  }).then(({ back, code, url }) => {
    if (back) {
      return writeFile(back.url, back.code).catch(() => { }).then(() => {
        console.log(moduleName + ':Finnsh')
        return { code, url }
      })
    } else {
      console.log(moduleName + ':Finnsh')
      return { code, URL }
    }
  })
}
