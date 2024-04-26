import path from 'path'
import { ml } from "../var/gModule"
import { getCode } from '../fun'

export function buildCs(version: string, gn: string) {
  return getCode(gn, path.resolve(ml, '../cs'), version, [path.resolve(ml, '../../cs')], 'cs')
}