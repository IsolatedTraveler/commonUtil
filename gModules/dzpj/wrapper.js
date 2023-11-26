/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function (w, d) {
  let that
  // @CODE
  w.FIRSTMODULENAME = new Class()
  commonUtil && commonUtil.define ? commonUtil.define([], function (exports) {
    that = commonUtil
    exports('MODULENAME', w.FIRSTMODULENAME)
  }) : (that = {
    commonHttppost: commonHttppost,
    getAjax: getAjax,
    getConfig: getConfig
  })
})(window, document);