const path = require('path'), ml = path.resolve(`${__dirname}/../..`), out = path.resolve(ml, 'dist')
module.exports = {
  ml,
  date: new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z"),
  out
}