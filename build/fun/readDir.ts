import * as  fs from 'fs'
export function readDir(url: string): Promise<Array<string>> {
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