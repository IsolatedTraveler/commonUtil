const rollup = require('rollup'), cleanup = require('rollup-plugin-cleanup'), commonjs = require('rollup-plugin-commonjs')
  , typescript = require('rollup-plugin-typescript'), resolve = require('rollup-plugin-node-resolve')
module.exports = function (input, wrapper, preV, afterReg, afterV) {
  let arr = wrapper.split(/[ \t]*\/\/ @CODE[\r\n]+/)
  if (arr[1]) {
    return rollup.rollup({
      input,
      plugins: [
        cleanup(),
        resolve(),
        commonjs(),
        typescript()
      ]
    }).then(res => {
      return res.generate({ format: 'esm', intro: '', outro: '' }).then(({ output: [{ code }] }) => {
        return arr[0] + dealCode(code) + arr[1]
      })
    })
  }
  return Promise.resolve(wrapper)
}
function dealCode(code, space = '\n') {
  let keys = []
  code = code.replace(/export { [^}]* }[;]*[\r\n]*/, '').replace(/[\n\r]+/g, space)
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
  return code
}