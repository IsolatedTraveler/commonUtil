const path = require('path'), {ml, date} = require('./public'), name = 'vue'
module.exports = {
  ml: path.resolve(ml, name),
  outMl: path.resolve(ml, 'dist/' + name) + '\\',
  date
}