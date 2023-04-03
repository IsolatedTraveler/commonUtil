const {getCode} = require('../fun/public'), {ml, outMl} = require('../var/src')
module.exports = async function(grunt, version) {
  // getCode(name, src, version, grunt, printSrc)
  await getCode('commonUtil.js', ml, version, grunt, outMl)
}