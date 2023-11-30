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
module.exports = function (name, src, version, grunt, printSrc) {
  let moduleFile = path.resolve(src, name)
  return renderModule(moduleFile, name, grunt).then((code) => {
    return code
  }).then(res => {
    if (res) {
      // 回写render
    }
  }).catch(() => {
    getCode(name, src, version, grunt, printSrc)
  })

}