const path = require('path'), { ml, date, out } = require('./public'), name = 'gAdd', mbName = 'modules'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: out.map(it => path.resolve(it, mbName) + '\\'),
  date
}