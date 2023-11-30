import { readFile } from "../../"
import { getXlsxData } from "../fun/getXlsxData"
import { xlsxType } from "../var/index"

export function readXlsx(file, { names, isObj = true } = {}) {
  let type = file.type
  return new Promise((resolve, reject) => {
    if (xlsxType.test(type)) {
      readFile(file, (e) => getXlsxData(e, resolve, reject, isObj && !names), reject)
    } else {
      reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
    }
  }).then((res = []) => {
    if (isObj && names) {
      names = Object.assign([], res.shift(), names)
      return res.map(it => {
        var obj = {}
        if (it)
          names.forEach((key, i) => {
            key = (key + '').trim()
            var v = it[i] || ''
            obj[key] = v + ''
          })
        return obj
      })
    }
    return res
  })
}