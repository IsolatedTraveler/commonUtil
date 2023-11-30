const fs = require('fs'), path = require('path')
function fileRead(url, grunt) {
  return grunt.file.read(url)
}
function FileExitJudge(url) {
  return fs.existsSync(url) ? url : false
}
function fileExit(url, name) {
  return FileExitJudge(path.resolve(url, name + '.js')) || FileExitJudge(path.resolve(url, name + '.ts'))
}
module.exports = {
  fileRead,
  fileExit
}