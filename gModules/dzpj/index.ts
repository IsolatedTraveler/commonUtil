/* eslint-disable no-unused-vars */
export let Class = null, that: any
export * from './var/const'
import '../../g-lobal/const'
const Dzpj = function (this: any) {
  this.v = '1.0.1'
}
Dzpj.prototype = {
  render(config: any) {
    return new Render(config)
  }
}
export default Dzpj