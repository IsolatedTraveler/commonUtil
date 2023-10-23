/* eslint-disable no-unused-vars */
(function (w, d) {
  // @CODE
  function Render(config) {
    // @CODEMODULE
    return new Class(config)
  }
  jtLoad.define([], function (exports) {
    w.jtEInvoice = new EInvoice()
    exports('eqInvoice', w.jtEInvoice)
  });
})(window, document);