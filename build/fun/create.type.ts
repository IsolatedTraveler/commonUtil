import { writeFile } from './createFile'
import * as path from 'path'
const ml = path.resolve(`${__dirname}/../../types/local`)
export function createType(name: string, arr: Array<string>) {
  let NAME = name.toUpperCase(), code = `import {
  ${arr.join(', ')}
} from '../../views/g-lobal/${name}'
declare global {
  interface GLOBAL$${NAME}$TYPE {
    ${arr.map(key => {
    return `${key}: typeof ${key}`
  }).join('\n    ')}
  }
  let GLOBAL$${NAME}$: GLOBAL$${NAME}$TYPE
}
export {

}`
  writeFile(path.resolve(ml, `${name}.d.ts`), code)
}
export function createIndex(arr: Array<string>) {
  let sum = 0, code = `import {
  ${arr.map((it: string) => {
    sum += it.length + 1
    if (sum > 100) {
      sum = it.length
      return '\n  ' + it
    }
    return it
  }).join(', ')}
} from '../../views/g-lobal'`
  writeFile(path.resolve(ml, '../globalLocal.ts'), code)
}