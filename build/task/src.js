const {getCode, readDir} = require('../fun/public'), {ml, outMl} = require('../var/src'), path = require('path')
// module.exports = async function(grunt, version) {
//   // getCode(name, src, version, grunt, printSrc)
//   await getCode('commonUtil.js', ml, version, grunt, outMl)
// }
// const {getCode, readDir} = require('../fun/public'), {ml, outMl} = require('../var/module'), path = require('path')
module.exports = async function(grunt, version) {
  let res = await readDir(ml)
  if (res && res[0]) {
    let len = res.length
    for(let i = 0; i < len; i++) {
      let name = res[i]
      await getCode(name + '.js', path.resolve(ml, name), version, grunt, outMl)
    }
  }
}