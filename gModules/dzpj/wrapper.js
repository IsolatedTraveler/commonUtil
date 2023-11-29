/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
(function (w, d) {
  let that
  // @CODE
  w.FIRSTMODULENAME = new Class()
  if (commonUtil && commonUtil.define) {
    commonUtil.define([], function (exports) {
      that = commonUtil
      exports('MODULENAME', w.FIRSTMODULENAME)
    })
  } else {
    that = {
      commonHttppost: commonHttppost,
      getAjax: getAjax,
      getConfig: getConfig
    }
    setWebName()
  }
})(window, document);