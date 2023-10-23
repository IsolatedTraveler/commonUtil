const path = require('path'), { ml, date, out } = require('./public'), name = 'gModules'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: out.map(it => path.resolve(it, 'modules') + '\\'),
  date
}