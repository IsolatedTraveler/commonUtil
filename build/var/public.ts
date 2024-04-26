import path from 'path'
import { dbdq } from '../../public'
export const ml = path.resolve(`${__dirname}/../../views/`)
  , out = [
    ...dbdq
  ]
  , date = new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z")