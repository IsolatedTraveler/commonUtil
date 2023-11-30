
const getFileCode = require("./getFileCode")
const { fileExit, fileRead } = require("./readFile")

module.exports = function (moduleFile, name, grunt) {
  let nameFile = fileExit(moduleFile, name), renderFile = fileExit(moduleFile, 'render')
  if (nameFile && renderFile) {
    let render = fileRead(renderFile, grunt)
    return getFileCode(nameFile, render).then((code) => {
      grunt.file.write(renderFile, code.replace(/\/\/ MODULE START(\s|\S)+\/\/ MODULE END\s/, ''))
      return Promise.resolve({ url: renderFile, code: render })
    })
  } else {
    return Promise.resolve()
  }
}