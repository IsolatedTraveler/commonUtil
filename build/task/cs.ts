import path from 'path'
import { ml } from "../var/gModule"
import { getCode } from '../fun'
export function buildCs(version: string, gn: string) {
  const outFile = path.resolve(ml, '../../cs')
  return getCode(gn, path.resolve(ml, '../cs'), version, [outFile], 'cs')
}