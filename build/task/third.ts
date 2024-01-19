const { readDir, getCode } = require('../fun')

const path = require('path')
  , { outMl, ml } = require('../var/third')
function build(ml: string, name: string, version: string) {
  return readDir(ml).then(async (res = []) => {
    let len = res.length
    for (let i = 0; i < len; i++) {
      if (res[i] !== 'global')
        await getCode(res[i], ml, version, outMl.map((it: string) => path.resolve(it, name)), 'third', name)
    }
  })
}
export function buildThird(version: string) {
  return readDir(ml).then(async (res = []) => {
    let len = res.length
    for (let i = 0; i < len; i++) {
      var gnName = res[i]
      if (gnName !== 'global')
        await build(path.resolve(ml, gnName), gnName, version)
    }
  })
}