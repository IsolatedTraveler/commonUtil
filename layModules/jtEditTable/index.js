/* eslint-disable no-unused-vars */
export { uuid } from "../../global/fun/uuid"
export let layTable = null, layer = null, Class = null
const JtEditTable = function() {
  this.v = '1.0.1'
}
JtEditTable.prototype = {
  render(config) {
    return new Render(config)
  }
}
export default JtEditTable