const path = require('path'), { ml, date, out } = require('./public'), name = 'layModules'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: out.map(it => path.resolve(it, 'layui-v2.5.7/extend') + '\\'),
  date
}