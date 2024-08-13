(function (w, d) {
  // @CODE
  function Render(config) {
    let that
    // @CODEMODULE
    return new Class(config)
  }
  w.FIRSTMODULENAME = new FIRSTMODULENAME()
  if (w.commonUtil && w.commonUtil.define) {
    w.commonUtil.define([], function (exports) {
      exports('MODULENAME', w.FIRSTMODULENAME)
    })
  }
})(window, document);