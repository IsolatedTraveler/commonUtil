(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  const contentType = 'application/json;charset=UTF-8';
  function dealsUrl(url = '', base) {
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
  function getParamsUrl(obj, url = '') {
    return url ? appendParamsToUrl(obj, url) : getObjToUrl(obj);
  }
  function appendParamsToUrl(obj, url) {
    const baseUrl = new URL(url);
    const searchParams = new URLSearchParams(baseUrl.search);
    Object.entries(obj).forEach(([key, value]) => {
      searchParams.set(key, encodeUrlParamValue(value));
    });
    baseUrl.search = searchParams.toString();
    return url.toString();
  }
  function encodeUrlParamValue(value) {
    return value ? encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value) : '';
  }
  function getObjToUrl(obj) {
    return Object.entries(obj).map(([key, value]) => {
      return `${key}=${encodeUrlParamValue(value)}`;
    }).join('&');
  }
  function setPageTemp(val, callBack, param = undefined) {
    if (!val) {
      return callBack(param);
    }
    return val;
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
  function getConfig(key = '') {
    setPageTemp(dataConfig, setConfig);
    return key ? dataConfig[key] : dataConfig;
  }
  function setConfig() {
    return setDataConfig(getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }));
  }
  const urlRegV = /\/webs\/|\/public\/|\/public21\/|\/public23\/|\/lib\/|\/lib21\/|\/lib23\/|\/.+\[^\/].js|\/[^/]+\.html/;
  function getBaseUrl() {
    return setPageTemp(urlBase, setBaseUrl);
  }
  function setBaseUrl() {
    let url = window.location.href;
    seturlBaseVal((url.split(urlRegV)[0] + '/').replace(/\/+/g, '/'));
    return urlBase;
  }
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
  function setServiceUrl() {
    return setUrlServerVal(getMainUrl(getConfig().magicServer));
  }
  function getServiceUrl() {
    return setPageTemp(urlServer, setServiceUrl);
  }
  function getAllUrl(url, lx) {
    if (/^http/.test(url)) {
      return url;
    }
    else if (lx === 'origin') {
      return dealsUrl(url, getBaseUrl());
    }
    else {
      return dealsUrl(url, getServiceUrl());
    }
  }
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { getAllUrl, getParamsUrl };
  w.jtUtil = new Class();
})(window, document);
jtUtil.commonHttppost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })