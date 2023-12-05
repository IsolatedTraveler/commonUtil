/* eslint-disable no-unused-vars */
(function(w, d) {
  // @CODE
  function Render(config) {
    // @CODEMODULE
    return new Class(config)
  }
  layui.define(['layer', 'form', 'table', 'laydate'], function(exports) {
    layTable = layui.table
    layer = layui.layer
    exports('jtEditTable', new JtEditTable())
  });
})(window, document);