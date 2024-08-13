import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { createFilter } from '@rollup/pluginutils';
import MagicString from 'magic-string';

export function getFileCode(input: string, wrapper: string, external?: string[]) {
  let reg = /[ \t]*\/\/[ ]*@CODE[\r\n]+/, splitCode: string = (wrapper.match(reg)?.[0] || '').split('//')[0]
    , arr = wrapper.split(reg)

  return rollup({
    input,
    plugins: [
      {
        name: 'replace-import',
        transform(code, id) {
          if (!external) return null
          const magicString = new MagicString(code);
          const reg = new RegExp('[ \t]*import[ \t]((\\*|\\*[ \t]+as[ \t]+.+|{.+})+[ \t]+)*from[ \t]+[\'"](' + external.join('|') + ')[\'"]', 'g')
          let match;
          while ((match = reg.exec(code)) !== null) {
            magicString.overwrite(match.index, reg.lastIndex, '');
          }
          return {
            code: magicString.toString(),
            map: magicString.generateMap({ hires: true }),
          };
        }
      },
      resolve(),
      commonjs(),
      typescript({
        outDir: 'dist',
        target: 'es2017',
        module: 'esnext',
        declaration: true,
        declarationDir: 'dist/types'
      })
    ],
    external
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
    code += kg + 'Class.prototype = { ' + keys.join(', ') + ' }' + space
  }
  code = code.replace(/([\n\r][ \t]+)+([\n\r])/g, '$2')
  return code
}