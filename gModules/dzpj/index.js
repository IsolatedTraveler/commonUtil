/* eslint-disable no-unused-vars */
export let Class = null
export * from './var/const'
const Dzpj = function () {
  this.v = '1.0.1'
}
Dzpj.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Dzpj