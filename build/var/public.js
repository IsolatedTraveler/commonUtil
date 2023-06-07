const path = require('path'), ml = path.resolve(`${__dirname}/../..`)
var out
out = 'E:/jtGit/web/zshis/lib/js/'
// out = path.resolve(`${__dirname}/../../dist`) + '/'
module.exports = {
  ml,
  date: new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z"),
  out
}