import { createType, readDir, createIndex } from '../fun'
import * as path from 'path'
const ml = path.resolve(`${__dirname}/../../g-lobal`)
export function taskGlobal(version: string) {
  return readDir(ml).then(async (res: Array<string> = []) => {
    let len = res.length
    for (let i = 0; i < len; i++) {
      let naem = res[i], url = path.resolve(ml, naem, 'index.ts'), keys = Object.keys(require(url))
      await createType(naem, keys)
    }
  }).then(() => {
    let url = path.resolve(ml, 'index.ts'), keys = Object.keys(require(url))
    return createIndex(keys)
  })
}