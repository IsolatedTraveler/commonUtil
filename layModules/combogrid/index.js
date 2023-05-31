/* eslint-disable no-unused-vars */
export { uuid } from "../../global/base/fun/1/uuid"
export let layTable = null, layer = null, Class = null
const Combogrid = function() {
  this.v = '1.0.1'
}
Combogrid.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Combogrid