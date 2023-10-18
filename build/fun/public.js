const rollup = require('rollup'), { date } = require('../var/public'), fs = require('fs'),
  cleanup = require('rollup-plugin-cleanup')
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

async function setCode(wrapper, reg, space, input, reg1, space1) {
  let arr = wrapper.split(reg)
  if (arr[1]) {
    let bundle = await rollup.rollup({
      input,
      plugins: [
        cleanup()
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
async function getCode(name, src, version, grunt, printSrc, ly) {
  try {
    let wrapper = read(src + '/wrapper.js', grunt).replace(/@VERSION/g, version).replace(/@DATE/g, date),
      code = await setCode(wrapper, /[ \t]*\/\/ @CODE[\r\n]+/, '\n  ', src + '/index.js', /[\n] {2,2}$/, '  ')
    code = await setCode(code, /[ \t]*\/\/ @CODEMODULE[\r\n]+/, '\n    ', src + '/' + name, /[\n] {4,4}$/, '    ')
    // console.log(printSrc)
    printSrc.forEach(it => {
      grunt.file.write(it + name, code)
      // grunt.log.writeln(`${ly || ''}:${name}`);
      grunt.log.ok(`${it}${name} created.`);
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