const { fileExit, fileRead } = require("./readFile")

module.exports = function (moduleFile, name, grunt) {
  let nameFile = fileExit(moduleFile, name), renderFile = fileExit(moduleFile, 'render')
  if (nameFile && renderFile) {
    let render = fileRead(renderFile, grunt)
    console.log(render)
    return Promise.resolve(render)
  } else {
    return Promise.resolve()
  }
}