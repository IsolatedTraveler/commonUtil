import { exeBuild } from "../fun"
const path = require('path'),
  ml = path.resolve(`${__dirname}/../../cs`)
  , { outMl } = require('../var/gModule')

export function buildCs(version: string) {
  return exeBuild(version, outMl, ml, 'cs')
}