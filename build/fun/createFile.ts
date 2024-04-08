import { uuid } from '../../views/g-lobal/util'
import * as fs from 'fs'
import path from 'path'
function exists(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.access(url, err => {
      if (err) {
        reject()
      } else {
        resolve()
      }
    })
  })
}
function createFolder(url: string): Promise<void> {
  return exists(url).catch(() => {
    return createFolder(getSjFolder(url)).then(() => {
      return new Promise((resolve, reject) => {
        fs.mkdir(url, { recursive: true }, (err) => {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  })
}
function getSjFolder(url: string): string {
  return path.resolve(url, '..')
}
function createFile1(url: string | false, data: string): Promise<void> {
  if (url) {
    return exists(url).catch(() => {
      return createFolder(getSjFolder(url))
    }).then(() => {
      return new Promise((resolve, reject) => {
        fs.writeFile(url, data, 'utf-8', err => {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  } else {
    return Promise.reject()
  }
}
let repeatObj: any = {}
function notRepeat(arr: Array<string>, callBack: Function, id: string = '') {
  if (!id) {
    id = uuid()
    repeatObj[id] = 0
  } else if (repeatObj[id] > 9) {
    return Promise.reject()
  }
  repeatObj[id]++
  return callBack(...arr).catch(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        notRepeat(arr, callBack, id).then(() => {
          delete repeatObj[id]
          resolve(true)
        }).catch(reject)
      }, 50);
    })
  })
}
export function writeFile(url: string, data: string) {
  return notRepeat([url, data], createFile1)
}