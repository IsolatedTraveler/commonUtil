export function getXlsxData(e, resolve, reject) {
  let xlsx = XLSX.read(e.target.result, { type: 'binary' })
  try {
    resolve(XLSX.utils.sheet_to_row_object_array(xlsx.Sheets[xlsx.SheetNames[0]]))
  } catch (e) {
    reject({ msg: '文件信息读取失败：' + e.message })
  }
}