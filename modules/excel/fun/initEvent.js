// eslint-disable-next-line no-unused-vars
import { dataObj, fbData, primaryKey, qTable, tableSelectKey, zbData, zbDataObj } from "../var/index"

export function initEvent() {
  layui.use(['form'], () => {
    layui.form.on('select(zb)', function ({ value }) {
      var data = tableSelectKey.filter(({ id }) => !new RegExp(id).test(value))
      commonUtil.setSelectOption({
        elem: '[name=fjb]',
        data
      })
      zbData = []
      zbDataObj = {}
      value.split(',').forEach(key => {
        var v = JSON.parse(JSON.stringify(dataObj[key]))
        zbData = zbData.concat(v)
        zbDataObj[key] = v
      })
      qTable.tableReload(zbData);
    })
    layui.form.on('select(fjb)', function ({ value }) {
      fbData = []
      value.split(',').forEach(key => {
        fbData = fbData.concat(JSON.parse(JSON.stringify(dataObj[key])))
      })
      setTimeout(() => {
        qTable.setHeight()
      }, 100);
    })
    layui.form.on('select(col)', function ({ value }) {
      primaryKey = value.split(',')
    })
  })
}