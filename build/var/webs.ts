import path from 'path'
import { ml as ml1 } from './public'
export { date, out } from './public'
export const ml = path.resolve(ml1, 'webs')
  , outMl = [path.resolve(ml1, '../distWeb')]