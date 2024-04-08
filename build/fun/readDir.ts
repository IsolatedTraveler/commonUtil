import * as  fs from 'fs'
import path from 'path'
import { judgeBuild } from './judgeBuild'
import { buildModule } from '../../public'
interface SonFileAndDir {
  file: string[]
  dir: string[]
}
interface JudgeSonDir {
  module?: any
  moduleName?: string
}
function getFileStats(url: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.stat(url, (err, stats) => {
      if (err) {
        reject(err)
      } else if (stats.isFile()) {
        resolve(false)
      } else if (stats.isDirectory()) {
        resolve(true)
      } else {
        reject('未知错误')
      }
    })
  })
}
function getSonDir(url: string, isDir: boolean = true): Promise<SonFileAndDir> {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err)
      } else {
        const file: Array<string> = [], dir: Array<string> = []
        Promise.all(files.map(it => {
          const itUrl = path.resolve(url, it)
          return getFileStats(itUrl).then(res => {
            if (res === isDir) {
              dir.push(itUrl)
            } else {
              file.push(itUrl)
            }
          }).catch(it => '')
        })).then(() => resolve({ file, dir }))
      }
    })
  })
}
function getFileReg(arr: string[], reg: RegExp, len: number): boolean {
  return arr.filter(it => reg.test(it)).length === len
}
export function readDir(url: string, judge: any = true): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve([].filter.call(files, it => {
          return !/\./.test(it) && judge && (judge === true || judge[it])
        }))
      }
    })
  })
}
export function getAllSonDir(url: string, arr: Array<string> = []): Promise<Array<string>> {
  return getSonDir(url).then(({ dir }) => {
    if (dir.length) {
      return Promise.all(dir.map(it => {
        return getAllSonDir(it, arr)
      }))
    } else {
      arr.push(url)
    }
  }).then(() => {
    return arr
  })
}
export function getSpecifiedFileDir(url: string, module: any = buildModule, reg: RegExp = /(index.ts|core.ts|render.ts)$/, len = 3, arr: Array<string> = []): Promise<Array<string>> {
  return getSonDir(url).then(({ dir, file }) => {
    if (getFileReg(file, reg, len)) {
      arr.push(url)
    } else if (dir.length) {
      return Promise.all(dir.map(it => {
        const name = it.replace(url, '').replace(/^[\\\/]*/g, '')
        module = judgeBuild(module, name)
        if (module)
          return getSpecifiedFileDir(it, module, reg, len, arr)
      }))
    }
  }).then(() => {
    return arr
  })
}