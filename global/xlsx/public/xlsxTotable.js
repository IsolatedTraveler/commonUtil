import { readFile } from "../../file/public/readFile"
import { getXlsxData } from "../fun/getXlsxData"
import { xlsxType } from "../var/index"

export function readXlsx(file, { names, isObj } = { isObj: true }) {
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
        names.forEach((key, i) => obj[key] = it[i])
        return obj
      })
    }
    return res
  })
}