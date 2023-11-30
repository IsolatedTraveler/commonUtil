export { uuid } from "../../g-lobal"

/* eslint-disable no-unused-vars */
export let layTable = null, Class = null
const Combogrid = function () {
  this.v = '1.0.1'
}
Combogrid.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default Combogrid