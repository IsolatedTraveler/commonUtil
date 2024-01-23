import { exeBuild } from "../fun"
const { outMl, ml } = require('../var/src')
export function buildSrc(version: string) {
  return exeBuild(version, outMl, ml, 'src')
}