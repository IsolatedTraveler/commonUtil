/* eslint-disable no-unused-vars */
export let Class = null
const Excel = function () {
  this.v = '1.0.1'
}
Excel.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Excel