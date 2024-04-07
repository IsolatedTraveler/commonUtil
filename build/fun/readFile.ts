import * as fs from 'fs'
import path from 'path'
export function fileRead(url: string):Promise<string> {
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
  return fs.existsSync(url) ? url : ''
}
export function fileExit(url: string, name: string):string {
  return FileExitJudge(path.resolve(url, name + '.js')) || FileExitJudge(path.resolve(url, name + '.ts'))
}
