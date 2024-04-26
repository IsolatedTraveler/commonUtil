import { createType, readDir, createIndex } from '../fun'
import * as path from 'path'
const ml = path.resolve(`${__dirname}/../../views/g-lobal`)
export function getFileUrl(url: string) {
  if (process.platform === 'win32') {
    url = new URL(`file:///${url.replace(/\\/g, '/')}`).href;
  } else {
    url = new URL(`file://${url}`).href;
  }
  return url
}
export function taskGlobal(version: string) {
  return readDir(ml).then(async (res: Array<string> = []) => {
    return Promise.all(res.map((name) => {
      const url = path.resolve(ml, name, 'index.ts'), keys = Object.keys(require(url))
      return createType(name, keys)
    }))
  }).then(() => {
    let url = path.resolve(ml, 'index.ts'), keys = Object.keys(require(url))
    return createIndex(keys)
  })
}