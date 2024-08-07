
import { fileExit, fileRead } from './readFile'
import { getFileCode } from './getFileCode'
import { writeFile } from "./createFile"
export function renderModule(moduleFile: string, name: string) {
  let nameFile = fileExit(moduleFile, name), renderFile = fileExit(moduleFile, 'render')
  if (nameFile && renderFile) {
    return fileRead(renderFile).then((render: string) => {
      return getFileCode(nameFile, render).then((code: string) => {
        code = code.replace(/\/\/ MODULE START(\s|\S)+\/\/ MODULE END\s/, '').replace(/GLOBAL\$[A-Z]+\$(V[0-9]+\$)?\./g, '')
        return writeFile(renderFile, code).catch(() => { }).then(() => {
          return Promise.resolve({ url: renderFile, code: render })
        })
      })
    })
  } else {
    return Promise.resolve({})
  }
}

