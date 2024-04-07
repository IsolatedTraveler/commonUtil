import * as  fs from 'fs'
import path from 'path'
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
function getSonDir(url: string): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err)
      } else {
        Promise.all(files.map(it => {
          const itUrl = path.resolve(url, it)
          return getFileStats(itUrl).then(res => res ? itUrl : '').catch(it => '')
        })).then(res => resolve(res.filter(it => it)))
      }
    })
  })
}
export function getAllSonDir(url: string, arr: Array<string> = []): Promise<Array<string>> {
  return getSonDir(url).then(res => {
    if (res.length) {
      return Promise.all(res.map(it => {
        return getAllSonDir(it, arr)
      }))
    } else {
      arr.push(url)
    }
  }).then(() => {
    return arr
  })
}