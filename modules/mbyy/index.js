/* eslint-disable no-unused-vars */
export let Class = null, layForm
const Mbyy = function () {
  this.v = '1.0.1'
  layui.use(['form'], function () {
    layForm = layui.form
  })
}
Mbyy.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Mbyy