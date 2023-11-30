const { readDir, getCode } = require('../fun')

const path = require('path'), ml = path.resolve(`${__dirname}/../../cs`)
  , { outMl } = require('../var/gModule')
module.exports = function (grunt, version) {
  return readDir(ml).then((res = []) => {
    return Promise.all(res.map(name => {
      return getCode(name, ml, version, grunt, outMl, 'gModules')
    }))
  })
}