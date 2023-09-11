export function getXlsxData(e, resolve, reject, header) {
  let xlsx = XLSX.read(e.target.result, { type: 'binary' })
  try {
    let data = xlsx.Sheets[xlsx.SheetNames[0]]
    Object.values(data).forEach(it => {
      if (it.t == 'n' && it.v != it.w) {
        it.t = 's'
        it.v = it.w
      }
    })
    resolve(XLSX.utils.sheet_to_json(data, { header: header ? 2 : 1 }));
  } catch (e) {
    reject({ msg: '文件信息读取失败：' + e.message })
  }
}