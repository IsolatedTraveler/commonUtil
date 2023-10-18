const path = require('path'), ml = path.resolve(`${__dirname}/../..`)
var out
out = ['E:/jtGit/web/his-flie/nmhis/lib23/js/']
module.exports = {
  ml,
  date: new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z"),
  out
}