const fs = require('fs')
module.exports = function (url) {
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