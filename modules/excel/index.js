/* eslint-disable no-unused-vars */
export let Class = null, layTable, layer, layForm
export * from './var/const'
const Excel = function () {
  this.v = '1.0.1'
  layui.use(['form', 'table', 'layer'], function () {
    layTable = layui.table
    layer = layui.layer
    layForm = layui.form
  })
}
Excel.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Excel