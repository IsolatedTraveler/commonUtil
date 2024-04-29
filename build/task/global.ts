import { createType, readDir, createIndex } from '../fun'
import * as path from 'path'
import { ml } from '../var/public';
var siteMl = path.resolve(ml, 'g-lobal')
export function taskGlobal(version: string) {
  return readDir(siteMl).then(async (res: Array<string> = []) => {
    return Promise.all(res.map((name) => {
      const url = path.resolve(siteMl, name, 'index.ts'), keys = Object.keys(require(url))
      return createType(name, keys)
    }))
  }).then(() => {
    let url = path.resolve(siteMl, 'index.ts'), keys = Object.keys(require(url))
    return createIndex(keys)
  })
}