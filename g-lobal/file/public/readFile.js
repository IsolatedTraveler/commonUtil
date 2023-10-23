export function readFile(file, resolve, reject) {
  let reader = new FileReader()
  reader.onload = resolve
  reader.onerror = function (event) {
    reject({ msg: 'File could not be read: ' + event.target.error.message })
  }
  reader.readAsBinaryString(file)
}