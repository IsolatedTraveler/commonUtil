/* eslint-disable no-unused-vars */
export let Class = null, layTable, layer
export * from './var/const'
const Excel = function () {
  this.v = '1.0.1'
  layui.use(['table', 'layer'], function () {
    layTable = layui.table
    layer = layui.layer
  })
}
Excel.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Excel