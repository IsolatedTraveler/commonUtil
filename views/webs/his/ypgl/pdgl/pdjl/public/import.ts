import { addSkipParam } from "../fun";
import { expInventoryCols, setInputeFile } from "../var";

export function importInventoryDetails() {
  setInputeFile().then(({ files: [file] }) => {
    if (file) {
      return file
    } else {
      return Promise.reject({ code: -1, msg: '未获取到文件' })
    }
  }).then(file => {
    // 解析xlsx
    return GLOBAL$XLSX$.readXlsx(file).then(GLOBAL$XLSX$.dealSheetToArray).then(([res]) => {
      res = res.slice(2)
      const cols = expInventoryCols.slice(0, -5), res1 = res[0], len = cols.length
        , mainCols = expInventoryCols.slice(-5)
        , obj: any = {}
      mainCols.forEach((key, i) => {
        obj[key] = res1[len + i]
      })
      res = res.map(it => {
        var obj: any = {}
        cols.forEach((key, i) => {
          obj[key] = it[i]
        })
        var dpdsl = obj.dpdsl || 0, kfxs = obj.kfxs, xpdsl = obj.xpdsl || 0
          , sl = GLOBAL$UTIL$.calc(dpdsl * kfxs, xpdsl, '+', { precision: 5 }) || 0
        obj.tzsl = sl
        obj.pdcbje = GLOBAL$UTIL$.calc(sl, obj.cbdj, '*', { precision: 2 })
        obj.pdlsje = GLOBAL$UTIL$.calc(sl, obj.lsdj, '*', { precision: 2 })
        obj.pdcjje = GLOBAL$UTIL$.calc(obj.pdlsje, obj.pdcbje, '-', { precision: 2 })
        obj.pdbz = obj.tzsl > obj.kcsl ? '盈' : obj.tzsl < obj.kcsl ? '亏' : '平'
        return obj
      })
      return { res, obj }
    })
  }).then(({ res, obj }) => {
    w.commonUtil.openWind(addSkipParam({ res }, obj, 'addLoadExcel'), '药品盘点编辑');
  })
}