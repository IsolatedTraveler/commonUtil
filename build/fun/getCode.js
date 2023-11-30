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
const getFileCode = require('./getFileCode'), { date } = require('../var/public')
const { fileExit, fileRead } = require('./readFile')
module.exports = function (name, src, version, grunt, printSrc, ly) {
  console.log(ly, name)
  let moduleFile = path.resolve(src, name)
  return renderModule(moduleFile, name, grunt).then((back) => {
    let wrap = fileExit(moduleFile, 'wrapper') || fileExit(src, 'wrapper')
    return getFileCode(fileExit(moduleFile, 'index'), fileRead(wrap, grunt)).then(res => {
      printSrc.forEach(it => {
        let outFile = path.resolve(it, name + '.js'), Name = firstUppers(name, true)
        grunt.file.write(outFile, res.replace(/@VERSION/g, version).replace(/@DATE/g, date)
          .replace(/w\.FIRSTMODULENAME/g, 'w.jt' + Name)
          .replace(/FIRSTMODULENAME/g, Name).replace(/MODULENAME/g, name))
        // grunt.log.writeln(`${ly || ''}:${name}`);
        grunt.log.ok(`${outFile} created.`);
        return back
      })
    }).catch((e) => {
      console.log(1233)
      return back
    })
  }).then(back => {
    if (back) {
      grunt.file.write(back.url, back.code)
    }
  })
}

function firstUpper(str, judge) {
  return judge ? (str.substr(0, 1).toUpperCase() + str.substr(1)) : str
}
function firstUppers(str, judge) {
  let arr = str.split('-')
  return arr.map((it, i) => firstUpper(it, i || judge)).join('')
}