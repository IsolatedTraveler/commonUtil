// eslint-disable-next-line no-unused-vars
import { dataObj, fbData, primaryKey, qTable, tableSelectKey, zbData } from "../var/index"
function setData(value, data) {
  value && value.split(',').forEach(key => {
    var v = JSON.parse(JSON.stringify(dataObj[key]))
    data = data.concat(v)
  })
  return data
}
export function initEvent() {
  layui.use(['form'], () => {
    layui.form.on('select(zb)', function ({ value }) {
      var data = tableSelectKey.filter(({ id }) => !new RegExp(id).test(value))
      commonUtil.setSelectOption({
        elem: '[name=fjb]',
        data
      })
      zbData = setData(value, [])
      qTable.tableReload(zbData);
    })
    layui.form.on('select(fjb)', function ({ value }) {
      fbData = setData(value, [])
      setTimeout(() => {
        qTable.setHeight()
      }, 100);
    })
    layui.form.on('select(col)', function ({ value }) {
      primaryKey = value.split(',')
    })
  })
}