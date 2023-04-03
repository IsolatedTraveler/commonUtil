const {getCode} = require('../fun/public'), {ml, outMl} = require('../var/old')
module.exports = async function(grunt, version) {
  await getCode('old.js', ml, version, grunt, outMl)
}