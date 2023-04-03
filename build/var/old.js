const path = require('path'), {ml, date, out} = require('./public'), name = 'old'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: out,
  date
}