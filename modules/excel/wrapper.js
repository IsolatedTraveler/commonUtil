/* eslint-disable no-unused-vars */
(function (w, d) {
  // @CODE
  function Render(config) {
    // @CODEMODULE
    return new Class(config)
  }
  commonUtil.define(['table', 'layer'], function (exports) {
    layTable = layui.table
    layer = layui.layer
    exports('excel', new Excel())
  });
})(window, document);