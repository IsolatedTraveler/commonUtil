import { exeBuild } from "../fun"
import path from 'path'
import { outMl, ml } from "../var/gModule"

export function buildCs(version: string) {
  return exeBuild(version, outMl, path.resolve(ml, '../cs'), 'cs')
}