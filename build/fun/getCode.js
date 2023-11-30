/**
* @description 
* @author 何波
* @date 2023-11-30 15:47:18
* @param {
  name: "组件名",
  src: "组件目录所在路径",
  version: "版本信息",
  grunt: grunt,
  printSrc: "输出路径"
} 
*/
const path = require('path'), renderModule = require('./renderModule')
const { getCode } = require("./public")
const getFileCode = require('./getFileCode')
const { fileExit, fileRead } = require('./readFile')
module.exports = function (name, src, version, grunt, printSrc) {
  let moduleFile = path.resolve(src, name)
  return renderModule(moduleFile, name, grunt).then(() => {
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return getFileCode(fileExit(moduleFile, 'index'), fileRead(wrap, grunt)).then(res => {
      printSrc.forEach(it => {
        let outFile = path.resolve(it, name + '.js')
        grunt.file.write(outFile, res)
        // grunt.log.writeln(`${ly || ''}:${name}`);
        grunt.log.ok(`${outFile} created.`);
      })
    }).catch(() => { })
  }).catch((e) => {
    getCode(name, src, version, grunt, printSrc)
  })

}