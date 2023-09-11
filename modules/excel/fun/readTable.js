import { dataObj, zbData } from "../var/index";
import { setCol } from "./child/index";

function readFile(file, resolve, reject) {
  let reader = new FileReader();
  reader.onload = resolve;
  reader.onerror = function (event) {
    reject({ msg: 'File could not be read: ' + event.target.error.message });
  };
  reader.readAsBinaryString(file);
}
function dealXlsxData(sheet, data) {
  Object.values(data).forEach(it => {
    if (it.t == 'n' && it.v != it.w) {
      it.t = 's';
      it.v = it.w;
    }
  });
  return { sheet, data: XLSX.utils.sheet_to_json(data, { header: 1 }) }
}
function getXlsxData(e, resolve, reject) {
  let xlsx = XLSX.read(e.target.result, { type: 'binary' });
  try {
    resolve([].map.call(xlsx.SheetNames, sheet => {
      return dealXlsxData(sheet, xlsx.Sheets[sheet])
    }))
  } catch (e) {
    reject({ msg: '文件信息读取失败：' + e.message });
  }
}
function arrToObj(it, { data, sheet }) {
  if (data.length < 2) {
    console.warn(it.name, data)
  }
  var names = data.shift()
  names.forEach(setCol)
  var v = data.map((it1, i) => {
    var obj = { '_文件名': it.name, '_表序号': i + 1, '_表名': sheet }
    names.forEach((key, i) => obj[key] = (it1[i] || '') + '')
    return obj
  })
  dataObj[it.name] = dataObj[it] || {}
  dataObj[it.name][sheet] = v
  return v
}
function dealXlsxRes(it, res = []) {
  res = res.map(sheetData => {
    return arrToObj(it, sheetData)
  })
  zbData.push(res)
}
export function readTable(it) {
  return new Promise((resolve, reject) => {
    if (xlsxType.test(it.type)) {
      readFile(it, (e) => getXlsxData(e, resolve, reject), reject)
    } else {
      reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
    }
  }).then((res) => dealXlsxRes(it, res))
}