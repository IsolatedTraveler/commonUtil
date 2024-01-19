const path = require('path'), { ml, date, out } = require('./public')
module.exports = {
  ml: path.resolve(ml, 'third'),
  outMl: out.map((it: string) => path.resolve(it, 'third') + '\\'),
  date
}