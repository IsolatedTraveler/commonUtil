const path = require('path'), { ml, date, out } = require('./public'), name = 'addComm', mbName = 'modules'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: path.resolve(out, mbName) + '\\',
  date
}