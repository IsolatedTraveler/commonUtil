import { exeBuild } from "../fun"
const { outMl, ml } = require('../var/gModule')
export function buildModule(version: string) {
  return exeBuild(version, outMl, ml, 'gModules')
}