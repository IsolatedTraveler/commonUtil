const rollup = require('rollup'), { date } = require('../var/public'), fs = require('fs'),
  cleanup = require('rollup-plugin-cleanup'), commonjs = require('rollup-plugin-commonjs')
  , typescript = require('rollup-plugin-typescript'), resolve = require('rollup-plugin-node-resolve')
  , path = require('path')
function read(url, grunt) {
  return grunt.file.read(url)
}
function readDir(url) {
  return new Promise((resolve, reject) => {
    fs.readdir(url, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve([].filter.call(files, it => {
          return !/\./.test(it)
        }))
      }
    })
  })
}
function firstUpper(str, judge) {
  return judge ? (str.substr(0, 1).toUpperCase() + str.substr(1)) : str
}
function firstUppers(str, judge) {
  let arr = str.split('-')
  return arr.map((it, i) => firstUpper(it, i || judge)).join('')
}
async function setCode(wrapper, reg, space, input, reg1, space1) {
  let arr = wrapper.split(reg)
  if (arr[1]) {
    let bundle = await rollup.rollup({
      input,
      plugins: [
        cleanup(),
        resolve(),
        commonjs(),
        typescript()
      ]
    }), keys = [],
      { output: [{ code }] } = await bundle.generate({ format: 'esm', intro: '', outro: '' })
    code = space1 + code.replace(/export { [^}]* }[;]*[\r\n]*/, '').replace(/[\n\r]+/g, space)
    code = code.replace(/Class.prototype.([a-zA-z-_0-9]*)[ =]*([a-zA-z-_0-9]*)[;\n][ ]*/g, function (a, b, c) {
      if (b == c) {
        keys.push(b)
      } else {
        keys.push(`${b}: ${c}`)
      }
      return ''
    })
    code = code.replace(/Class.prototype.([a-zA-z-_0-9]*)[ =]*(\{[^}]*\})[;\n][ ]*/g, function (a, b, c) {
      keys.push(`${b}: ${c}`)
      return ''
    })
    code = code.replace(/\s+Class.prototype.([a-zA-z-_0-9]*)[ =]*([^;\n]*)[;\n][ ]*/g, function (a, b, c) {
      keys.push(`${b}: ${c}`)
      return ''
    })
    if (keys.length) {
      code += 'Class.prototype = { ' + keys.join(', ') + ' }' + space
    }
    code = code.replace(/([\n\r][ \t]+)+([\n\r])/g, '$2')
    return arr[0] + code.replace(/console.info[^\n]*\n[ ]*/, '').replace(reg1, '\n') + (arr[1] || '')
  }
  return wrapper
}
function getWrapFileCode(ml1, ml2, name, grunt, version) {
  let wrapperFile = path.resolve(ml1, 'wrapper.js')
    , code = '', Name = firstUppers(name, true)
  name = firstUppers(name)
  try {
    code = read(wrapperFile, grunt)
  } catch (e) {
    wrapperFile = path.resolve(ml2, 'wrapper.js')
    code = read(wrapperFile, grunt)
  }
  return code.replace(/@VERSION/g, version).replace(/@DATE/g, date)
    .replace(/w.FIRSTMODULENAME/g, 'w.jt' + Name)
    .replace(/FIRSTMODULENAME/g, Name).replace(/MODULENAME/g, name)
}
async function getFileCode(ml, name, code, preReg, preV, afterReg, afterV) {
  let input = path.resolve(ml, name + '.js')
  try {
    return await setCode(code, preReg, preV, input, afterReg, afterV)
  } catch (e) {
    input = path.resolve(ml, name + '.ts')
    code = await setCode(code, preReg, preV, input, afterReg, afterV)
    return code
  }
}
async function getIndexFileCode(ml, ml1, name, code, preReg, preV, afterReg, afterV) {
  try {
    return await getFileCode(ml, 'index', code, preReg, preV, afterReg, afterV)
  } catch (e) {
    let input = path.resolve(ml1, 'index.ts'), Name = firstUppers(name, true)
    name = firstUppers(name)
    code = await setCode(code, preReg, preV, input, afterReg, afterV)
    return code.replace(/FIRSTMODULENAME/g, Name).replace(/MODULENAME/g, name)
  }
}
async function getCode(name, src, version, grunt, printSrc, ly) {
  console.log(ly, name)
  let moduleFile = path.resolve(src, name)
  try {
    let wrapper = getWrapFileCode(moduleFile, src, name, grunt, version),
      code = await getIndexFileCode(moduleFile, src, name, wrapper, /[ \t]*\/\/ @CODE[\r\n]+/, '\n  ', /[\n] {2,2}$/, '  ')
    code = await getFileCode(moduleFile, name, code, /[ \t]*\/\/ @CODEMODULE[\r\n]+/, '\n    ', /[\n] {4,4}$/, '    ')
    printSrc.forEach(it => {
      let outFile = path.resolve(it, name + '.js')
      grunt.file.write(outFile, code)
      // grunt.log.writeln(`${ly || ''}:${name}`);
      grunt.log.ok(`${outFile} created.`);
    })
  } catch (e) {
    console.log(e)
    grunt.log.ok(`File '${name}' failed.`);
  }
}
module.exports = {
  getCode,
  readDir
}