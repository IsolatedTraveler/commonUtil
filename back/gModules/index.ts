export const FIRSTMODULENAME = function (this: any) {
  this.v = '1.0.1'
}
FIRSTMODULENAME.prototype = {
  render(config: any) {
    return new Render(config)
  }
}
export default FIRSTMODULENAME