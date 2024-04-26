(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  var Authorization, contentType = 'application/json; charset=utf-8', dataConfig, ajaxSuccessCode = 1, ajaxErrorCode = -1;
  function setAuthorization(v) {
    return Authorization = v;
  }
  function setDataConfig(a) {
    return dataConfig = a;
  }
  function alertMsg(msg, title = '提示信息', judge = true) {
    if (judge) {
      if (window.layer) {
        window.layer.alert(msg);
      }
      else if ($.messager && $.messager.alert) {
        $.messager.alert({
          title,
          msg,
          icon: 'warning'
        });
      }
      else if (msg == '该方法依赖专有浏览器，请在专有浏览器中使用') {
        alert(msg + (judge === 'lib23/commonUtil' ? '' : judge));
      }
      else {
        alert('未提供报错解决方案：' + msg);
      }
    }
  }
  let system;
  function setJtPhisSystem(v) {
    return system = v;
  }
  let webName = '';
  function setWebNameVal(a) {
    return webName = a;
  }
  let urlServer, urlBase;
  function setUrlServerVal(a) {
    return urlServer = a;
  }
  function seturlBaseVal(a) {
    return urlBase = a;
  }
  let user;
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
  function getBrowserParam(mkbh, name) {
    if (system) {
      return JSON.parse(system.varget(mkbh, name) || null);
    }
    else {
      return tempData(`bro-${mkbh}-${name}`, undefined, sessionStorage);
    }
  }
  function setBrowserParam(mkbh, name, value = undefined) {
    if (system) {
      return system.varpost(mkbh, name, JSON.stringify(value));
    }
    else {
      return tempData(`bro-${mkbh}-${name}`, value, sessionStorage);
    }
  }
  function session(name, val = undefined, mkdm = 'that') {
    if (system) {
      if (val === undefined) {
        val = getBrowserParam(mkdm, name);
        return val;
      }
      else {
        setBrowserParam(mkdm, name, val);
      }
    }
    else {
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
  const ajaxTimeOut = 1000 * 60 * 3, ajaxJqMagicV2 = {
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
    let url;
    if (system) {
      url = JSON.parse(system.getmainurl()).data;
    }
    else {
      url = getConfig().magicServer;
    }
    return setUrlServerVal(getMainUrl(url));
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
  function debounce1(fun, delay) {
    let time = null;
    return function () {
      let args = arguments;
      clearTimeout(time);
      time = setTimeout(() => {
        fun.apply(that || this, args);
      }, delay);
    };
  }
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  var loadMsg, loadElem, msgElem, closeLoadEd;
  function setLoadElem() {
    loadElem = document.createElement('div');
    loadElem.setAttribute('class', 'jt-load jt-flex jt-abs');
    loadElem.setAttribute('center', true);
    loadElem.setAttribute('style', 'display: none');
    loadElem.innerHTML = '<p class="jt-loading"><span></span><span></span><span></span><span></span><span></span><span></span></p>';
    msgElem = document.createElement('p');
    loadElem.append(msgElem);
    loadMsg = { msgs: [] };
    closeLoadEd = debounce1(closeLoad, 10);
    document.body.append(loadElem);
  }
  function closeLoad() {
    if (loadMsg.msgs.length < 2) {
      loadElem.setAttribute('style', 'display: none');
    }
  }
  function loading(msg = undefined) {
    if (document.body) {
      let id = uuid();
      setPageTemp(loadElem, setLoadElem);
      msg && (msgElem.innerHTML = msg);
      loadMsg[id] = msg;
      if (loadMsg.msgs.length < 2) {
        loadElem.setAttribute('style', '');
      }
      loadMsg.msgs = Object.keys(loadMsg);
      return id;
    }
  }
  function loaded(i) {
    if (i !== undefined && loadMsg) {
      delete loadMsg[i];
      loadMsg.msgs = Object.keys(loadMsg);
      closeLoadEd();
    }
  }
  function ajaxError({ message, i }, { msg, isShowLoad }, res) {
    isShowLoad && loaded(i);
    if (msg) {
      // 提示
      alertMsg(msg + message);
    }
    return res;
  }
  function ajaxDealData(res, i, option, errCallBack, suuCallBack, url, data = {}, param = {}, config = {}, type = 'GET', async = false) {
    if (res.code === ajaxSuccessCode || res.code === undefined) {
      if (option.isShowLoad) {
        loaded(i);
      }
      return suuCallBack ? suuCallBack(res) : res;
    }
    else if (res.code == that.wjqCode && that.checkAuth) {
      if (!that.checkAuth(config, url, true)) {
        return ajax(url, data, param, option, config, type, async, errCallBack, suuCallBack);
      }
    }
    res = ajaxError({ message: res.message || res.msg, code: 0, i }, option, res);
    return errCallBack ? errCallBack(res) : res;
  }
  function ajaxPostData(data = {}, option = {}, config = {}, type = 'POST') {
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, option, config, type);
    }
    else {
      return JSON.stringify(Object.assign({}, user, data));
    }
  }
  function getAjaxRes(res) {
    try {
      return JSON.parse(res);
    }
    catch (e) {
      return res;
    }
  }
  function ajax(url, data = {}, param = {}, option = {}, config = {}, type = 'GET', async = false, errCallBack = undefined, suuCallBack = undefined) {
    var layerIndex, value;
    if (type === 'POST' && that.checkAuth) {
      that.checkAuth(config, url);
    }
    if (option.isShowLoad) {
      layerIndex = loading();
    }
    url = getAllUrl(url, option.urlType);
    url = getParamsUrl(param, url);
    window.$.ajax(Object.assign({
      type,
      url,
      async,
      data,
      contentType,
      timeOut: ajaxTimeOut,
      cache: false,
      success(res) {
        if (typeof res === 'string') {
          res = getAjaxRes(res);
        }
        value = ajaxDealData(res, layerIndex, option, errCallBack, suuCallBack, url, data, param, config, type, async);
      },
      error(e) {
        const res = { code: ajaxErrorCode, message: '网络连接超时', i: layerIndex };
        value = errCallBack ? errCallBack(res, option, e) : res;
      },
    }, config));
    return value;
  }
  // 异步
  function ajaxSync(url, data, param, option = {}, config, type) {
    return new Promise((resolve, reject) => {
      ajax(url, ajaxPostData(data, option, config, type), param, option, config, type, true, reject, resolve);
    });
  }
  // 同步
  function getAjax(url, data, option = {}, config = {}) {
    return ajax(url, option.param, data, option, config);
  }
  // 异步
  function getAjaxSync(url, data, option = {}, config = {}) {
    return ajaxSync(url, option.param, data, option, config, 'GET');
  }
  // 同步
  function commonHttppost(url, data, option = {}, config = {}) {
    return ajax(url, ajaxPostData(data, option, config), option.param, option, config, 'POST');
  }
  // 异步
  function commonQueryAsyncHttppost_callback(url, data, option = {}, config = {}) {
    return ajaxSync(url, data, option.param, option, config, 'POST');
  }
  function encryption(data) {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    return {
      data,
      sstoken: JSON.stringify(JSON.parse(getSystemVal("encryption", [data])).data),
    };
  }
  function dealAjaxData(data, { isNotGetUser, isBase64, isPwd } = {}, { contentType: content = contentType } = {}, type) {
    if (data && data.page) {
      data.pageNumber = data.page;
      data.pageSize = data.size;
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
    if (isPwd) {
      return encryption(data);
    }
    else if (isBase64) {
      return new Base64().encode(JSON.stringify(data));
    }
    else if (type !== 'GET') {
      if (content === 'application/json; charset=utf-8') {
        return JSON.stringify(data);
      }
      else {
        return { data: JSON.stringify(data) };
      }
    }
    else {
      return data;
    }
  }
  function magicCheckAuthV2(config, url, rest = false) {
    let magic = ajaxJqMagicV2;
    setMagicToken(magic, url, rest);
    config.headers = config.headers || {};
    config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
    return Authorization === true;
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
    let res = commonHttppost(magic.url, data, {
      param,
      isNotGetUser: true,
      isNotWrapped: true
    }) || {};
    setAuthorization(res.Authorization || (res.data || {}).accessToken || true);
  }
  function getJtPhisSystem() {
    let systemV = w.jthisJsObject;
    if (systemV) {
      setJtPhisSystem(systemV.jthis);
    }
  }
  function setWebName() {
    var a = getBaseUrl().split('/'), b = (a.pop() || a.pop());
    setWebNameVal(`/${b}/`);
  }
  const Class = function () {
    that = this;
    getJtPhisSystem();
    setWebName();
    if (layui) {
      layui.use(['layer']);
    }
  };
  Class.prototype = { commonHttppost: commonHttppost, commonQueryAsyncHttppost_callback: commonQueryAsyncHttppost_callback, getAjax: getAjax, getAjaxSync: getAjaxSync, getConfig: getConfig, checkAuth: magicCheckAuthV2, dealAjaxData: dealAjaxData };
  w.jtUtil = new Class();
})(window, document);
