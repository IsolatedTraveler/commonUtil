const fs = require('fs'), path = require('path')
export function fileRead(url: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err: any, data: string) => {
      if (err) {
        reject(url)
      } else {
        resolve(data)
      }
    })
  })
}
export function FileExitJudge(url: string) {
  return fs.existsSync(url) ? url : false
}
export function fileExit(url: string, name: string) {
  return FileExitJudge(path.resolve(url, name + '.js')) || FileExitJudge(path.resolve(url, name + '.ts'))
}
