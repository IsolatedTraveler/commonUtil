import path from 'path'
import { ml as ml1, out } from './public'
export { date } from './public'
export const ml = path.resolve(ml1, 'gModules'),
  outMl = out.map(it => path.resolve(it, 'modules') + '\\')