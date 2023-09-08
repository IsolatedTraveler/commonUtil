import { readFile } from "../../file/public/readFile"
import { getXlsxData } from "../fun/getXlsxData"
import { xlsxType } from "../var/index"

export function readXlsx(file) {
  let type = file.type
  return new Promise((resolve, reject) => {
    if (xlsxType.test(type)) {
      readFile(file, (e) => getXlsxData(e, resolve, reject), reject)
    } else {
      reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
    }
  })
}