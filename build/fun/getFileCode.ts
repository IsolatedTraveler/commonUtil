import { rollup } from 'rollup'
import cleanupPlugin from 'rollup-plugin-cleanup'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import nodeResolve from 'rollup-plugin-node-resolve'

export function getFileCode(input: string, wrapper: string) {
  let reg = /[ \t]*\/\/[ ]*@CODE[\r\n]+/, splitCode: RegExpExecArray | string | null = reg.exec(wrapper)
    , arr = wrapper.split(reg)
  if (splitCode) {
    splitCode = splitCode[0].replace(/\/\/[ ]*@CODE[\r\n]+/, '')
  } else {
    splitCode = ''
  }
  return rollup({
    input,
    plugins: [
      cleanupPlugin(),
      nodeResolve(),
      commonjs(),
      typescript()
    ]
  }).then((res: any) => {
    return res.generate({ format: 'esm', intro: '', outro: '' }).then(({ output: [{ code = '' }] }) => {
      return (arr[0] || '') + splitCode + dealCode(code, splitCode as string) + (arr[1] || '')
    })
  })
}
function dealCode(code: string, kg = '', space = '\n') {
  let keys: Array<string> = []
  code = code.replace(/export { [^}]* }[;]*[\r\n]*/, '').replace(/[\n\r]+/g, space)
  code = code.replace(/Class.prototype.([a-zA-z-_0-9]+)[ =]*([a-zA-z-_0-9]*)[;\n][ ]*/g, function (a, b, c) {
    if (b == c) {
      keys.push(b)
    } else {
      keys.push(`${b}: ${c}`)
    }
    return ''
  })
  code = code.replace(/Class.prototype.([a-zA-z-_0-9]+)[ =]*(\{[^}]*\})[;\n][ ]*/g, function (a, b, c) {
    keys.push(`${b}: ${c}`)
    return ''
  })
  code = code.replace(/\s+Class.prototype.([a-zA-z-_0-9]+)[ =]*([^;\n]*)[;\n][ ]*/g, function (a, b, c) {
    keys.push(`${b}: ${c}`)
    return ''
  })
  code = code.replace(/GLOBAL\$[A-Z]+\$(V[0-9]+\$)?\./g, '')
  code = code.replace(/(\n)(\s*)([^\s])/g, (a, b, c, d) => {
    return b + c.substr(Math.ceil(c.length / 2)) + kg + d
  })
  if (keys.length) {
    code += 'Class.prototype = { ' + keys.join(', ') + ' }' + space
  }
  code = code.replace(/([\n\r][ \t]+)+([\n\r])/g, '$2')
  return code
}