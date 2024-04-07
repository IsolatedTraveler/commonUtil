import path from 'path'
import { ml as ml1, out } from './public'
export { date } from './public'
export const ml = path.resolve(ml1, 'layModules'),
  outMl = out.map(it => path.resolve(it, 'layui-v2.5.7/extend') + '\\')