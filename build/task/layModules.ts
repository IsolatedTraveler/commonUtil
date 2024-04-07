import { exeBuild } from "../fun"
const { outMl, ml } = require('../var/layModule')
export function buildLayModule(version: string) {
  return exeBuild(version, outMl, ml, 'layModules')
}