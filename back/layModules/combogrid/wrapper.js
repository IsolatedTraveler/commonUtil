/* eslint-disable no-unused-vars */
(function(w, d) {
  // @CODE
  function Render(config) {
    // @CODEMODULE
    return new Class(config)
  }
  layui.define(['table', 'layer'], function(exports) {
    layTable = layui.table
    layer = layui.layer
    exports('combogrid', new Combogrid())
  });
})(window, document);