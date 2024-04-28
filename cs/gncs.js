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
  let webName = '';
  function tempData(name, val, obj = sessionStorage) {
    let name1 = webName + name;
    if (val === undefined) {
      var data = obj.getItem(name1) || obj.getItem(name) || 'null';
      return JSON.parse(data);
    }
    else if (val === null) {
      obj.removeItem(name1);
    }
    else {
      obj.setItem(name1, JSON.stringify(val));
    }
  }
  function setPageTemp(val, callBack, param = undefined) {
    if (!val) {
      return callBack(param);
    }
    return val;
  }
  var Authorization, dataConfig;
  function setAuthorization(v) {
    return Authorization = v;
  }
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
  let user;
  function session(name, val = undefined, mkdm = 'that') {
    {
      return tempData(name, val, sessionStorage);
    }
  }
  function getConfig(key = '') {
    setPageTemp(dataConfig, setConfig);
    return key ? dataConfig[key] : dataConfig;
  }
  function setConfig() {
    return setDataConfig(getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }));
  }
  const ajaxJqMagicV2 = {
    url: '/magic/oauth/login',
    wjqCode: 101,
    AuthorizationName: 'accessToken',
    user: {
      zh: '',
      mm: ''
    }
  };
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
  function errFormat(message, code = -1) {
    return { code, message, data: {} };
  }
  function ajaxPostData(data = {}, option = {}, config = {}, type = 'POST') {
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, option, config, type);
    }
    else {
      return JSON.stringify(Object.assign({}, user, data));
    }
  }
  function magicCheckAuthV2(config, url, rest = false) {
    let magic = ajaxJqMagicV2;
    setMagicToken(magic, url, rest);
    config.headers = config.headers || {};
    config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
    return Authorization === true;
  }
  function magicData2(data, { isNotGetUser, isBase64, isPwd, isNotWrapped } = {}) {
    if (data.pageSize) {
      data.page = data.pageNumber;
      data.size = data.pageSize;
    }
    if (!isNotGetUser) {
      // eslint-disable-next-line no-import-assign
      let user = getUser() || {};
      data = Object.assign({}, {
        czryid: user.ryid,
        czryjgid: user.jgid,
        czryjgmc: user.jgmc,
        czryjgjc: user.jgjc,
        czryyhm: user.yhm,
        czryxm: user.xm || user.username,
        superadmin: user.superadmin
      }, data);
    }
    if (isNotWrapped) {
      return JSON.stringify(data);
    }
    return JSON.stringify({ data });
  }
  function setMagicToken(magic, url, rest) {
    that.wjqCode = magic.wjqCode;
    if (magic.url === url) {
      return;
    }
    if (rest) {
      getMagicToken(magic);
    }
    else if (!Authorization || Authorization == magic.Authorization) {
      getMagicToken(magic);
    }
  }
  function getMagicToken(magic) {
    const user = session('magicUser') || (session('magic') || {}).user || magic.user, param = magic.isParam ? user : undefined, data = magic.isParam ? undefined : user;
    let res = that.commonHttppost(magic.url, data, {
      param,
      isNotGetUser: true,
      isNotWrapped: true
    }) || {};
    setAuthorization(res.Authorization || (res.data || {}).accessToken || true);
  }
  // 请求超时时间设置（3分钟）
  const ajaxTimeOut = 1000 * 60 * 3, ajaxRerr = {
    400: '客户端请求的语法错误，服务器无法理解请求',
    401: '请求要求用户进行身份认证',
    403: '服务器已接受客户端的请求，但是拒绝执行此请求。',
    404: '请求服务不存在',
    408: '请求超时',
    409: '请求的资源与服务器中的资源冲突',
    413: '请求内容过大，超出服务器允许的范围',
    415: '服务器无法处理请求附带的媒体格式',
    500: '服务器遇到了不知道如何处理的情况',
    502: '作为网关或代理工作的服务器从上游服务器收到了无效的响应',
    503: '服务器目前无法使用（由于超载或停机维护）',
    504: '作为网关或代理的服务器未能及时从上游服务器收到请求'
  };
  /**
  * 发送同步请求
  * @param {string} url - 请求地址
  * @param {*} data - 请求数据
  * @param {*} option - 请求选项
  * @param {*} config - 配置信息
  * @param {string} type - 请求方式
  */
  function dealXhrRes(xhr) {
    if (xhr.status >= 200 && xhr.status < 300) {
      return JSON.parse(xhr.responseText);
    }
    else {
      return errFormat('请求失败：' + ajaxRerr[xhr.status]);
    }
  }
  function sync(url, data = {}, param = {}, option = {}, config = {}, type) {
    try {
      const xhr = setXhr(url, type, option.urlType, param, config, false);
      const time = setTimeout(() => {
        xhr.abort();
      }, ajaxTimeOut);
      console.time();
      xhr.send(data);
      console.timeEnd();
      clearTimeout(time);
      return dealXhrRes(xhr);
    }
    catch (e) {
      return errFormat('请求过程中发生错误：' + (e.message || e));
    }
  }
  /**
  * 初始化XMLHttpRequest对象并配置请求
  * @param {string} url - 请求URL
  * @param {string} type - 请求类型
  * @param {boolean} async - 是否异步请求
  * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
  */
  function setXhr(url, type, urlType, param, config, async) {
    if (type === 'POST' && that.checkAuth) {
      that.checkAuth(config, url);
    }
    url = getAllUrl(url, urlType);
    url = getParamsUrl(param, url);
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, async);
    xhr.setRequestHeader('Content-Type', contentType);
    return xhr;
  }
  /**
  * 异步发送请求
  * @param {string} url - 请求URL
  * @param {*} data - 请求数据
  * @param {*} option - 请求选项
  * @param {*} config - 配置信息
  * @param {string} type - 请求类型
  * @returns {Promise} 返回处理Promise
  */
  function async(url, data = {}, param = {}, option = {}, config = {}, type) {
    return new Promise((resolve, reject) => {
      try {
        const xhr = setXhr(url, type, option.urlType, param, config, true);
        xhr.timeout = ajaxTimeOut;
        xhr.onload = () => {
          resolve(dealXhrRes(xhr));
        };
        xhr.onerror = () => {
          reject(errFormat('请求失败：网络错误'));
        };
        xhr.ontimeout = () => {
          reject(errFormat('请求失败：网络连接超时'));
        };
        xhr.send(data);
      }
      catch (e) {
        return errFormat('请求过程中发生错误：' + (e.message || e));
      }
    });
  }
  // 异步请求
  function getAjaxAsync(url, data, option = {}, config = {}) {
    return async(url, option.param, data, option, config, 'GET');
  }
  function commonQueryAsyncHttppost_callback(url, data, option = {}, config = {}) {
    return async(url, ajaxPostData(data, option, config), option.param, option, config, 'POST');
  }
  // 同步请求
  function getAjax(url, data, option = {}, config = {}) {
    return sync(url, option.param, data, option, config, 'GET');
  }
  function commonHttppost(url, data, option = {}, config = {}) {
    return sync(url, ajaxPostData(data, option, config), option.param, option, config, 'POST');
  }
  const Class = function () {
    that = this;
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { commonHttppost, commonQueryAsyncHttppost_callback, getAjax, getAjaxAsync, checkAuth: magicCheckAuthV2, dealAjaxData: magicData2 };
  w.jtUtil = new Class();
})(window, document);
jtUtil.commonHttppost('/magic/jcgl/other/s-bjg', { bm: 'sqldy' }, { isNotGetUser: true })