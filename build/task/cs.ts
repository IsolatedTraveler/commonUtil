import path from 'path'
import { outMl, ml } from "../var/gModule"
import { getCode } from '../fun'

export function buildCs(version: string, gn: string) {
  return getCode(gn, path.resolve(ml, '../cs'), version, outMl, 'cs')
}