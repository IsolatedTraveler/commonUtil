/* eslint-disable no-unused-vars */
export let Class = null
export * from './var/const'
const Excel = function () {
  this.v = '1.0.1'
}
Excel.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Excel