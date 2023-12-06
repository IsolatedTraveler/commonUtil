const { readDir, getCode } = require('../fun')

const path = require('path'), ml = path.resolve(`${__dirname}/../../cs`)
  , { outMl } = require('../var/gModule')
export function buildCs(version: string) {
  return readDir(ml).then(async (res = []) => {
    let len = res.length
    for (let i = 0; i < len; i++) {
      await getCode(res[i], ml, version, outMl, 'cs')
    }
  })
}