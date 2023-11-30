import { Class } from "./combogrid";
export let layTable = null, layer = null
export function Render(config) {
  // @CODE
  return new Class(config)
}
layui.define(['table', 'layer'], function (exports) {
  layTable = layui.table
  layer = layui.layer
  exports('combogrid', new Combogrid())
});