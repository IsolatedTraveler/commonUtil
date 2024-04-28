(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  /**
  * @description 从给定的URL数组或单个URL字符串中，提取与当前页面起源匹配的首要URL。
  * 如果提供的是字符串且不为空，直接返回该字符串。
  * 若为数组，则遍历查找包含当前页面起源的URL，找到则返回；否则返回数组中的第一个URL。
  *
  * @param {string | string[]} urlsArray - 要检查的URL数组或单个URL字符串。
  * @returns {string} 与当前页面起源匹配的URL，或数组中的首个URL。
  */
  function extractPrimaryUrl(urlsArray) {
    if (typeof urlsArray === 'string')
      return urlsArray;
    for (var index = 0; index < urlsArray.length; index++) {
      if (urlsArray[index].includes(location.origin)) {
        return urlsArray[index];
      }
    }
    return urlsArray[0];
  }
  // 匹配特定URL模式的正则表达式
  const urlPattern = /\/webs\/|\/public\/|\/public21\/|\/public23\/|\/lib\/|\/lib21\/|\/lib23\/|\/.+\[^\/].js|\/[^/]+\.html/;
  var dataConfig;
  function setDataConfig(a) {
    return dataConfig = a;
  }
  function setPageTemp(val, callBack, param = undefined) {
    if (!val) {
      return callBack(param);
    }
    return val;
  }
  function getConfig(key = '') {
    setPageTemp(dataConfig, setConfig);
    return key ? dataConfig[key] : dataConfig;
  }
  function setConfig() {
    return setDataConfig(getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }));
  }
  var appBaseUrl // 应用基础URL
    , serverUrl // 服务端URL
    ; // 存储配置数据
  /**
  *  @description 设置应用程序的基础URL。
  * 此函数从当前窗口的location.href中提取协议、域名和端口部分，
  * 然后确保URL以单个斜杠结尾。该URL用于作为应用内其他相对URL的基准。
  * @returns {string} 应用程序的基础URL。
  */
  function setAppBaseUrl() {
    let url = window.location.href;
    return appBaseUrl = (url.split(urlPattern)[0] + '/').replace(/\/+/g, '/');
  }
  /**
  *  @description 设置服务端URL。此函数从应用程序配置中提取主要的服务端URL。
  * 首先通过`getConfig()`获取配置信息，然后从配置的`magicServer`属性中提取主要URL。
  * @returns {string} 设置后的服务端URL。
  */
  function setServerUrl() {
    return serverUrl = extractPrimaryUrl(getConfig().magicServer);
  }
  /**
  * @description 获取当前设置的应用程序基础URL。如果尚未设置，此函数会触发应用程序基础URL的初始化过程。
  * @returns {string} 应用程序的基础URL。
  */
  function getAppBaseUrl() {
    return setPageTemp(appBaseUrl, setAppBaseUrl);
  }
  /**
  * @description 获取服务端URL。如果尚未设置，此函数会触发服务端URL的初始化过程。
  * @returns {string} 当前设置的服务端URL。
  */
  function getServerUrl() {
    return setPageTemp(serverUrl, setServerUrl);
  }
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { getAppBaseUrl, getServerUrl };
  w.jtUtil = new Class();
})(window, document);
// jtUtil.commonHttppost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })