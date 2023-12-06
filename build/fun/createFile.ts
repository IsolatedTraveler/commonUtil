import { uuid } from '../../g-lobal/util'
import * as fs from 'fs'
function createFile1(url: string | false, data: string) {
  return new Promise((resolve, reject) => {
    if (url) {
      fs.writeFile(url, data, 'utf-8', err => {
        if (err) {
          reject()
        } else {
          resolve(true)
        }
      })
    } else {
      return reject()
    }
  })
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