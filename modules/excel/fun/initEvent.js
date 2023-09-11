import { dataObj, qTable, tableSelectKey, zbData } from "../var/index"

export function initEvent() {
  layui.use(['form'], () => {
    layui.form.on('select(zb)', function ({ value }) {
      var data = tableSelectKey.filter(({ id }) => !new RegExp(id).test(value))
      commonUtil.setSelectOption({
        elem: '[name=fjb]',
        data
      })
      zbData = []
      value.split(',').forEach(key => {
        zbData = zbData.concat(dataObj[key])
      })
      qTable.tableReload(zbData);
    })
    layui.form.on('select(fjb)', function () {
      qTable.setHeight()
    })
  })
}