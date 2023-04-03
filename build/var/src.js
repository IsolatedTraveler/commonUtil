const path = require('path'), {ml, date, out} = require('./public')
module.exports = {
  ml: path.resolve(ml, 'src'),
  outMl: out,
  date
}