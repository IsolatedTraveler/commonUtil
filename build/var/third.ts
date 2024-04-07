import path from 'path'
import { ml as ml1, out } from './public'
export { date } from './public'
export const ml = path.resolve(ml1, 'third'),
  outMl = out.map((it: string) => path.resolve(it, 'third') + '\\')