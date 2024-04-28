(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { getAllUrl: assembleAbsoluteUrl, getParamsUrl: determineApplicationBaseUrl, getParamsUrl: obtainServiceEndpoint };
  w.jtUtil = new Class();
})(window, document);
jtUtil.commonHttppost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })