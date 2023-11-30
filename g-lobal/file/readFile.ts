import { FileEvent } from "./type"

export function readFile(file: Blob, resolve: FileEvent, reject: Function) {
  let reader = new FileReader()
  reader.onload = resolve
  reader.onerror = function (event) {
    let msg = '未知错误'
    if (event && event.target && event.target.error) {
      msg = event.target.error.message
    }
    reject({ msg: 'File could not be read: ' + msg })
  }
  reader.readAsBinaryString(file)
}