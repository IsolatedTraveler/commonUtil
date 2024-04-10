import { loadJsJudge, readFile } from '../../file'
import { xlsxType } from '../var'
export function loadXlsx() {
  return loadJsJudge('lib23/js/xlsx0.20.2/xlsx.full.min.js', 'XLSX')
}
export function readXlsx(it: File) {
  if (xlsxType.test(it.type)) {
    return loadXlsx().then(() => readFile(it)).then((e: any) => XLSX.read(e.target.result, { type: 'binary' }))
  } else {
    return Promise.reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
  }
}