import { siteVesion } from '../../public'
import { ml } from '../var/public'
import { writeFile } from './createFile'
import * as path from 'path'
const siteMl = path.resolve(ml, 'types/local')
// const ml = path.resolve(`${__dirname}/../../types/local`)
var add = ''
if (siteVesion) {
  add = '$' + siteVesion
}
export function createType(name: string, arr: Array<string>) {
  let NAME = name.toUpperCase(), varName = `GLOBAL$${NAME + add}$`, code = `import {
  ${arr.join(', ')}
} from '../../g-lobal/${name}'
declare global {
  interface ${varName}TYPE {
    ${arr.map(key => {
    return `${key}: typeof ${key}`
  }).join('\n    ')}
  }
  let ${varName}: ${varName}TYPE
}
export {

}`
  return writeFile(path.resolve(siteMl, `${name}.d.ts`), code)
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
} from '../g-lobal'`
  return writeFile(path.resolve(siteMl, '../globalLocal.ts'), code)
}