/* eslint-disable no-unused-vars */
export let Class = null
export * from './var/const'
const Mbyy = function () {
  this.v = '1.0.1'
}
Mbyy.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Mbyy