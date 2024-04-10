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
    return GLOBAL$XLSX$.readXlsx(file).then(([res]) => {
      res = res.slice(2)
      const cols = expInventoryCols.slice(0, -5), obj: any = {}, res1 = res[0], len = cols.length
        , mainCols = expInventoryCols.slice(-5)
      res = res.map(it => {
        var obj: any = {}
        cols.forEach((key, i) => {
          obj[key] = it[i]
        })
        return obj
      })
      mainCols.forEach((key, i) => {
        obj[key] = res1[len + i]
      })
      return { res, obj }
    })
  }).then(({ res, obj }) => {
    w.commonUtil.openWind(addSkipParam({ res }, obj, 'loadExcel'), '药品盘点编辑');
  })
}