(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  // @CODE
  w.FIRSTMODULENAME = new Class()
  if (w.commonUtil && w.commonUtil.define) {
    w.commonUtil.define([], function (exports) {
      that = w.commonUtil
      exports('MODULENAME', w.FIRSTMODULENAME)
    })
  } else {
    that = w.jtDzpj
  }
})(window, document);