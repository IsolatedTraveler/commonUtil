(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  // 将相对URL转换为绝对URL，处理'./', '../', 和基本路径。
  function resolveRelativeUrl(url, base) {
    if (/^http[s]*:\/\//i.test(url)) {
      return url;
    }
    const baseUrl = getUrl(base);
    let pathSegments = baseUrl.pathname.split('/').filter(Boolean);
    url = url.replace(/^\.\//, '').replace(/\/$/, ''); // 移除开头的"./"和尾部的"/"
    if (url.startsWith('../')) {
      const levelUp = url.split('/').filter(part => part === '..').length;
      pathSegments = pathSegments.slice(0, -levelUp);
      url = url.replace(/\.\.\//g, '');
    }
    pathSegments = pathSegments.concat(url.split('/').filter(Boolean)); // 合并路径段，忽略空字符串
    return `${baseUrl.origin}/${pathSegments.join('/')}`;
  }
  function getUrl(url) {
    if (url instanceof URL || url instanceof Location) {
      return url;
    }
    if (typeof url === 'string') {
      try {
        return new URL(url);
      }
      catch (error) {
        // 如果字符串不是有效的URL格式，可以选择抛出错误或默认处理
        console.error('Invalid URL:', url);
      }
    }
    return location;
  }
  var dataConfig;
  function setDataConfig(a) {
    return dataConfig = a;
  }
  let urlServer, urlBase;
  function setUrlServerVal(a) {
    return urlServer = a;
  }
  function seturlBaseVal(a) {
    return urlBase = a;
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
  const urlRegV = /\/webs\/|\/public\/|\/public21\/|\/public23\/|\/lib\/|\/lib21\/|\/lib23\/|\/.+\[^\/].js|\/[^/]+\.html/;
  function getMainUrl(arr) {
    if (typeof arr === 'string') {
      return arr;
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i].indexOf(location.origin) > -1) {
        return arr[i];
      }
    }
    return arr[0];
  }
  // 分析当前页面URL，确定应用的基础URL。
  function determineApplicationBaseUrl() {
    return setPageTemp(urlBase, setBaseUrl);
  }
  function setBaseUrl() {
    let url = window.location.href;
    seturlBaseVal((url.split(urlRegV)[0] + '/').replace(/\/+/g, '/'));
    return urlBase;
  }
  // 获取已设置的服务端URL，若未设置则初始化。
  function obtainServiceEndpoint() {
    return setPageTemp(urlServer, setServiceUrl);
  }
  function setServiceUrl() {
    return setUrlServerVal(getMainUrl(getConfig().magicServer));
  }
  // 根据给定URL和类型，构建完整的绝对URL。
  function assembleAbsoluteUrl(url, type) {
    if (/^http/.test(url)) {
      return url;
    }
    else if (type === 'origin') {
      return resolveRelativeUrl(url, determineApplicationBaseUrl());
    }
    else {
      return resolveRelativeUrl(url, obtainServiceEndpoint());
    }
  }
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