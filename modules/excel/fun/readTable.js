import { colSelectVal, dataObj, tableSelectKey, tableSelectVal, zbData } from "../var/index";
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
function getXlsxData(e, resolve, reject, data, i, wjm) {
  let xlsx = XLSX.read(e.target.result, { type: 'binary' });
  try {
    resolve([].map.call(xlsx.SheetNames, (sheet, j) => {
      data[sheet] = 't_' + i + '_' + j
      tableSelectKey.push({ id: data[sheet], mc: wjm + '-->' + sheet })
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
    var obj = { [colSelectVal['_文件名']]: it.name, [colSelectVal['_表序号']]: i + 1, [colSelectVal['_表名']]: sheet }
    names.forEach((key, i) => obj[colSelectVal[key]] = (it1[i] || '') + '')
    return obj
  })
  dataObj[tableSelectVal[it.name][sheet]] = v
  return v
}
function dealXlsxRes(it, res = []) {
  res = res.map(sheetData => {
    return arrToObj(it, sheetData)
  })
  zbData.push(res)
}
export function readTable(it, i) {
  tableSelectVal[it.name] = {}
  return new Promise((resolve, reject) => {
    if (xlsxType.test(it.type)) {
      readFile(it, (e) => getXlsxData(e, resolve, reject, tableSelectVal[it.name], i, it.name), reject)
    } else {
      reject(({ msg: '当前仅支持xls与xlsx格式的文件导入' }))
    }
  }).then((res) => dealXlsxRes(it, res))
}