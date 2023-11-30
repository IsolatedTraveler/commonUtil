import { Render } from "./render"

export { uuid } from "../../g-lobal"

/* eslint-disable no-unused-vars */
const Combogrid1 = function (this: any) {
  this.v = '1.0.1'
}
Combogrid1.prototype = {
  render() {
    return new Render()
  }
}
export default Combogrid1