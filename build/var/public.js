const path = require('path'), ml = path.resolve(`${__dirname}/../..`), out = 'E:/jtGit/web/zshis/lib/js/'
module.exports = {
  ml,
  date: new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z"),
  out
}