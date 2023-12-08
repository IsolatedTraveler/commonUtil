const { readDir, getCode } = require('../fun')

const path = require('path'), ml = path.resolve(`${__dirname}/../../src`)
  , { outMl } = require('../var/src')
export function buildSrc(version: string) {
  return readDir(ml).then(async (res = []) => {
    let len = res.length
    for (let i = 0; i < len; i++) {
      await getCode(res[i], ml, version, outMl, 'src')
    }
  })
}