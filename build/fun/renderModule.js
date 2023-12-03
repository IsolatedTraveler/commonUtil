
const getFileCode = require("./getFileCode")
const { fileExit, fileRead } = require("./readFile"), path = require('path')

module.exports = function (moduleFile, name, grunt) {
  let nameFile = fileExit(moduleFile, name), renderFile = fileExit(moduleFile, 'render')
  if (nameFile && renderFile) {
    let render = fileRead(renderFile, grunt)
    return getFileCode(nameFile, render).then((code) => {
      code = code.replace(/\/\/ MODULE START(\s|\S)+\/\/ MODULE END\s/, '')
      grunt.file.write(renderFile, code)
      grunt.file.write(path.resolve(moduleFile, 'temp.js'), code)
      return Promise.resolve({ url: renderFile, code: render })
    })
  } else {
    return Promise.resolve()
  }
}