const path = require('path'), { ml, date, out } = require('./public'), name = 'layModules'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: path.resolve(out, 'layui-v2.5.7/extend') + '\\',
  date
}