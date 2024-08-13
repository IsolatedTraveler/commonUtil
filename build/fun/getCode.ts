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
function getFile(res: string, moduleName: string, moduleFile: string, src: string, name: string, external?: string[]) {
  src = fileExit(moduleFile, src)
  if (!external) {
    const ModuleName = firstUppers(moduleName, true)
    external = ['G' + ModuleName, 'GM' + ModuleName, 'Src' + ModuleName, 'Third' + ModuleName]
  }
  if (src) {
    return contantFileCode(src, res.replace(/([ \t]*\/\/[ ]*)@CODEMODULE([\r\n]+)/g, '$1@CODE$2').replace(/(?<!new[ \t]+)Class/g, name), moduleFile, moduleName, external)
  } else {
    return Promise.reject(new Error('未添加module项目，如不添加请替换wrapper模板'))
  }
}
function contantFileCode(url: string, wrap: string, moduleFile: string, moduleName: string, external?: string[]): Promise<string> {
  return getFileCode(url, wrap, external).then((res: string) => {
    if (/[ \t]*\/\/[ ]*@CODEMODULE[\r\n]+/.test(res)) {
      return getFile(res, moduleName, moduleFile, 'module/index', 'FIRSTMODULENAME', external)
    }
    return res.replace(/([\n\r][ \t]*)+([\n\r])/g, '$2')
  })
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
  return renderModule(moduleFile, reName).then(() => {
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return fileRead(wrap).then((wrap: string) => {
      return contantFileCode(fileExit(moduleFile, 'index'), wrap, moduleFile, moduleName).then((res: string) => {
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
            return writeFile(outFile, code).then(() => {
              console.log('success: ' + outFile)
            }, () => {
              console.log('failed: ' + outFile)
            })
          }))
        })
      })
    })
  }).then(() => {
    console.log(moduleName + ':Finnsh')
  }, (e: any) => {
    console.log(moduleName + ':Failed ' + e.message)
    console.log(e)
  })
}
