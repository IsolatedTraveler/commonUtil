/* eslint-disable no-unused-vars */
(function (w, d) {
  // @CODE
  function Render(config) {
    // @CODEMODULE
    return new Class(config)
  }
  commonUtil.define(['table'], function (exports) {
    layTable = layui.table
    exports('excel', new Excel())
  });
})(window, document);