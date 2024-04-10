import { loadJsJudge, readFile } from '../../file'
import { xlsxType } from '../var'
export function loadXlsx() {
  return loadJsJudge('lib23/js/xlsx/xlsx.min.js', 'XLSX')
}
export function readXlsx(it: File) {
  return new Promise((resolve, reject) => {
    if (xlsxType.test(it.type)) {
      readFile(it, resolve, reject)
    } else {
      reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
    }
  }).then((res: any) => {
    return loadXlsx().then(() => {
      let xlsx = XLSX.read(res.target.result, { type: 'binary' }), data: any[][] = []
      try {
        xlsx.SheetNames.forEach((sheet) => {
          data.push(XLSX.utils.sheet_to_json(xlsx.Sheets[sheet], { row: true, header: 1, dateNF: 'yyyy-mm-dd hh:mm:ss' }))
        })
        return data
      } catch (e: any) {
        return Promise.reject({ msg: '文件信息读取失败：' + e.message });
      }
    })
  })
}