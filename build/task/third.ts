import { exeBuild } from "../fun"


const path = require('path')
  , { outMl, ml } = require('../var/third')
function build(name: string, ml: string, version: string, outMl: Array<string>, ly: string, { module }: any) {
  ml = path.resolve(ml, name)
  outMl = outMl.map((it: string) => path.resolve(it, name))
  return exeBuild(version, outMl, ml, name, { ly, reName: name, module })
}
export function buildThird(version: string) {
  return exeBuild(version, outMl, ml, 'third', { fun: build })
}