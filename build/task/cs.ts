import { exeBuild } from "../fun"
import path from 'path'
import { outMl } from "../var/gModule"
const ml = path.resolve(`${__dirname}/../../cs`)

export function buildCs(version: string) {
  return exeBuild(version, outMl, ml, 'cs')
}