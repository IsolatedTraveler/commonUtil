(function (w, d) {
  let that,
  urlRegV = '/webs/|/public/|/public21/|/lib/|/lib21/|/.+\\[^/].js|/[^/]+\\.html';
  let webName, webNameReg, jse, promiseResove, promiseCore, BASE64, loadElem, msgElem, loadMsg, closeLoadEd
    , srcWEventInputNot = ':not([lay-submit],[disabled],[readonly],.layui-table-edit)'
    , srcWEventKbjbg = `input[type="text"]${srcWEventInputNot},input[type="password"]${srcWEventInputNot},input:not([type])${srcWEventInputNot},textarea,td[data-edit],input[laydate][readonly],.layui-select-title input.jt-select:not(.layui-disabled)`, initPop = {
      libSite: '/lib',
      webName: '/his/',
      login: '../index.html',
      router: '/router.html',
      index: '/index.html',
      thirdBaseUrl: '',
      input: srcWEventKbjbg,
      name: 'commonUtil',
      isBase64: false,
      isPwd: true
    };
  let useSrcModule = {}, useModule = {}, useHead, thirdBaseUrl;
  let ajaxTimeOut = 1000 * 60 * 2,
    dataConfig,
    Authorization,
    jqUrl = '/oauth/token',
    jqMode = 'magic',
    contentType = 'application/json; charset=utf-8',
    jqModeUrl = {
      magic: '/oauth/token'
    };
  let urlBase, urlServer, urlHost, urlTp, urlImg, urlFace, urlUpload;
  let printCLodop;
  let user, userInfo, menu;
  var user$1 = {
    user, userInfo, menu
  };
  let winName = 'jt-index', rw, event = {
    alertPwd() {
      that.openPop({
        title: '修改密码',
        elem: "#alertPwd",
        area: '20em',
        btn1: '提交',
        btn2: '取消'
      });
    },
    exit() {
      that.exit();
    },
    logout() {
      that.logOut();
    }
  };
  let dic$1 = {
    xb: {2: '女', 1: '男'}
  };
  let dic = {}, ryxx = {};
  let TBox = '.layui-table-view>.layui-table-box', TMain = '>.layui-table-body,>.layui-table-fixed>.layui-table-body', TBody = '>table>tbody';
  let timeDiff, systemDataMkqx = {}, systemDataParam;
  let copyObj = '[object Array]', copyArr = '[object Object]';
  let shortcutKeys = {}, openPopIndex;
  function copyCheckData(d1, d2) {
    if (d1 && d2) {
      let t = Object.prototype.toString.call(d1);
      if (t === copyArr || t === copyObj) {
        t = Object.prototype.toString.call(d2);
        return t === copyArr || t === copyObj
      }
    }
    return false
  }
  function copyDeep(data, v) {
    for (var key in v) {
      if (copyCheckData(data[key], v[key])) {
        data[key] = copyDeep(data[key], v[key]);
      } else {
        data[key] = v[key];
      }
    }
    return data
  }
  function copy(data, v) {
    for (let key in v) {
      data[key] = v[key];
    }
    return data
  }
  function setPageTemp(val, callBack, param) {
    if (!val) {
      return callBack(param)
    }
    return val
  }
  function elemLoaded(e, resolve, reject) {
    var readyRegExp = navigator.platform === 'PLaySTATION 3' ? /^complete$/ : /^(complete|loaded)$/;
    if (e.type === 'load' || (readyRegExp.test((e.currentTarget || e.srcElement).readyState))) {
      resolve({code: '1', w: this.contentWindow, elem: this});
    } else {
      reject({code: '-1', w: this.contentWindow, elem: this});
    }
  }
  function syncWhile(judgeFun, callBack, param, timeOut = 10, total = 20, i = 0) {
    if (i > total) {
      return Promise.reject()
    } else {
      let judge = judgeFun(param);
      if (judge) {
        let code = judge.code;
        if (code === '1') {
          if (judge.msg) {
            console.error(judge.msg);
          }
          return Promise.resolve()
        } else if (code === '0') {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, timeOut);
          }).then(e => {
           return syncWhile(judgeFun, callBack, param, timeOut, total, ++i)
          })
        } else {
          return Promise.reject(judge)
        }
      } else {
        return callBack(param)
      }
    }
  }
  function ElemLoadEvent(node, resolve, reject) {
    reject = reject || resolve;
    $(node).on('load', function(e) {
      elemLoaded.call(this, e, resolve, reject);
    });
  }
  function setIframe(url, timeOut, resolve, reject) {
    let elem = d.createElement('iframe');
    elem.setAttribute('style', 'display: none');
    elem.src = url;
    d.body.appendChild(elem);
    ElemLoadEvent(elem, function(e) {
      if (timeOut != '-1') {
        setTimeout(() => {
          d.body.removeChild(elem);
        }, timeOut);
      }
      resolve && resolve(e, function() {
        d.body.removeChild(elem);
      });
    }, function(e) {
      d.body.removeChild(elem);
      reject && reject(e);
    });
  }
  function tempData(name, val, obj = sessionStorage) {
    let name1 = webName + name;
    if (val === undefined) {
      return JSON.parse(obj.getItem(name1)) ||  JSON.parse(obj.getItem(name))
    } else if (val === null) {
      obj.removeItem(name1);
    } else {
      obj.setItem(name1, JSON.stringify(val));
    }
  }
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  function srcBaseBaseFunUnique(it, keys) {
    if (keys) {
      return keys.map(key => it[key]).join('-')
    }
    return JSON.stringify(it)
  }
  function srcBaseBaseFunDealNumber(v) {
    if (!v) {
      return ['0', '']
    } else {
      v = v.toString().trim();
      if (/^[-0-9]*(\.[0-9]+)*$/.test(v)) {
        v = v.split('.');
        v[1] = v[1] ? v[1].slice(0, 15) : '';
        return v
      } else {
        return false
      }
    }
  }
  function unique(arr, keys) {
    let obj = {};
    arr.forEach(it => {
      obj[srcBaseBaseFunUnique(it, keys)] = it;
    });
    return Object.keys(obj).map(key => obj[key])
  }
  function calc(a, b, c, isNumber) {
    let result, aArr, bArr, aLen, bLen, len;
    aArr = srcBaseBaseFunDealNumber(a);
    if (aArr === false) {
      console.error('参数1不合法');
      return false
    }
    bArr = srcBaseBaseFunDealNumber(b);
    if (bArr === false) {
      console.error('参数2不合法');
      return false
    }
    aLen = aArr[1].length;
    bLen = bArr[1].length;
    len = Math.max(aLen, bLen);
    a = BigInt(aArr[0] + aArr[1]) * BigInt(Math.pow(10, len - aLen));
    b = BigInt(bArr[0] + bArr[1]) * BigInt(Math.pow(10, len - bLen));
    if (c === '+') {
      result = (a + b).toString();
    } else if (c === '-') {
      result = (a - b).toString();
    } else if (c === '*') {
      result = (a * b).toString();
      len = len * 2;
    } else if (c === '/') {
      let mod = a % b;
      result = ((a - mod) / b).toString();
      if (mod !== 0) {
        if (result === '0') {
          result = mod > 0 ? result : '-0';
        }
        result += '.' + (Number(mod) / Number(b)).toFixed(15).toString().split('.')[1];
      }
      len = 0;
    }
    if (len != 0 && result != 0) {
      if (result.length > len) {
        result = result.slice(0, -len) + '.' + result.slice(-len);
      } else {
        let arr = result.split('-'), judge = '';
        if (arr[1]) {
          judge = '-';
          result = arr[1];
        }
        len -= result.length;
        for (let i = 0; i< len; i++) {
          result = '0' + result;
        }
        result = judge + '0.' + result;
      }
    }
    if (isNumber) {
      return Number(result)
    } else {
      return result
    }
  }
  function toDecimalNumber(num, precision = 0, type = 1) {
    let f = parseFloat(num);
    if (isNaN(f)) {
      return num
    } else {
      if (type === 1) {
        return f.toFixed(precision)
      } else {
        let bs = Math.pow(10, precision), sl;
        if (type === 2) {
          sl = Math.floor(this.calc(f, bs, '*')).toString();
        } else {
          sl = Math.ceil(this.calc(f, bs, '*')).toString();
        }
        return sl.slice(0, -precision) + '.' + sl.slice(-precision)
      }
    }
  }
  function throttle(fun, delay) {
    let time = null;
    return function() {
      if (!time) {
        let args = arguments;
        time = setTimeout(() => {
          fun.apply(that, args);
          time = null;
        }, delay);
      }
    }
  }
  function debounce1(fun, delay) {
    let time = null;
    return function() {
      let args = arguments;
      clearTimeout(time);
      time = setTimeout(() => {
        fun.apply(that, args);
      }, delay);
    }
  }
  function debounce(fun, delay) {
    let time = null, resReject = null;
    return function() {
      let args = arguments;
      return new Promise((resolve, reject) => {
        if (resReject) {
          resReject();
        }
        clearTimeout(time);
        resReject = reject;
        time = setTimeout(() => {
          resReject = null;
          let a = fun.apply(that, args);
          if (a && a.__proto__ === Promise.prototype) {
            a.then(e => {
              resolve(e);
            }).catch(e => {
              reject();
            });
          } else {
            resolve();
          }
        }, delay);
      })
    }
  }
  function setBaseUrl() {
    let name = that.val('webName') || '', reg, url = w.location.href, matchArr;
    if (name) {
      reg = new RegExp(urlRegV + '|' + name);
    } else {
      reg = new RegExp(urlRegV);
    }
    urlBase = url.split(reg)[0];
    matchArr = url.match(reg);
    if (matchArr && matchArr[0] == name) {
      urlBase = urlBase + name;
    }
    urlBase = (urlBase + '/').replace(/\/+/g, '/');
    return urlBase
  }
  function getBaseUrl() {
    return setPageTemp(urlBase, setBaseUrl)
  }
  function dealsUrl(url = '', base) {
    if (!/^http[s]*:\/\//.test(url)) {
      base = base ? new URL(base) : location;
      let path = base.pathname.split('/');
      if (/^\.\//.test(url)) {
        path.pop();
        path.push(url.replace('./', ''));
      } else if (/^..\//.test(url)) {
        let v = url.split('/'), len = v.filter(it => it === '..').length;
        path.splice(-(len + 1));
        path.push(...v.splice(len));
      } else {
        path.push(url.replace(/^\/|\/$/g, ''));
      }
      return base.origin + '/' + path.filter(it => it).join('/')
    }
    return url
  }
  function getAllUrl(url, lx) {
    if (/^http/.test(url)) {
      return url
    } else if (lx === 'origin') {
      return dealsUrl(url, getBaseUrl())
    } else {
      return dealsUrl(url, that.getServiceUrl())
    }
  }
  function getUrlParams(key, url) {
    url = url || location;
    var search = decodeURIComponent(url.search).slice(1).split('&'), urlParam = {};
    search.forEach(function(it) {
      if (it) {
        it = it.split('=');
        try {
          urlParam[it[0]] = decodeURIComponent(it[1]);
        } catch (e) {
          urlParam[it[0]] = it[1];
        }
      }
    });
    return key ? urlParam[key] : urlParam
  }
  function getParamsUrl(obj, url){
    if (url) {
      url = new URL(url);
      obj = Object.assign(getUrlParams(null, url),obj);
      url = url.origin + url.pathname;
    } else {
      url = url || '';
    }
    let keys = Object.keys(obj);
    if (keys.length) {
      url += '?' + keys.map(key => {
        let v = obj[key];
        v = (v === null || v === undefined) ? '' : v;
        return key + '=' + encodeURIComponent(typeof v === 'object' ? JSON.stringify(v) : v)
      }).join('&');
    }
    return url
  }
  function assign() {
    let data, len = arguments.length, i = 0, judge = false;
    if (arguments[0] === true) {
      i = 1;
      judge = true;
    }
    data = arguments[i++] || {};
    for (; i < len; i++) {
      if (copyCheckData(data, arguments[i])) {
        data = judge ? copyDeep(data, arguments[i]) : copy(data, arguments[i]);
      }
    }
    return data
  }
  function closeLoad() {
    if (loadMsg.msgs.length < 2) {
      loadElem.setAttribute('style', 'display: none');
    }
  }
  function setLoadElem() {
    loadElem = d.createElement('div');
    loadElem.setAttribute('class', 'jt-load jt-flex jt-abs');
    loadElem.setAttribute('center', true);
    loadElem.setAttribute('style', 'display: none');
    loadElem.innerHTML = '<p class="jt-loading"><span></span><span></span><span></span><span></span><span></span><span></span></p>';
    msgElem = d.createElement('p');
    loadElem.append(msgElem);
    loadMsg = {msgs: []};
    closeLoadEd = debounce1(closeLoad, 10);
    d.body.append(loadElem);
  }
  function val(name, value) {
    if (value === undefined) {
      return initPop[name]
    } else {
      initPop[name] = value;
    }
  }
  function loading(msg) {
    if (d.body) {
      let id = uuid();
      setPageTemp(loadElem, setLoadElem);
      msg && (msgElem.innerHTML = msg);
      loadMsg[id] = msg;
      if (loadMsg.msgs.length < 2) {
        loadElem.setAttribute('style', '');
      }
      loadMsg.msgs = Object.keys(loadMsg);
      return id
    }
  }
  function loaded(i) {
    if (loadMsg) {
      delete loadMsg[i];
      loadMsg.msgs = Object.keys(loadMsg);
      closeLoadEd();
    }
  }
  function alertMsg(msg, judge = true) {
    judge && layui.layer.alert(msg);
  }
  function strToUrl(str, type) {
    return URL.createObjectURL(new Blob([str], {type}))
  }
  function config(obj = {}) {
    Object.assign(initPop, obj);
    webName = initPop.webName;
    webNameReg = new RegExp('^' + webName + '-');
    val('webNameReg', webNameReg);
  }
  function initConfig(obj = {}) {
    layui.assign = assign;
    config();
    return init()
  }
  function init() {
    let pro = [], i = that.loading();
    if (initPop.isPwd) {
      pro.push(that.loadPwdJs());
    }
    if (initPop.isBase64) {
      pro.push(that.use([{src: './encryption/BASE64.js'}]).then(e => {
        BASE64 = new Base64();
      }));
    }
    if (initPop.isMd5) {
      pro.push(that.use([{src: './encryption/md5.js'}]));
    }
    if (promiseCore) {
      promiseResove = promiseCore.then(e => {
        return Promise.all(pro).then(e => {
          that.loaded(i);
        })
      });
    } else {
      promiseResove = Promise.all(pro).then(e => {
        that.loaded(i);
      });
    }
    return promiseResove
  }
  function formatTreeData(data, id = 'id', pid = 'sjid', key = '') {
    var result = [], map = {'_formatTreeData': data};
    [].forEach.call(data, function(it) {
      map[key + it[id]] = it;
    });
    [].forEach.call(data, function(it) {
      var p = map[key + it[pid]];
      if (p) {
        p.children ? p.children.push(it) : p.children = [it];
        p.jtchild ? p.jtchild.push(it) : p.jtchild = [it];
      } else {
        result.push(it);
      }
    });
    result.__proto__ = map;
    return result
  }
  function local(name, val) {
    return tempData(name, val, localStorage)
  }
  function getBase64() {
    return BASE64
  }
  function getJse() {
    return jse
  }
  function loadPwdJs() {
    return that.use([
      {src: './encryption/sha256.js'},
      {src: './encryption/jsencrypt.min.js'}
    ]).then(e => {
      jse = new JSEncrypt();
      jse.setPublicKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh4Mzt/QVu7hw0cIZTzdNQRuXoD/+FZyv2Iby0syLYdq7/OQnMM4SQxtk8FFnEyuv6RkIYO4BcyP+Ut6GXtNDI9NGBDKY27MK91z/gTswDWC6fKyp8tGL6oQLxsI3aB05Yvl3D5VYc43mmbl4R6ITRhaYkXO5HAspFPi4au9cA/BycWieul3h9FeQzwDMO0xouHow5OVeTVfb5cEUV1B+BYDWTCS5MtYMjZftrW+Raum5yn/RFNL7Wy6v210gyav8UhFNwN08sfZZhjCvumnw3uKztIjAoU4OIWxI0IUwF+wDfjkMv81yh98V74mVziHWP2gg+IH9QC/jC/jMdUPYXQIDAQAB');
    })
  }
  function session(name, val) {
    return tempData(name, val, sessionStorage)
  }
  function setHostUrl() {
    let name = val('hostName');
    return urlHost = name ? (dealsUrl(name, getBaseUrl()) + '/') : getBaseUrl()
  }
  function getPath() {
    var sc = d.scripts, len = sc.length - 1, i = 0;
    for (; i < len; i++) {
      if (sc[i].readyState === 'interactive') {
        return sc[i].src
      }
    }
    return sc[i].src
  }
  function setTpUrl() {
    urlTp = getBaseUrl();
    return urlTp = urlTp.indexOf('127.0.0.1') !== -1 ? (val('imgUrl') || urlTp) : urlTp
  }
  function setImgUrl() {
    return urlImg = dealsUrl('rest/downLoadFileById/', that.getServiceUrl())
  }
  function setFaceUrl() {
    return urlFace = dealsUrl('/rest/facedetect', that.getConfig('faceurl') || that.getServiceUrl())
  }
  function setUploadUrl() {
    return urlUpload = that.getConfig('url_common_file')
  }
  function getHostUrl() {
    return setPageTemp(urlHost, setHostUrl)
  }
  function getJsUrl(d) {
    return d.currentScript ? (d.currentScript.src || getPath()) : getPath()
  }
  function getTpUrl(url = '') {
    return dealsUrl(url, setPageTemp(urlTp, setTpUrl))
  }
  function getFaceUrl() {
    return setPageTemp(urlFace, setFaceUrl)
  }
  function getImgUrl(id) {
    return dealsUrl(id, setPageTemp(urlImg, setImgUrl))
  }
  function getUploadUrl() {
    return setPageTemp(urlUpload, setUploadUrl)
  }
  function setThirdBaseUrl() {
    useHead = d.getElementsByTagName('head')[0];
    thirdBaseUrl = val('thirdBaseUrl');
  }
  function useLoading(param) {
    let src = param.src, node = d.createElement('script');
    useSrcModule[src] = {code: '0'};
    return new Promise((resolve, reject) => {
      node.async = true;
      node.charset = 'utf-8';
      node.src = src + '?version=' + (that.version || new Date().getTime());
      useHead.appendChild(node);
      ElemLoadEvent(node, resolve);
    }).then(e => {
      if (e.code === '-1') {
        e.code = '1';
        e.msg = src + ' 加载失败';
      }
      useSrcModule[src] = e;
      useHead.removeChild(node);
    })
  }
  function useLoadJudge(param) {
    return useSrcModule[param.src]
  }
  function useUrlLoadMods(callBack) {
    callBack.call(that, function(n, v) {
      useModule[n] = v;
    });
  }
  function use(arr, callBack) {
    setPageTemp(thirdBaseUrl, setThirdBaseUrl);
    if (!Array.isArray(arr)) {
      arr = [arr];
    }
    arr = arr.map(it => {
      return syncWhile(useLoadJudge, useLoading, {src: dealsUrl(typeof it === 'string'? it + '.js' : it.src, thirdBaseUrl)})
    });
    if (callBack) {
      Promise.all(arr).then(callBack);
    } else {
      return Promise.all(arr)
    }
  }
  function define(deeps, callBack) {
    if (typeof deeps === 'function') {
      useUrlLoadMods(deeps);
    } else {
      use(deeps, function() {
        useUrlLoadMods(callBack);
      });
    }
  }
  function ajaxError({ message, i }, { isShowLoad, msg } = {}, res) {
    isShowLoad && that.loaded(i);
    if (msg) {
      that.alertMsg(msg + message);
    }
    return res
  }
  function ajaxDealData(res, i, option, errCallBack, callBack) {
    if (res.code == 1 || res.code === undefined) {
      if (option.isShowLoad) {
        that.loaded(i);
      }
      return callBack ? callBack(res) : res
    } else {
      res = ajaxError({ message: res.message, code: 0, i }, option, res);
      return errCallBack ? errCallBack(res) : res
    }
  }
  function getAjaxRes(res) {
    try {
      return JSON.parse(res)
    } catch (e) {
      return res
    }
  }
  function ajax(url, data = {}, param = {}, option = {}, config = {}, type, async, errCallBack, callBack) {
    let layerIndex, value;
    if (type === 'POST' && jqMode && url !== jqModeUrl[jqMode]) {
      that.jqFun[jqMode](config);
    }
    if (option.isShowLoad) {
      layerIndex = that.loading();
    }
    data = that.dealAjaxData(data, option, type);
    url = getAllUrl(url, option.urlType);
    url = getParamsUrl(param, url);
    $.ajax({
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
        value = ajaxDealData(res, layerIndex, option, errCallBack, callBack);
      },
      error(e) {
        const res = { code: '-1', message: '网络连接超时', i: layerIndex };
        value = errCallBack ? errCallBack(res, option, e) : res;
      },
      ...config
    });
    console.log({
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
        value = ajaxDealData(res, layerIndex, option, errCallBack, callBack);
      },
      error(e) {
        const res = { code: '-1', message: '网络连接超时', i: layerIndex };
        value = errCallBack ? errCallBack(res, option, e) : res;
      },
      ...config
    });
    return value
  }
  function setConfig() {
    return dataConfig = getAjax('/public/data/config.json', {v: new Date().getTime()}, {msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true})
  }
  function ajaxASync(url, data, param, option, config, type = 'GET') {
    return ajax(url, data, param, option, config, type, false)
  }
  function ajaxSync(url, data, param, option, config, type = 'GET') {
    return new Promise((resolve, reject) => {
      ajax(url, data, param, option, config, type, true, reject, resolve);
    }).catch(res => ajaxError(res, option, res))
  }
  function getAjax(url, data, option = {}, config) {
    return ajaxASync(url, option.param, data, option, config)
  }
  function getAjaxSync(url, data, option = {}, config) {
    return ajaxSync(url, option.param, data, option, config)
  }
  function commonHttppost(url, data, option = {}, config) {
    return dealCsData(ajaxASync(url, data, option.param, option, config, 'POST'), url)
  }
  function commonQueryAsyncHttppost_callback(url, data, option = {}, config) {
    return dealCsData(ajaxSync(url, data, option.param, option, config, 'POST'), url)
  }
  function getConfig(key) {
    setPageTemp(dataConfig, setConfig);
    return key ? dataConfig[key] : dataConfig
  }
  function dealCsData(pro, url) {
    if (pro.code) {
      return getDealCsData(pro, url)
    } else {
      return pro.then(res => getDealCsData(res, url))
    }
  }
  function getDealCsData(data, url) {
    if (data.code == 500) {
      layui.layer.alert('该接口返回数据不符合规范，请检查接口：' + url);
      return { code: 1, data: [] }
    } else if (data.code == 2) {
      layui.layer.alert('请检查该接口必填校验：' + url);
      return { code: 1, data: [] }
    } else if (data.code == -1) {
      layui.layer.alert('用于测试环境调试接口，请判断是否调试该接口：' + url);
      return { code: 1, data: [] }
    }
    return data
  }
  function dealAjaxData(data, { isNotGetUser, contentType } = {}, type) {
    if (!isNotGetUser) {
      let user = that.getUser();
      if (user) {
        data = Object.assign({}, {
          czryid: user.ryid,
          czryjgid: user.jgid,
          czryjgmc: user.jgmc,
          czryjgjc: user.jgjc,
          czryyhm: user.yhm,
          czryxm: user.xm || user.username,
          superadmin: user.superadmin
        }, data);
        return data
      } else {
        that.logOut();
      }
    }
    if (!contentType && type !== 'GET') {
      return JSON.stringify(data)
    } else {
      return data
    }
  }
  function svgRender(id) {
    let elems = $(id || d).find('.jt-svg');
    [].forEach.call(elems, (el) => {
      el = $(el);
      let src = el.attr('src');
      getAjaxSync(dealsUrl(src, getBaseUrl())).then(res => {
        let svg = res.documentElement, nodes = svg.childNodes;
        nodes.forEach(function(node) {
          node.setAttribute('fill', '');
        });
        el.append(svg);
      });
    });
  }
  function down(url, name) {
    let a = d.createElement('a'), event = new MouseEvent('click');
    a.href = url;
    a.download = name || 'down';
    a.dispatchEvent(event);
  }
  const analysis = {
    sfzh(n) {
      let l = n.length, r, s;
      if (l === 15) {
        r = '19' + n.substr(6, 6);
        s = n.substr(12, 3);
      } else if (l === 18) {
        r = n.substr(6, 8);
        s = n.substr(14, 3);
      }
      return {csrq: r.substr(0, 4) + '-' + r.substr(4, 2) + '-' + r.substr(6, 2), xb: s % 2 === 1 ? '1' : '2'}
    }
  };
  function expExcel(param, type = '1') {
    let index = loading(), title = param.title || '导出';
    if (type === '1') {
      let elem = $(param.elem), body = elem.find('tbody').eq(0).clone().html(), html;
      body = body.replace(/(<td ((?!style)[^>])*)(style[='"]+)*([^>]*)(>)/g, function(a, b, c, d,e ,f) {
        if(d) {
          return b + d + "mso-number-format:'\\@';" + e + f
        } else {
          return b + ' style="mso-number-format:\'\\@\';"' + f
        }
      });
      html = [
        '<html xmlns:svg="http://www.w3.org/2000/svg"><head><meta name="content-type" content="text/html" charset="UTF-8"><title>',
        title,
        '</title></head><body>',
        '<table><thead>',
        param.addBefore || '',
        elem.find('thead').eq(0).html(),
        '</thead><tbody>',
        body,
        param.addAfter || '',
        '</tbody></table></body>'
      ].join('');
      down(strToUrl(html, 'application/vnd.ms-excel'), title + '.xls');
      loaded(index);
    } else {
      let pro = Promise.resolve();
      if (!BASE64) {
        val('isBase64', true);
        pro = init();
      }
      pro.then(e => {
        setIframe(getParamsUrl({
          data: BASE64.encode(JSON.stringify({data: that.getPostData(param.data, true), title, filename: param.filename || ''}))
        }, dealsUrl('/rest/exportExcel/' + param.mkbh, that.getServiceUrl())), 5 * 60 * 1000, function() {
          loaded(index);
        }, function() {
          loaded(index);
          layui.layer.alert(title + '下载失败：请联系管理员');
        });
        setTimeout(() => {
          loaded(index);
        }, 1000);
      });
    }
  }
  function layerLoading() {
    return layui.layer.load(2, {
      shade: [0.1, '#000']
    })
  }
  function openPop(options) {
    var content, type = 1, btn = options.btn || [], elem;
    if (options.url) {
      type = 2;
      content = dealsUrl(options.url);
      if (options.data) {
        content = getParamsUrl(options.data, content);
      }
    } else {
      elem = content = $(options.elem);
      if (options.name) {
        let suc = options.success, name = options.name;
        options.success = function() {
          let d = Object.assign({}, options.defaultData, options.data);
          if (!options.data) {
            var v = that.setFormVal(name), keys = Object.keys(v);
            keys.forEach(key => {
              v[key] = '';
            });
            d = Object.assign(v,  d);
          }
          that.setFormVal(name, d);
          suc && suc();
        };
      }
    }
    if (typeof btn === 'string') {
      btn = [btn];
    } else if (options.btn1) {
      btn[0] = options.btn1;
    }
    if (options.btn2) {
      btn[1] = options.btn2;
    }
    return layui.layer.open(Object.assign({
      type,
      shade: 'rgba(0,0,0,.3)',
      title: options.title,
      content,
      btnAlign: 'center',
      btn: options.btn === false ? false : btn.length ? btn : false,
      area: options.area || ['80%', '80%'],
      success(a, b) {
        options.success && options.success(a, b);
      },
      yes(a, b, c) {
        if (options.yes) {
          options.yes(a,b,c);
        } else {
          let btn = '[lay-submit]:not(jt-ignore)';
          if (elem) {
            btn = elem.find(btn);
          } else {
            btn = b.find('iframe')[0].contentWindow.$(btn);
          }
          if (btn[1]) {
            btn = btn.filter(function(i, it) {
              return $(it).attr('jt-trigger') == 'parent'
            });
          }
          if (btn[0]) {
            btn.trigger('click');
          }
        }
        return false
      },
      ...(options.btnEvent || {})
    }, options.cover))
  }
  function getToken(config) {
    let magic = getConfig('magic');
    Authorization = that.session('Authorization') || magic.Authorization;
    if (Authorization && Authorization == magic.Authorization) {
      setToken(magic.user);
    }
    config.headers = config.headers || {};
    config.headers.Authorization = Authorization;
  }
  function setToken(param) {
    that.session('Authorization', Authorization);
    let res = commonHttppost(jqUrl, {}, {param, isNotGetUser: true}, {headers: {Authorization}});
    Authorization = res.Authorization;
    that.session('Authorization', Authorization);
  }
  function setPrinted() {
    if (w.getCLodop) {
      printCLodop = w.getCLodop();
      printCLodop.SET_LICENSES(getConfig('lodop_licenses_name'), getConfig('lodop_licenses_id'), '', '');
    } else {
      layui.layer.alert('未引入Clodop插件');
    }
    return printCLodop
  }
  function setPrint() {
    return setPageTemp(printCLodop, setPrinted)
  }
  function getPrint() {
    if (setPrint()) {
      let len = printCLodop.GET_PRINTER_COUNT(), arr = [];
      for(let i = 0; i < len; i++) {
        let mc = printCLodop.GET_PRINTER_NAME(i);
        arr.push({id: mc, mc});
      }
      return arr
    }
  }
  function printSetHtml(obj = {}) {
    let i = loading('加载打印数据中');
    obj.bj1 = 0;
    obj.bj2 = 0;
    obj.title = obj.title || '标准打印';
    if (obj.url) {
      setIframe(getParamsUrl(obj.data || {}, dealsUrl(obj.url)), -1 , function(e, callBack) {
        try {
          delete obj.url;
          obj.w = w;
          e.w.index.print(obj, function(res) {
            if (res && res.code !== '1') {
              layui.alert.msg(res.msg);
            }
            callBack();
            loaded(i);
          });
        } catch (e) {
          loaded(i);
          layui.layer.alert('打印页面未提供打印功能，请联系管理员！');
        }
      });
    } else {
      let elems = 'page:not(.print-hide)';
      if (obj.selectedId) {
        elems = `page[jt-page-id="${obj.selectedId}"]:not(.print-hide)`;
      }
      if (obj.charts) {
        obj.charts.forEach(chart => {
          chart.toImg();
        });
      }
      elems = $(elems);
      obj.val = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="${dealsUrl(obj.css || '/public21/css/print.css', getBaseUrl())}" />
        <style>page{margin: 0 !important;}</style>
        <title>${obj.title}</title>
      </head>
      <body>
        ${[].map.call(elems, el => {
          $(el).find('textarea').each((i, e) => {
            e.innerHTML = e.value;
          });
          $(el).find('input').each((i, e) => {
            e.setAttribute('value', e.value);
          });
          return el.outerHTML.replace(/<(textarea|input)/g, '<$1 readonly')
        }).join('')}
      </body>
      <html>`;
      loaded(i);
      print(obj);
    }
  }
  function print(obj = {}) {
    let dycs = local(obj.name || 'dycssz') || {}, i = loading();
    obj = Object.assign({}, dycs, obj);
    try {
      if (setPrint()) {
        printCLodop.PRINT_INIT(obj.title || '打印');
        obj.defPrint && printCLodop.SET_PRINTER_INDEX(obj.defPrint || obj.mrdyj);
        obj.size && printCLodop.SET_PRINT_PAGESIZE(...obj.size);
        obj = Object.assign({bj1: 8, bj2: 8}, obj);
        printCLodop.ADD_PRINT_HTM(obj.bj1, obj.bj2, '100%', "100%", obj.val);
        if (obj.dyms === '3') {
          printCLodop.PREVIEW();
          loaded(i);
        } else if (obj.dyms === '2') {
          let a = (obj.w || w);
          a.layui.layer.confirm(obj.msg || '是否打印？', function(index) {
            loaded(index);
            printCLodop.PRINT();
            loaded(i);
          });
        } else {
          printCLodop.PRINT();
          loaded(i);
        }
      } else if (obj.val) {
        setIframe(strToUrl(obj.val, 'text/html'), 5 * 60 * 1000, function(e) {
          loaded(i);
          e.w.print();
        });
      } else {
        loaded(i);
        w.print();
        return true
      }
    } catch (e) {
      loaded(i);
      console.error(e);
    }
  }
  function printConfig(obj = {title: '本机打印参数设置', name: 'dycssz'}) {
    let prints = getPrint(), elem = $('[lay-filter="printConfig"]');
    if (elem.length === 0) {
      elem = $(`<div style="display: none" class="jt-w100 jt-flex layui-form jt-pd5-rl" label="5" lay-filter="printConfig">
        <div class="jt-w100 layui-form-item jt-flex-r">
          <label class="layui-form-label">默认打印机</label>
          <div class="layui-input-block jt-grow1">
            <select name="mrdyj">
              ${prints.map(it => {
                return '<option value="' + it.id + '">' + it.mc + '</option>'
              }).join('')}
            </select>
          </div>
        </div>
        <div class="jt-w100 layui-form-item jt-flex-r jt-mg8-t">
          <label class="layui-form-label">打印模式</label>
          <div class="layui-input-block jt-grow1">
            <select name="dyms">
              <option value="1">自动打印</option>
              <option value="2">提示打样</option>
              <option value="3">预览打印</option>
            </select>
          </div>
        </div>
      </div>`);
      elem.prependTo('body');
    }
    openPop({
      elem,
      title: obj.title,
      name: 'printConfig',
      data: Object.assign({mrdyj: prints[0].id, dyms: '1'}, local(obj.name)),
      btn: ['保存', '取消'],
      area: ['400px'],
      yes(i) {
        local(obj.name, layui.form.val('printConfig'));
        layui.layer.close(i);
      }
    });
  }
  function getMainUrl(arr) {
    if (typeof arr === 'string') {
      arr = [arr];
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i].indexOf(location.origin) > -1) {
        return arr[i]
      }
    }
  }
  function setServiceUrl() {
    var data = that.getConfig(), inurl = data.inURL, outurl = data.outURL;
    return urlServer = getMainUrl(inurl) || getMainUrl(outurl) || data.defaulturl
  }
  function getServiceUrl() {
    return setPageTemp(urlServer, setServiceUrl)
  }
  function getPostData(data, isGetUser, isBase64, isPwd, isJson) {
    if (isGetUser) {
       user$1 = that.getUser() || {};
      data = Object.assign({}, {
        czryid: user$1.ryid,
        czryjgid: user$1.jgid,
        czryjgmc: user$1.jgmc,
        czryjgjc: user$1.jgjc,
        czryyhm: user$1.yhm,
        czryxm: user$1.xm || user$1.username,
        superadmin: user$1.superadmin
      }, data);
    }
    if (isPwd) {
      return that.encryption(data)
    } else if (isBase64) {
      return BASE64.encode(JSON.stringify(data))
    } else if (isJson) {
      return {data: JSON.stringify(data)}
    }
    return data
  }
  function encryption(data) {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    return {
      data
      ,sstoken: JSON.stringify({certno: '1', sign: jse.encrypt(sha256(data))})
    }
  }
  function identity(value, elem) {
    if (value) {
      if (/(^\d{15}$)|(^\d{17}(x|X|\d)$)/.test(value)) {
        let a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'], c = 0;
        a.forEach((t, i) => {
          c += value[i] * t;
        });
        if (value[17] !== b[c % 11]) {
          return '身份证号输入有误'
        }
      } else {
        return '身份证号格式有误'
      }
    }
  }
  function required(value, elem) {
    elem = $(elem);
    let name = elem.attr('name'), msg = '必填选项#{name}不能为空'.replace('#{name}', name ? '【' + name + '】' : '');
    if (value) {
      if (elem.attr('type') === 'radio') {
        if (!elem.parents('.layui-form-item').find(`[name=${name}]`).is(':checked')) {
          return msg
        }
      }
    } else {
      return msg
    }
  }
  function judgeNumber(v) {
    return v && Number(v) != 0
  }
  function upload(data, name, lx = 'url', option = {}) {
    let formData = new FormData();
    if (lx === 'url') {
      let a = data.split(','), type = a[0].match(/:(.*?);/)[1], bytes = window.atob(a[1]), ia = new Uint8Array(bytes.length);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      formData.append('file', new Blob([ia], {type: type}), name + '.' + type.split('/')[1]);
    } else {
      formData.append('file', data);
    }
    return ajaxASync(option.url || getUploadUrl(), formData, {}, {}, {contentType: false, processData: false}, 'POST')
  }
  function setMenuElemVal(id, title, url) {
    let elem = rw.$('#tabTitle');
    if (elem.length) {
      elem = elem.find(`[lay-id=${id}]`);
      if (elem.length) {
        const i = elem.index(), el = $(`#tabContent > :nth-child(${i + 1}) iframe`), src = el.attr('src');
        if (url !== src) {
          el.attr('src', url);
        }
        elem.trigger('click');
      } else {
        rw.layui.element.tabAdd('topMenu', { title, id, content: `<iframe frameborder="0" src="${url}"/>` });
        rw.layui.element.tabChange('topMenu', id);
      }
    } else {
      w.open(url, webName + '-' + that.uuid(), '', true);
    }
  }
  function chageTab(id, title, url, data) {
    if (url) {
      if (data) {
        url = that.getParamsUrl(data, that.dealsUrl(url, that.getHostUrl()));
      } else {
        url = that.dealsUrl(url, that.getHostUrl());
      }
    }
    setMenuElemVal(id, title, url);
  }
  function redirect(a, pid, id, title, url, data) {
    setTimeout(() => {
      if (a && a[that.val('name')]) {
        a[that.val('name')].router(pid, id, title, url, data);
      } else {
        redirect(a, pid, id, title, url, data);
      }
    }, 100);
  }
  function dealWebTabName(name, clear) {
    let tabName;
    if (clear) {
      tabName = [name];
      w.name = name;
    } else {
      tabName = that.session('webTabName') || [];
      tabName = tabName.filter(it => {
        return it !== name
      });
      tabName.push(name);
    }
    that.session('webTabName', tabName);
  }
  function dealLogin(res, data, mm, dealResult) {
    if (res.code == 1) {
      if (data.jzmm) {
        data.mm = mm;
        that.local('yhxx', data);
      } else if (data.jzyh) {
        delete data.mm;
        that.local('yhxx', data);
      }
      that.session('userinfo', dealResult ? dealResult(res.data) : res.data);
      that.router(winName, '', '首页', that.val('index'));
    } else {
      layui.layer.alert('登录失败：' + res.message, { enter: true });
    }
  }
  function exiting(a) {
    a = a || w;
    a.location.href = 'about:blank';
    a.opener = null;
    a.open('', '_self');
    a.close();
  }
  function getHexMd5() {
    if (w.hex_md5) {
      return Promise.resolve()
    } else {
      initPop.isMd5 = true;
      return that.init()
    }
  }
  function login(url, data, dealResult) {
    let i = that.loading();
    return getHexMd5().then(e => {
      let mm = data.mm;
      data.mm = w.hex_md5(data.mm);
      return that.commonQueryAsyncHttppost_callback(url, data, { isNotGetUser: true }).then(res => {
        dealLogin(res, data, mm, dealResult);
        that.loaded(i);
      }).catch(e => {
        that.loaded(i);
        layui.layer.alert('登录失败，网络连接超时');
      })
    })
  }
  function logOut() {
    that.exit(true);
  }
  function exited() {
    let data = that.session('webTabName') || [], url = that.dealsUrl(that.val('login'), that.getBaseUrl()), name = w.name;
    if (data.length) {
      data.filter(it => it != name).map(it => {
        return exiting(w.open('', it, '', true))
      });
    }
    if (location.href != url) {
      sessionStorage.clear();
      location.href = url;
    }
  }
  function exit() {
    if (w.name == winName) {
      exited();
    } else {
      let a = w.open('', winName, '', true);
      if (a[that.name]) {
        a[that.name].exit();
      } else {
        exited();
      }
    }
  }
  function router(pid, id, title, url, data) {
    if (/jt-/.test(pid) && !id) {
      w.name = pid;
      dealWebTabName(pid, true);
      location.href = that.dealsUrl(url, that.getHostUrl());
    } else {
      let name = webName + '-' + pid;
      if (name === w.name) {
        id && chageTab(id, title, url, data);
      } else {
        dealWebTabName(name);
        const a = w.open(that.dealsUrl(that.val('route'), that.getHostUrl()), name, '', true);
        redirect(a, pid, id, title, url, data);
      }
    }
  }
  function setSelectV(el, v, id, mc, data, judge) {
    let h = '';
    if (el[0] && el[0].jt) {
      el[0].jt.reload(id, mc, data);
      el[0].jt.val(v || '');
    } else {
      el.html(h + [].map.call(data, it => {
        return `<option value="${it[id]}" ${it.only ? 'only' : ''} ${v === it[id] ? 'selected="true"' : ''} jt-data='${JSON.stringify(it)}'>${it[mc]}</option>`
      }).join(''));
      layui.form.render('select', el.parent());
    }
    if (v && !judge) {
      el.trigger('change');
    }
  }
  function setSelect(option, judge) {
    const id = option.valId || 'id', mc = option.showId || 'mc', el = $(option.elem);
    var v, data = option.data || [];
    if (option.value !== undefined) {
      v = option.value;
    } else if (option.first && data.length) {
      v = data[0][id];
    }
    if (option.isNotNull) {
      if (v === undefined && data.length) {
        v = data[0][id];
      }
    } else {
      let it = {};
      it[id] = undefined;
      it[mc] = option.tip || '请选择';
      data = [it].concat(data);
    }
    if (v !== undefined) {
      setSelectV(el, v, id, mc, data, judge);
    } else {
      el.each((i,e) => {
        e = $(e);
        v = e.attr('value');
        setSelectV(e, v, id, mc, data, judge);
      });
    }
    return Promise.resolve()
  }
  function setSelectOption(options, judge = true) {
    if (Array.isArray(options)) {
      return Promise.all(options.map(it => {
        return setSelect(it, judge)
      }))
    } else {
      return setSelect(options, judge)
    }
  }
  function setRadioValue(name, value) {
    $("input[type=radio][name='"+ name +"'][value='" + value + "']").prop("checked", true);
  }
  function setFormData(data, layForm) {
    for(var keyword in data){
      if($("[name='"+keyword+"']").length > 0){
        var tagName = $("[name='"+keyword+"']")[0].tagName.toLowerCase();
        if(tagName == "input"){
          var type = $("[name='"+keyword+"']").attr("type");
          if(type == "checkbox"){
            if(data[keyword]){
              var arrValue = data[keyword].split(",");
              if(arrValue && arrValue.length>0){
                for(var i = 0; i < arrValue.length;i++){
                  $("[name='"+keyword+"'][value='"+arrValue[i]+"']").prop("checked",true);
                }
              }
            }
          }else if(type == "radio"){
            $("[name='"+keyword+"'][value='"+data[keyword]+"']").prop("checked",true);
          }else {
            $("[name='"+keyword+"']").val(data[keyword]);
          }
        }else if(tagName == "select"){
          $("[name='"+keyword+"']").val(data[keyword]);
        }else if(tagName == "textarea"){
          var value = data[keyword] ? data[keyword] :"";
          $("[name='"+keyword+"']").text(value);
        }
        else {
          continue;
        }
      }
    }
    layForm.render();
  }
  function setFormVal(name, data) {
    if (data) {
      var v = layui.form.val(name), keys = Object.keys(v);
      keys.forEach(it => {
        v[it] = '';
      });
      data = Object.assign(v, data);
      layui.form.val(name, data);
      layui.form.render();
    } else {
      return layui.form.val(name)
    }
  }
  function dateRender(obj = {}) {
    var elem = obj.elem, done = obj.done, format = obj.format, type = obj.type, val = [];
    $(elem || '[laydate]').each((i, elem) => {
      const el = $(elem);
      val.push(layui.laydate.render(Object.assign({
        elem,
        type: type || el.attr('laytype') || 'date',
        format: format || el.attr('format') || 'yyyy/MM/dd',
        value: obj.value || '',
        done(res, a, b) {
          if (done) {
            done(res, elem, a, b);
          }
        }
      }, obj.cover)));
    });
    return val.length > 1 ? val : val[0]
  }
  function dateRangeRender(obj) {
    let ks = obj.name[0], js = obj.name[1], filter = obj.filter, ksVal, jsVal, value = {}, format = obj.format || 'yyyy/MM/dd', form = obj.form, ksObj, jsObj, max = obj.max;
    const done = function(o) {
      if (ksVal && !/[_]/.test(ksVal) && jsVal && !/[_]/.test(jsVal)) {
        if (jsVal < ksVal) {
          layui.layer.msg('结束日期不能小于开始日期');
          o.val('');
          return
        } else {
          if (max) {
            let temp = new Date(jsVal);
            if (max.y) {
              temp = temp.addYear(-max.y);
            }
            if (max.M) {
              temp = temp.addMonth(-max.M);
            }
            if (max.d) {
              temp = temp.addDay(-max.d);
            }
            if (temp > new Date(ksVal)) {
              layui.layer.msg(max.msg);
              o.val('');
            }
          }
        }
      }
      obj.done && obj.done();
      if (filter) {
        $('[lay-filter=' + filter + ']').val('');
        layui.form.render('select');
      }
    }, selectFilter = function(obj) {
      let date = new Date(), val = obj.value;
      jsVal = date.format(format);
      if (val === '1') {
        ksVal = jsVal;
      } else if (val === '2') {
        jsVal = ksVal = date.addDay(-1).format(format);
      } else if (val === '3') {
        jsVal = ksVal = date.addDay(-2).format(format);
      } else if (val === '4') {
        ksVal = date.addDay(-3).format(format);
      } else if (val === '5') {
        ksVal = date.addDay(-6).format(format);
      } else if (val === '6') {
        ksVal = date.addMonth(-1).format(format);
      } else if (val === '7') {
        ksVal = date.addMonth(-3).format(format);
      } else if (val === '8') {
        ksVal = date.addMonth(-12).format(format);
      } else if (val === '9') {
        ksVal = date.getWeek().format(format);
      } else if (val === '10') {
        ksVal = date.getMonthDay().format(format);
      } else if (val === '11') {
        ksVal = date.getSeason().format(format);
      } else if (val === '12') {
        date.setMonth(0);
        date.setDate(1);
        ksVal = date.format(format);
      } else if (val === '13') {
        date.setMonth(0);
        date.setDate(1);
        jsVal = date.format(format);
        ksVal = date.addMonth(-12).format(format);
      } else if (val === '99') {
        ksVal = '';
        jsVal = '';
      }
      value[ks] = ksVal;
      value[js] = jsVal;
      layui.form.val(form, value);
    };
    ksObj = dateRender({
      elem: '[name=' + ks + ']',
      format,
      cover: obj.cover,
      type: obj.type,
      done(val, elem, value, old) {
        ksVal = val;
        done(jsObj);
      }
    });
    jsObj = dateRender({
      elem: '[name=' + js + ']',
      format,
      type: obj.type,
      cover: obj.cover,
      done(val, elem, value, old) {
        jsVal = val;
        done(ksObj);
      }
    });
    filter && setSelectOption({
      elem: '[lay-filter=' + filter + ']',
      data: [
        {id: '99', mc: '清空'},
        {id: '1', mc: '今天'},
        {id: '2', mc: '昨天'},
        {id: '3', mc: '前天'},
        {id: '4', mc: '近三天'},
        {id: '5', mc: '近一周'},
        {id: '6', mc: '近一月'},
        {id: '7', mc: '近三月'},
        {id: '8', mc: '近一年'},
        {id: '9', mc: '本周'},
        {id: '10', mc: '本月'},
        {id: '11', mc: '本季'},
        {id: '12', mc: '本年'},
        {id: '13', mc: '上一年'}
      ],
      isNotNull: true,
      value: obj.value || '6'
    });
    filter && selectFilter({value: obj.value || '6'});
    filter && layui.form.on('select(' + filter + ')', selectFilter);
  }
  function bindEvent() {
    let form = layui.form, pwd = '';
    form.verify({
      pass:function(value) {
        pwd = value;
      },
      qrpass: function(value) {
        if (value !== pwd) {
          return '两次密码输入不一致'
        }
      }
    });
    form.on('submit(alertPwdSubmit)', function(res) {
      alertPwd(res.field);
    });
    $('.jt-top [jt-event]').on('click', function(e) {
      event[this.getAttribute('jt-event')]();
      e.stopPropagation();
    });
  }
  function topRender(options) {
    let form = layui.form, data = that.getConfig('xtxx'), user = that.getUser(), menu = options.menu || {}, id = menu.valId || 'id', show = menu.showId || 'bt';
    $('#userInfo').html(`<span>机构：${user.jgmc}</span><span>账号：${user.yhm}</span><span>姓名：${user.xm}</span>`);
    $('#head img').attr('src', dealsUrl(data.icon, getBaseUrl()));
    $('#head span').html(data.title);
    form.on('select(xtcd)', function(e){
      if (e.value) {
        let param = e.data;
        param.id && routerByData(param);
      }
    });
    setSelectOption({
      elem: '#xtcd',
      data: that.getMenu()._formatTreeData,
      valId: id,
      showId: show
    });
  }
  function getName(w, i = 0) {
    if (i < 8) {
      let name = w.name;
      if (webNameReg.test(name) || name == winName) {
        if (i === 0) {
          rw = w;
        } else {
          try {
            rw = w[val('name')].getRouterW();
          } catch (e) {
            rw = w;
            return name
          }
        }
        return name
      } else {
        return getName(w.parent, ++i)
      }
    } else {
      return false
    }
  }
  function getRouterW() {
    return rw
  }
  function getTopMenuId(id, sjid) {
    let menu = that.getMenu();
    while(sjid !== '01' && sjid !== '' && sjid !== null) {
      id = sjid;
      sjid = menu['cd-' + id].sjid;
    }
    return id
  }
  function routerByData(data, param) {
    that.router(getTopMenuId(data.id, data.sjid), data.id, data.bt, data.url, param);
  }
  function alertPwd(data) {
    return getHexMd5().then(e => {
      return that.commonQueryAsyncHttppost_callback(val('alertMMUrl'), {jmm: w.hex_md5(data.jmm), mm: w.hex_md5(data.xmm)}).then(res => {
        if (res.code == 1) {
          layui.layer.msg('密码修改成功，即将退出，请重新登录', {time: 2000}, function() {
            that.logOut();
          });
        } else {
          layui.layer.alert('密码修改失败：' + res.message);
        }
      }).catch(function() {
        layui.layer.alert('未获取到当前用户信息，网络连接超时');
      })
    })
  }
  function renderTop(options) {
    if (promiseResove) {
      promiseResove.then(e => {
        bindEvent();
        topRender(options);
      });
    } else {
      bindEvent();
      topRender(options);
    }
  }
  function setUserInfo() {
    userInfo = that.session('userinfo');
    if (!userInfo) {
      that.logOut();
    }
    return userInfo
  }
  function getUserInfo() {
    return setPageTemp(userInfo, setUserInfo) || {}
  }
  function setUser() {
    user = getUserInfo().ryxx;
    if (!user) {
      that.logOut();
    }
    return user
  }
  function getMenuBySql() {
    menu = getUserInfo().cdqx || that.commonHttppost('/rest/queryDataBySql/000000/999', {}).data;
    that.session('menu', menu);
    return menu
  }
  function setMenu() {
    menu = that.session('menu');
    return menu = dealMenu(setPageTemp(menu, getMenuBySql) || [])
  }
  function dealMenu(menu) {
    if (menu) {
      menu = formatTreeData(menu, 'id', 'sjid', 'cd-');
      if (menu.length === 1) {
        let a = menu[0];
        if (a && a.sjid && a.jtchild && a.jtchild.length) {
          menu = a.jtchild;
          menu.__proto__ = a.__proto__;
        }
      }
    }
    return menu
  }
  function getUser() {
    return setPageTemp(user, setUser)
  }
  function getMenu(judge) {
    setPageTemp(menu, setMenu);
    return judge ? menu['cd-' + w.name.replace(webNameReg, '')] : menu
  }
  function setSystemTime() {
    let now = new Date(), date = now.addHour(1).getTime(), sd = commonHttppost('/zs01-xtjc/s-time', {}, {isGetUser: false}).data[0].sd;
    timeDiff = {
      v: sd ? now - new Date(sd) : 0
      ,date
    };
  }
  function getSystemTime() {
    setPageTemp(timeDiff, setSystemTime);
    let now = new Date();
    if (timeDiff.date < now.getTime()) {
      setSystemTime();
    }
    now = new Date();
    return timeDiff.v ? new Date(now - timeDiff.v) : now
  }
  function getRyxx(ksid, ryxz, bz, ryzw) {
    return commonQueryAsyncHttppost_callback('/zs02-ywjc/ryxxgl/s-bmryxx', {ksid, ryxz, ryzw}).then(res => {
      return res.data
    })
  }
  function faceVerify(param, options) {
    options = Object.assign({
      left_eye: {
        val: 0.4,
        msg: '左眼被遮挡，请重新采集'
      },
      right_eye: {
        val: 0.4,
        msg: '右眼被遮挡，请重新采集'
      },
      nose: {
        val: 0.4,
        msg: '鼻子被遮挡，请重新采集'
      },
      mouth: {
        val: 0.4,
        msg: '嘴巴被遮挡，请重新采集'
      },
      left_cheek: {
        val: 0.4,
        msg: '左脸被遮挡，请重新采集'
      },
      right_cheek: {
        val: 0.4,
        msg: '右脸被遮挡，请重新采集'
      },
      chin_contour: {
        val: 0.4,
        msg: '下巴被遮挡，请重新采集'
      }
    }, options);
    return commonQueryAsyncHttppost_callback(getFaceUrl(), param).then(res => {
      if(res.code == '1'){
        if(res.face_num > 0){
          var faceData = res.face_list[0], quality = faceData.quality, occlusion = quality.occlusion, keys = Object.keys(options);
          for (let key in keys) {
            let check = options[key];
            if (check) {
              if (occlusion[key] >= check.val) {
                return Promise.reject({msg: '人脸校验失败：' + check.msg})
              }
            }
          }
        } else {
          return Promise.reject({msg: '未识别到人脸,请对准摄像头后重新采集'})
        }
      }else {
        return Promise.reject({msg: '人脸校验失败：' + res.msg})
      }
    })
  }
  function setPossessMkqx(mkbh) {
    let data = that.commonHttppost('/zs01-xtjc/ymgngl/s-yhqx', {mkbh}).data || [], res = {};
    data.forEach(it => {
      res[it.dm] = '1';
    });
    systemDataMkqx[mkbh] = res;
    return res
  }
  function paramSet(mkdm) {
    let data = that.commonHttppost('/zs02-ywjc/xtcsgl/s-csxx', {mkdm, jqm: ''}).data || [], res = {};
    data.forEach(it => {
      res[it.xh] = it.csz;
    });
    return res
  }
  function dicget(dm) {
    return that.commonHttppost('/zs03-ywzd/ywtyzd/s-zdxx', {fldm: dm, yxbz: '1'}).data
  }
  function possessMkqx(mkbh, dm) {
    let res = setPageTemp(systemDataMkqx[mkbh], setPossessMkqx, mkbh);
    return dm ? (res[dm] || '0') : res
  }
  function paramget(mkdm, dm) {
    let res = setPageTemp(systemDataParam, paramSet, mkdm);
    return dm ? res[dm] : res
  }
  function getKsxx(bmxz, fwdx, judge) {
    return that.commonHttppost('/zs02-ywjc/bmxxgl/s-bmjbxx', {bmxz, fwdx: judge ? fwdx : fwdx == 1 ? '1|3' : fwdx == '2' ? '2|3' : fwdx, bz: 1}).data || []
  }
  function getNode(id, idKey, v) {
    if (id !== undefined && id !== null) {
      id = typeof id === 'string' ? id : id[idKey];
      return v.getNodesByParam(idKey, id)[0]
    } else {
      return id
    }
  }
  function refresh(node, v) {
    if (node) {
      let parentNode = node.getParentNode();
      if (parentNode) {
        let state = parentNode.check_Child_State;
        if (state === 0 && parentNode.checked) {
          parentNode.checked = false;
          v.updateNode(parentNode);
        }
      }
    }
  }
  function initTree(options) {
    let id, idKey = options.valId || 'id', data = (options.data || []).map(it => {
      it.isParent = it.isparent;
      return it
    }), set = Object.assign({
      data: {
        key: {
          name: options.showId || 'mc',
          ...(options.dataKey || {})
        },
        simpleData: {
          enable: true,
          idKey,
          pIdKey: options.pid || 'pid'
        }
      },
      callback: {
        onClick: (options.click || options.checked) ? function(a, b, c) {
          options.click && options.click(a, b, c);
          if (options.checked && id !== c[idKey]) {
            id = c[idKey];
            options.checked(a, b, c);
          }
        } : undefined,
        onExpand: options.expand,
        onChecked: options.onChecked
      }
    }, options.cover), open = [];
    data.forEach(it => {
      if (it.open) {
        open.push(it[idKey]);
      }
    });
    let v = $.fn.zTree.init($(options.elem), set, data);
    v.checked = function(ids, checked, judge) {
      if(typeof ids === 'string') {
        ids = ids.split(',');
      }
      ids.forEach(it => {
        v.checkNode(v.getNodeByParam(idKey, it), checked, judge);
      });
    };
    v.jtUpdateNode = function(id, data = {}, sjid) {
      let node = getNode(sjid !== undefined ? sjid : id, idKey, v);
      if (sjid === undefined) {
        v.updateNode(Object.assign(node, data));
      } else if (node) {
        v.addNodes(node, -1, data, true);
      } else {
        node = getNode(id, idKey, v);
        if (node) {
          v.updateNode(Object.assign(node, data));
        } else {
          v.addNodes(null, -1, data, true);
        }
      }
      v.refresh();
    };
    v.del = function(id, judge) {
      let node = getNode(id, idKey, v);
      if (node) {
        v.removeNode(node, judge);
        refresh(node, v);
        v.refresh();
      }
    };
    setTimeout(() => {
      open.forEach(it => {
        let node = v.getNodeByParam(idKey, it);
        options.expand && options.expand('', '', node, 'default');
        options.notTriggerChecked || options.checked && options.checked('', '', node, 'default');
      });
    }, 0);
    if (options.showLevel) {
      let nodes = v.getNodes();
      nodes.forEach(node => {
        v.expandNode(node, true, false, false);
      });
    }
    return v
  }
  function setDataBase(data) {
    data.obj[data.name] = {};
  }
  function setJgryxx(obj) {
    if (ryxx[obj._n]) {
      return ryxx[obj._n]
    } else {
      return ryxx[obj._n] = that.commonQueryAsyncHttppost_callback('/zs02-ywjc/ryxxgl/s-bmryxx', obj).then(res => {
        dic.dataBase.ryxx[obj._n] = res.data || [];
        return res.data || []
      })
    }
  }
  function getJgryxx(jgid = '', bmid = '') {
    setPageTemp(dic.dataBase, setDataBase, {obj: dic, name: 'dataBase'});
    setPageTemp(dic.dataBase.ryxx, setDataBase, {obj: dic.dataBase, name: 'ryxx'});
    let data = setPageTemp(dic.dataBase.ryxx[jgid + '-' + bmid], setJgryxx, {jgid, bmid, _n: jgid + '-' + bmid});
    if (data.__proto__ === Promise.prototype) {
      return data
    } else {
      return Promise.resolve(data || [])
    }
  }
  function getDic(ly, name) {
    if (dic[ly]) {
      return Promise.resolve(name ? dic[ly][name] : dic[ly])
    } else {
      return that.getAjaxSync('/public/dic/' + ly + '.json', {version: new Date().getTime()}).then(res => {
        dic[ly] = res;
        return  name ? res[name] : res
      })
    }
  }
  function renderDic(name = '', data = {}, def = 'common') {
    let dic = {}, dics = [];
    $('[jt-dic]').each(function(i, el) {
      let name = el.getAttribute('jt-dic');
      if (name) {
        name = name.split('|');
        let ly = name[1] ? name[0] : def, res = dic[ly];
        name = name[1] || name[0];
        if (!res) {
          res = {ly, data: [{el, name}]};
          dic[ly] = res;
          dics.push(res);
        } else {
          res.data.push({el, name});
        }
      }
    });
    dics = dics.map(it => {
      return getDic(it.ly).then(dic => {
        let arr = it.data;
        return Promise.all(arr.map(it => {
          let key = it.name, elem = it.el, d = dic[key];
          if (d) {
            let notNull = elem.getAttribute('notNull');
            return that.setSelectOption({
              elem,
              data: d.data || [],
              isNotNull: notNull === null ? d.isNotNull : notNull === 'false' ? false : true,
              tip: elem.getAttribute('placeholder'),
              value: data[name] || ''
            })
          } else if (that.renderDics[key]){
            return that.renderDics[key](elem)
          } else {
            console.error('jt-dic="' + key + '"该字典不存在，请确认');
            return
          }
        }))
      })
    });
    return Promise.all(dics).then(res => {
      name && layui.form.val(name, data);
    })
  }
  let renderDics = {
    szhyz(elem, jgid) {
      return getJgryxx(jgid).then(res => {
        return that.setSelectOption({
          elem,
          data: res,
          showId: 'xm'
        })
      })
    },
    mzys(elem, jgid) {
      return this.szhyz(elem, jgid)
    }
  }, dics = {
    jgryxx: getJgryxx,
    bmryxx(ksid, jgid) {
      return getJgryxx(jgid, ksid)
    }
  };
  function getXb(dm = '') {
    dm = dm.split('-');
    return {id: dm[0], mc: dic$1.xb[dm[0]] || dm.join('-')}
  }
  function srcBaseBaseFunError() {
    layui.layer.msg('该方法依赖专有浏览器，请在专有浏览器中使用');
  }
  function srcBaseBaseFunErrorSync() {
    srcBaseBaseFunError();
    return Promise.reject()
  }
  function getBrowserParam(mkbh, name) {
    return setBrowserParam(mkbh, name)
  }
  function setBrowserParam(mkbh, name, value) {
    return that.session('bro-' + mkbh + '-' + name, value)
  }
  initPop.thirdBaseUrl = dealsUrl('./modules', getJsUrl(d));
  function setFormVerify() {
    layui.form.verify({
      required,
      identity
    });
  }
  function reWriteLayuiUse() {
    if (!layui.use1) {
      layui.use1 = layui.use;
      layui.use = function(a, b) {
        layui.use1(a, function() {
          if (layui.form) {
            setFormVerify();
          }
          if (b) {
            if (promiseResove) {
              promiseResove.then(b);
            } else {
              b();
            }
          }
        });
      };
    }
  }
  function getLayUi() {
    if (w.layui) {
      layui.config({
        base: that.dealsUrl('.' + (initPop.libSite || '/lib') + '/js/layui-v2.5.7/extend', getBaseUrl()) + '/'
      });
      layui.use('layer');
      reWriteLayuiUse();
      return Promise.resolve()
    } else {
      return that.use([{src: 'layui-v2.5.7/layui.js'}]).then(res => {
        return getLayUi()
      })
    }
  }
  const Class = function(obj) {
    let pro = [];
    that = this;
    that.config(obj);
    w.name = getName(w);
    pro = [getLayUi()];
    if (w.jthisJsObject || w.wdphisJsObject) {
      const systemV = (w.jthisJsObject || w.wdphisJsObject), system = systemV.jthis || systemV.wdphis;
      that.getUser = function() {
        return JSON.parse(system.varget('0', 'ryxx'))
      };
      pro.push(that.use('browser'));
    }
    promiseCore = Promise.all(pro);
    that.init();
  };
  function setTBox(elem) {
    return elem.find(TBox).eq(0)
  }
  function getTBox(elem, box) {
    return setPageTemp(box, setTBox, elem)
  }
  function setTMain(box) {
    return box.find(TMain)
  }
  function getTmain(elem, box, main) {
    return setPageTemp(main, setTMain, getTBox(elem, box))
  }
  function setTbody(main) {
    return main.find(TBody)
  }
  function getTBody(elem, main, box, body) {
    return setPageTemp(body, setTbody, getTmain(elem, box, main))
  }
  function getTr(body, i) {
    return body.find('tr[data-index="' + i + '"]')
  }
  function tableInit(options, mx, res, pelem, layForm) {
    let selectElem = $(options.select), {filter = 'table', click, mxCallBack, mxclick} =options, zTable;
    options.height = pelem.height();
    zTable = initTable(options, res.page);
    $(d).on('click', '.form-show-more', function( ) {
      tableReload({height: pelem.height()}, zTable);
    });
    layForm.render();
    if (!options.notTrigger) {
      setTimeout(() => {
        let elems = selectElem.find('[lay-submit]'), len = elems.length;
        if (len > 1) {
          elems.filter('[search]').trigger('click');
        } else if (len) {
          elems.trigger('click');
        }
      }, 0);
    }
    initMxTable(mx, filter, pelem, click, res, mxCallBack, mxclick, selectElem);
    return zTable
  }
  function tableReloadV(data, count, limit, height, table, page, pelem, options) {
    let val = {data, height: height || pelem.height()};
    if (options.page) {
      val.count = count;
      val.page = {count, curr: page._pageNumber + '', limit: (limit || page._pageSize || 20)};
    }
    tableReload(val, table);
  }
  function setMxTable(judge, res, callBack, pElem) {
    if (judge) {
      let height = pElem.height();
      res.tr.hasClass('jt-selected') || callBack(res.data);
      $('.jt-mx').show();
      setTimeout(() => {
        let h = pElem.height();
        if (height !== h) {
          let tbody = getTmain(pElem);
          tbody.height(tbody.height() + h - height);
        }
      }, 0);
    }
  }
  function initMxTable(mx, filter, pElem, clickEvent, result, callBack, mxClickEvent, selectElem) {
    let layTable = layui.table;
    if (mx) {
      let elem = $(mx.elem), mPElem = elem.parent(), mTable, page = {
        size: (mx.page ? mx.page.limit ? mx.page.limit : 20 : 20) + '',
        page: '1'
      };
      mx.height = mPElem.height();
      result.mxPage = page;
      mTable = initTable(mx, result.mxPage, callBack, result);
      result.mxtableReload = function(data, count, limit, height) {
        tableReloadV(data, count, limit, height, mTable, page, mPElem, mx);
      };
      result.getMxCheckedData = function() {
        return mTable.checkStatus(false)
      };
      layTable.on('row(mxtable)', function(res) {
        trClickEvent(res, mxClickEvent, mPElem);
        result.mxrow = res;
      });
      selectElem.find('[lay-submit]').on('click', function() {
        $('.jt-mx').hide();
        result.mxtableReload && result.mxtableReload([]);
      });
    }
    layTable.on('row(' + filter + ')', (res) => {
      let judge = !trClickEvent(res, clickEvent, pElem);
      mx && setMxTable(judge, res, callBack, pElem);
      result.row = res;
    });
  }
  function trClickEvent(res, clickEvent, pElem) {
    res.updated = function(data, judge) {
      res.data = Object.assign({}, res.data, data);
      res.update(res.data);
      judge && clickEvent && clickEvent(res);
    };
    setTimeout(() => {
      pElem.find('.jt-selected').removeClass('jt-selected');
      res.tr.addClass('jt-selected');
    }, 0);
    return clickEvent && clickEvent(res)
  }
  function tableReload(option, table) {
    table.reload(option);
  }
  function initTable(option, obj = {}, callBack, result) {
    let rowClass = option.rowClass, done = option.done, elem = option.elem, param = {
      elem,
      cols: option.cols,
      id: option.name || '',
      height: option.height,
      disabled: option.disabled,
      data: option.data || [],
      done
    };
    if (rowClass) {
      let pelem = $(elem).parent();
      param.done = function(res, page, total) {
        let data = res.data, tbody = getTBody(pelem);
        data.forEach((it, i) => {
          let cl = rowClass(it, i);
          cl && getTr(tbody, i).addClass(cl);
        });
        if (option.done) {
          option.done(res, page, total);
        }
      };
    }
    if (option.page) {
      param.page = Object.assign({
        layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'],
        groups: 5,
        count: 0,
        limit: 20,
        limits: [10, 20, 50, 100, 200, 500, 1000, 1500, 3000, 5000],
        curr: 1,
        jump(res, first) {
          obj.size = res.limit + '';
          obj.page = res.curr + '';
          obj.__proto__ = {
            _pageSize: res.limit + '',
            _pageNumber: res.curr + ''
          };
          if (!first) {
            if (callBack && result) {
              callBack(result.row.data, obj);
            } else if(option.select) {
              $(option.select).find('[lay-submit]').trigger('click');
            } else if (option.getData) {
              option.getData(obj);
            }
          }
        }
      }, option.page);
    } else {
      param.page = false;
      param.limit = 0;
    }
    return layui.table.render(Object.assign(param, option.cover))
  }
  function initQueryPage(options, mx) {
    let elem = $(options.elem), pelem = elem.parent(), layForm = layui.form, zTable, page = {
      size: (options.page ? options.page.limit ? options.page.limit : 20 : 20) + '',
      page: '1'
    }, res = {
      tableReload(data, count, limit, height) {
        tableReloadV(data, count, limit, height, zTable, page, pelem, options);
        this.row = null;
      },
      setHeight(height) {
        tableReload({height: height || pelem.height()}, zTable);
      },
      getFormData() {
        return layForm.val('cx')
      },
      getData() {},
      getCheckedData() {
        return zTable.checkStatus(false)
      },
      page
    };
    if (layui.table && layui.form) {
      zTable = tableInit(options, mx, res, pelem, layForm);
    } else {
      layui.use(['table'], function() {
        zTable = tableInit(options, mx, res, pelem, layForm);
      });
    }
    return res
  }
  function initBaseBar(menus, buttons) {
    try {
      var menutitles = ["文件", "编辑", "查看", "报表", "帮助"];
      var menuIcons = [
        "icon-extend-file",
        "icon-extend-edit",
        "icon-extend-view",
        "icon-extend-report",
        "icon-extend-view",
      ];
      $.each(menus, function (i, n) {
        if (n.length > 0) {
          $("#topmenu").append(
            '<a id="menu' +
              i +
              '" href="#" style="margin-left:1px;" >' +
              menutitles[i] +
              "</a"
          );
          var html = "<div id='menudiv" + i + "'></div>";
          $("#topmenu").append(html);
          $("#menu" + i).menubutton({
            plain: false,
            width: 80,
            height: 40,
            iconCls: menuIcons[i],
            menu: "#menudiv" + i,
          });
          $.each(n, function (j, k) {
            $("#menudiv" + i).menu("appendItem", {
              text: k["name"],
              iconCls: k["icon"],
              id: k["id"],
            });
            $("#menudiv" + i)
              .children("div")
              .eq(j + 1)
              .click(function () {
                if (k["id"]) {
                  k["method"](k["id"]);
                } else {
                  k["method"]();
                }
              });
          });
        } else {
        }
      });
      $.each(buttons, function (i, n) {
        $("#topbutton").append(
          '<a id="button' +
            i +
            '" href="#"  style="margin-left:5px;">' +
            n["name"] +
            "</a>"
        );
        var width = n["width"];
        if (!width) {
          width = 80;
        }
        if (n["menuid"]) {
          $("#button" + i).splitbutton({
            plain: true,
            height: 40,
            width: width,
            iconCls: n["icon"],
            onClick: n["method"],
            id: n["id"],
            menu: "#" + n["menuid"],
          });
        } else {
          $("#button" + i).linkbutton({
            plain: true,
            height: 40,
            width: width,
            iconCls: n["icon"],
            onClick: n["method"],
            id: n["id"],
          });
        }
      });
      setTimeout(function () {
        $("#topmenu")
          .parent()
          .attr(
            "style",
            "overflow: hidden;height: 40px;background-color: white;vertical-align: middle;"
          );
        $("#topbutton").css(
          "width",
          document.body.clientWidth -
            document.getElementById("topmenu").offsetWidth -
            35
        );
        $("#bodydiv")
          .layout("panel", "north")
          .panel("resize", {
            height: document.getElementById("topbutton").offsetHeight,
          });
        $("#bodydiv").layout("panel", "north").panel("options").maxHeight = 80;
        $("#bodydiv").layout();
        $("#topmenu").css(
          "margin-top",
          ($("#topmenu").parent().height() - $("#topmenu").height()) / 2
        );
        var height = $("#topmenu").parent().height() - 20;
        $("#topmenu").after(
          '<div class="menuclass" style="margin-top: 10px;color: white;float:left;height: ' +
            height +
            'px;vertical-align: middle;"></div>'
        );
      }, 10);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function setShortcutKeys(keys) {
    shortcutKeys = keys;
  }
  function initShortcutKey() {
    $(document).keydown(function (e) {
      try {
        var keyEvent;
        if (e.keyCode == 8) {
          var d = e.srcElement || e.target;
          if (
            d.tagName.toUpperCase() == "INPUT" ||
            d.tagName.toUpperCase() == "TEXTAREA" ||
            d.tagName.toUpperCase() == "DIV"
          ) {
            keyEvent = d.readOnly || d.disabled;
          } else {
            keyEvent = true;
          }
        } else {
          keyEvent = false;
        }
        if (keyEvent) {
          e.preventDefault();
        }
        if (e.keyCode == 112) {
          if (shortcutKeys["F1"]) {
            shortcutKeys["F1"]();
          }
        } else if (e.keyCode == 113) {
          if (shortcutKeys["F2"]) {
            shortcutKeys["F2"]();
          }
        } else if (e.keyCode == 114) {
          if (shortcutKeys["F3"]) {
            shortcutKeys["F3"]();
          }
        } else if (e.keyCode == 115) {
          if (shortcutKeys["F4"]) {
            shortcutKeys["F4"]();
          }
        } else if (e.keyCode == 116) {
          if (shortcutKeys["F5"]) {
            shortcutKeys["F5"]();
          }
        } else if (e.keyCode == 117) {
          if (shortcutKeys["F6"]) {
            shortcutKeys["F6"]();
          }
        } else if (e.keyCode == 118) {
          if (shortcutKeys["F7"]) {
            shortcutKeys["F7"]();
          }
        } else if (e.keyCode == 119) {
          if (shortcutKeys["F8"]) {
            shortcutKeys["F8"]();
          }
        } else if (e.keyCode == 120) {
          if (shortcutKeys["F9"]) {
            shortcutKeys["F9"]();
          }
        } else if (e.keyCode == 121) {
          if (shortcutKeys["F10"]) {
            shortcutKeys["F10"]();
          }
        } else if (e.keyCode == 122) {
          if (shortcutKeys["F11"]) {
            shortcutKeys["F11"]();
          }
        } else if (e.keyCode == 123) {
          if (shortcutKeys["F12"]) {
            shortcutKeys["F12"]();
          }
        } else if (e.keyCode == 27) {
          if (shortcutKeys["ESC"]) {
            shortcutKeys["ESC"]();
          }
        }
      } catch (e) {
        JsErrorTrace(e);
      }
    });
  }
  function getCommonCombobox(params) {
    try {
      var domId = params.domId;
      var data = params.data;
      var valueField = params.valuefield;
      var textField = params.textfield;
      var mrz = params.mrz;
      var nextid = params.nextid;
      var method = params.method;
      var changemethod = params.changemethod;
      var flag = params.flag;
      var required = params.required;
      var filter_arr = params.filter_arr;
      var mrz_index = params.mrz_index;
      var multiple = params.multiple;
      var panelHeight = 200;
      if (params.panelHeight) {
        panelHeight = params.panelHeight;
      }
      var readonly_value = false;
      if (params.readonly) {
        readonly_value = params.readonly;
      }
      if (!valueField || valueField == "") {
        valueField = "code";
      }
      if (!textField || textField == "") {
        textField = "name";
      }
      if (required) {
        required = true;
      } else {
        required = false;
      }
      if (multiple) {
        multiple = true;
      } else {
        multiple = false;
      }
      var isselect = true;
      $("#" + domId).combobox({
        data: data,
        valueField: valueField,
        textField: textField,
        required: required,
        selectOnNavigation: false,
        readonly: readonly_value,
        multiple: multiple,
        panelHeight: panelHeight,
        onLoadSuccess: function () {
          try {
            if (data.length > 0) {
              if (mrz && mrz != "") {
                if (multiple) {
                  $("#" + domId).combobox("clear");
                  $("#" + domId).combobox("setValues", mrz);
                } else {
                  $("#" + domId).combobox("setValue", mrz);
                }
              } else if (mrz_index) {
                $("#" + domId).combobox("select", data[0][valueField]);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        filter: function (q, row) {
          try {
            var keys = new Array();
            if (filter_arr) {
              keys = filter_arr;
            } else {
              if (row.pym) {
                keys[keys.length] = "pym";
              }
              keys[keys.length] = valueField;
              keys[keys.length] = textField;
            }
            return that.filterComboboxData(q, row, keys);
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelect: function (record) {
          try {
            if (isselect) {
              if (nextid) {
                $("#" + nextid)
                  .textbox("textbox")
                  .focus();
              }
              if (method && record) {
                method(record);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onChange: function (newValue, oldValue) {
          try {
            var panel = $(this).combo("panel");
            var item = panel.children("div:visible").eq(0);
            item.addClass("combobox-item-hover");
            if (changemethod) {
              changemethod(newValue, oldValue);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onHidePanel: function () {
          try {
            var panel = $(this).combo("panel");
            $(panel.children("div")).removeClass("combobox-item-hover");
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      });
      if (data.length > 0) {
        var datalength = data.length;
        var index = -1;
        $("#" + domId)
          .textbox("textbox")
          .keyup(function (event) {
            try {
              var e = event || window.event;
              var keyCode = e.keyCode || e.which;
              if (keyCode == "38") {
                let pClosed = $("#" + domId)
                  .combobox("panel")
                  .panel("options").closed;
                if (pClosed) {
                  isselect = false;
                  if (index == 0 || index == -1) {
                    $("#" + domId).combobox(
                      "setValue",
                      data[Number(datalength) - 1][valueField]
                    );
                    index = Number(datalength) - 1;
                  } else {
                    index = Number(index) - 1;
                    $("#" + domId).combobox("setValue", data[index][valueField]);
                  }
                  isselect = true;
                }
              }
              if (keyCode == "40") {
                let pClosed = $("#" + domId)
                  .combobox("panel")
                  .panel("options").closed;
                if (pClosed) {
                  isselect = false;
                  if (index == -1 || index == Number(datalength) - 1) {
                    $("#" + domId).combobox("setValue", data[0][valueField]);
                    index = 0;
                  } else {
                    index = Number(index) + 1;
                    $("#" + domId).combobox("setValue", data[index][valueField]);
                  }
                  isselect = true;
                }
              }
              if (keyCode == "13") {
                if (nextid) {
                  $("#" + nextid)
                    .textbox("textbox")
                    .focus();
                }
                if (method && data[index]) {
                  method(data[index]);
                }
              }
            } catch (e) {
              JsErrorTrace(e);
            }
          });
      }
      $("#" + domId).next().children(":text").blur(function () {
          try {
            var pClosed = $("#" + domId).combobox("panel").panel("options").closed;
            if (pClosed) {
              var textvalue = $("#" + domId).combobox("getText");
              var combodata = $("#" + domId).combobox("getData");
              var idvalue = $("#" + domId).combobox("getValue");
              var setValue = "";
              $.each(combodata, function (i, n) {
                if (textvalue == n[textField]) {
                  setValue = n[valueField];
                  return false;
                } else {
                  if (flag) {
                    setValue = textvalue;
                  } else {
                    setValue = "";
                  }
                }
              });
              if (setValue != idvalue || setValue == "") {
                $("#" + domId).combobox("setValue", setValue);
                if (flag == true) {
                  $("#" + domId).combobox("setText", textvalue);
                }
                if (required && $("#" + domId).combobox("getText") == "") {
                }
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        });
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function filterComboboxData(q, row, keys) {
    try {
      if (keys && keys.length > 0) {
        for (var i = 0; i < keys.length; i++) {
          if (row[keys[i]]) {
            var result = row[keys[i]].toLowerCase().indexOf(q) > -1;
            if (result == true) {
              return true;
            }
          }
        }
      } else {
        var opts = $(this).combobox("options");
        return row[opts.textField].toLowerCase().indexOf(q) > -1;
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function initNextInputFocus(formID, domID) {
    $(document).on(
      "keyup",
      "#" + formID + " input, a.easyui-linkbutton",
      function (e) {
        try {
          if (e.keyCode == 13 && e.target.type != "submit") {
            if (domID && e.target.id == domID) {
              return;
            }
            var inputs = $(e.target)
              .parents("form")
              .eq(0)
              .find(
                ":input:visible:not(:disabled):not([readonly]), a.easyui-linkbutton"
              );
            var idx = inputs.index(e.target);
            var input_ = $(e.target).parent().prev();
            if (
              !input_.is(".easyui-searchbox") &&
              !input_.is(".easyui-combogrid")
            ) {
              var currInput = inputs[idx];
              var inputClass = $(currInput).attr("class");
              if (inputClass && inputClass.indexOf("validatebox-invalid") > -1) {
                var currValue = $(currInput).val();
                if (!currValue) {
                  return;
                }
              }
              if (idx == inputs.length - 1) {
                if (inputs[0]) {
                  inputs[0].select();
                }
              } else {
                inputs[idx + 1].focus();
                if (inputs[idx + 1].tagName == "INPUT") {
                  inputs[idx + 1].select();
                }
              }
            }
          }
          if (e.altKey) {
            if (e.keyCode == 83) {
              var button_sub = $("a[shortcutKey='S']");
              button_sub.click();
            }
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      }
    );
  }
  function dataGridPageChange(gridObject, url, param) {
    try {
      var pager = $(gridObject).datagrid("getPager");
      $(pager).pagination({
        displayMsg: param.msg == " " ? param.msg : undefined,
        onBeforeRefresh: function () { },
        onRefresh: function (page, size) {
          try {
            param.page = page;
            param.size = size;
            that.loadDataGrigPageData(gridObject, url, param);
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelectPage: function (page, size) {
          try {
            param.page = page;
            param.size = size;
            that.loadDataGrigPageData(gridObject, url, param);
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      });
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function comboGridPageChange(gridObject, url, q, param) {
    try {
      var pager = $(gridObject).combogrid("grid").datagrid("getPager");
      $(pager).pagination({
        displayMsg: "",
        onBeforeRefresh: function () { },
        onRefresh: function (page, size) {
          try {
            if (q != "" || param.blanksearch) {
              param.dm = q;
              param.page = page;
              param.size = size;
              loadComboGrigPageData(gridObject, url, param);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onChangePageSize: function (size) {
          try {
            if (q != "" || param.blanksearch) {
              param.dm = q;
              param.page = 1;
              param.size = size;
              $(gridObject).combogrid("grid").datagrid("options").pageSize = size;
              loadComboGrigPageData(gridObject, url, param);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelectPage: function (page, size) {
          try {
            if (q != "" || param.blanksearch) {
              param.dm = q;
              param.page = page;
              param.size = size;
              loadComboGrigPageData(gridObject, url, param);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      });
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function loadComboGrigPageData(gridObject, url, params) {
    try {
      if (params.page) {
        var pager = $(gridObject).combogrid("grid").datagrid("getPager");
        if (params.page != pager.pageNumber) {
          pager.pagination({
            pageNumber: params.page,
          });
        }
      }
      var q = params.dm;
      if (q != "" || params.blanksearch || params.key || params.jsm) {
        var resData = that.commonHttppost(url, params).data;
        if (resData.total > 0) {
          $(gridObject).combogrid("setValue", q);
          $(gridObject).combogrid("grid").datagrid("loadData", { total: resData.total, rows: resData.list });
          $(gridObject).combogrid("showPanel");
          $(gridObject).combogrid("grid").datagrid("highlightRow", 0);
        } else {
          $(gridObject).combogrid("grid").datagrid("loadData", []);
        }
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function initDadaGrid_tab(
    gridid,
    columns_arr,
    url,
    params,
    pageSize,
    title,
    fitColumns,
    nowrap
  ) {
    try {
      if (!fitColumns) {
        fitColumns = false;
      } else {
        fitColumns = true;
      }
      var isPagination = false;
      if (pageSize > 0) {
        isPagination = true;
      } else {
        pageSize = 10;
      }
      if (nowrap != false) {
        nowrap = true;
      }
      var columns = [];
      for (var i = 0; i < columns_arr.length; i++) {
        var cols = [];
        var col_arr = columns_arr[i];
        $(col_arr).each(function () {
          var _align = this[3];
          var _rowspan = this[4];
          var _colspan = this[5];
          var _hidden = this[6];
          var _sortable = this[7];
          if (!_align) {
            _align = "center";
          }
          if (!_rowspan) {
            _rowspan = 1;
          }
          if (!_colspan) {
            _colspan = 1;
          }
          if (!_hidden) {
            _hidden = false;
          }
          if (!_sortable) {
            _sortable = false;
          }
          var column = {
            field: this[0],
            title: this[1],
            sortable: _sortable,
            align: _align,
            rowspan: _rowspan,
            colspan: _colspan,
            halign: "center",
            hidden: _hidden,
          };
          if (this[2] && this[2] != "") {
            var column_width = this[2];
            column.width = column_width;
            column.formatter = function (value, row, index) {
              if (value && (200 / 14) * value.length > column_width) {
                return "<span title=" + value + ">" + value + "</span>";
              }
              return value;
            };
          } else {
            if (!fitColumns) {
              column.width = 56;
            }
          }
          cols.push(column);
        });
        columns[i] = cols;
      }
      $("#" + gridid).datagrid({
        url: url,
        title: title,
        fitColumns: fitColumns,
        idField: "id",
        fit: true,
        loadMsg: "加载数据中...",
        rownumbers: true,
        singleSelect: true,
        remoteSort: false,
        pagination: isPagination,
        pageSize: pageSize,
        queryParams: params,
        columns: columns,
        nowrap: nowrap,
      });
      setTimeout(function () {
        $(".align_center").parent().parent().css("text-align", "center");
      }, 0);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function loadDataGrigPageData(gridObject, url, params) {
    try {
      $(gridObject).datagrid("loading");
      var resData = that.commonHttppost(url, params).data;
      if (resData && resData.list) {
        $(gridObject).datagrid("loadData", {total: resData.total, rows: resData.list});
      } else {
        $(gridObject).datagrid("loadData", resData || []);
      }
      setTimeout(function () {
        $(gridObject).datagrid("loaded");
      }, 200);
      return resData;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function openMsgBox(title, content, button, type) {
    return new Promise((resolve, reject) => {
      if (button == 0) {
        layui.layer.alert(content, { title });
        resolve(1);
      } else if (button == 1) {
        layui.layer.confirm(content, {title}, function(i) {
          resolve(1);
          layui.layer.close(i);
        });
      }
      if (type) {
        console.error('暂未实现该功能');
        resolve(1);
      }
    })
  }
  function showxtcs() {
    console.warn('该方法暂未开发，依赖于专有浏览器');
    return new Promise.resolve()
  }
  function closeWindow() {
    console.warn('该方法暂未开发，依赖于专有浏览器');
    return new Promise.resolve()
  }
  function getCommonDic(dics) {
    try {
      var domId = dics.domid;
      var mrz = dics.mrz;
      var mrz_index = dics.mrz_index;
      var dicKey = dics.dicKey;
      var flag = dics.flag == "1";
      var nextid = dics.nextid;
      var changemethod = dics.changemethod;
      var required = dics.required;
      var valueField = dics.valueField;
      var textField = dics.textField;
      var multiple = dics.multiple;
      if (multiple) {
        multiple = true;
      } else {
        multiple = false;
      }
      if (!valueField) {
        valueField = "dm";
      }
      if (!textField) {
        textField = "dmmc";
      }
      if (required) {
        required = true;
      } else {
        required = false;
      }
      var addnull = dics.addnull;
      var data = that.dicget(dicKey);
      data = that.convertKeysToLowerCase(data);
      data = that.filterDicData(data);
      if (data.length > 0) {
        if (addnull == "1") {
          var row = { dm: "", mc: "所有", pym: "", dmmc: "所有" };
          data.unshift(row);
        }
      }
      var panelHeight = dics.panelHeight;
      if (!panelHeight) {
        if (data.length > 10) {
          panelHeight = 200;
        } else {
          panelHeight = "";
        }
      }
      var isselect = true;
      $("#" + domId).combobox({
        data: data,
        valueField: valueField,
        textField: textField,
        selectOnNavigation: false,
        required: required,
        panelHeight: panelHeight,
        multiple: multiple,
        onLoadSuccess: function () {
          try {
            var data = $("#" + domId).combobox("getData");
            if (data.length > 0) {
              if (mrz && mrz != "") {
                $("#" + domId).combobox("select", mrz);
              } else if (mrz_index) {
                $("#" + domId).combobox("select", data[0][valueField]);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        filter: function (q, row) {
          try {
            var keys = new Array();
            keys[keys.length] = "dm";
            keys[keys.length] = "mc";
            keys[keys.length] = "dmmc";
            keys[keys.length] = "pym";
            return that.filterComboboxData(q, row, keys);
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelect: function (record) {
          try {
            if (isselect) {
              if (nextid) {
                $("#" + nextid)
                  .textbox("textbox")
                  .focus();
              }
              if (dics.method) {
                dics.method(record);
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onChange: function (newValue, oldValue) {
          try {
            var panel = $(this).combo("panel");
            var item = panel.children("div:visible").eq(0);
            item.addClass("combobox-item-hover");
            if (changemethod) {
              changemethod(newValue, oldValue);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onHidePanel: function () {
          try {
            var panel = $(this).combo("panel");
            $(panel.children("div")).removeClass("combobox-item-hover");
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      });
      if (data.length > 0) {
        var datalength = data.length;
        var index = -1;
        $("#" + domId)
          .textbox("textbox")
          .keyup(function (event) {
            try {
              var e = event || window.event;
              var keyCode = e.keyCode || e.which;
              if (keyCode == "38") {
                var pClosed = $("#" + domId)
                  .combobox("panel")
                  .panel("options").closed;
                if (pClosed) {
                  isselect = false;
                  if (index == 0 || index == -1) {
                    $("#" + domId).combobox(
                      "setValue",
                      data[Number(datalength) - 1][valueField]
                    );
                    index = Number(datalength) - 1;
                  } else {
                    index = Number(index) - 1;
                    $("#" + domId).combobox("setValue", data[index][valueField]);
                  }
                  isselect = true;
                }
              }
              if (keyCode == "40") {
                let pClosed = $("#" + domId)
                  .combobox("panel")
                  .panel("options").closed;
                if (pClosed) {
                  isselect = false;
                  if (index == -1 || index == Number(datalength) - 1) {
                    $("#" + domId).combobox("setValue", data[0][valueField]);
                    index = 0;
                  } else {
                    index = Number(index) + 1;
                    $("#" + domId).combobox("setValue", data[index][valueField]);
                  }
                  isselect = true;
                }
              }
              if (keyCode == "13") {
                if (nextid) {
                  $("#" + nextid)
                    .textbox("textbox")
                    .focus();
                }
                if (dics.method) {
                  dics.method(data[index]);
                }
              }
            } catch (e) {
              JsErrorTrace(e);
            }
          });
      }
      $("#" + domId)
        .next()
        .children(":text")
        .blur(function () {
          try {
            var pClosed = $("#" + domId)
              .combobox("panel")
              .panel("options").closed;
            if (pClosed) {
              var textvalue = $("#" + domId).combobox("getText");
              var combodata = $("#" + domId).combobox("getData");
              var idvalue = $("#" + domId).combobox("getValue");
              var setValue = "";
              $.each(combodata, function (i, n) {
                if (textvalue == n[textField]) {
                  setValue = n[valueField];
                  return false;
                } else {
                  if (flag) {
                    setValue = textvalue;
                  } else {
                    setValue = "";
                  }
                }
              });
              if (setValue != idvalue || setValue == "") {
                $("#" + domId).combobox("setValue", setValue);
                if (flag == true) {
                  $("#" + domId).combobox("setText", textvalue);
                }
                if (required && $("#" + domId).combobox("getText") == "") {
                }
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        });
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function filterDicData(data) {
    try {
      var returndata = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].mj == 1) {
          returndata.push(data[i]);
        }
      }
      return returndata;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function convertKeysToLowerCase(obj) {
    try {
      if (!obj || typeof obj !== "object") return null;
      if (obj instanceof Array) {
        for (var i = 0; i < obj.length; i++) {
          that.convertKeysToLowerCase(obj[i]);
        }
      } else {
        for (var key in obj) {
          that.convertKeysToLowerCase(obj[key]);
          if (key.toLowerCase() != key) {
            obj[key.toLowerCase()] = obj[key];
            delete obj[key];
          }
        }
      }
      return obj;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function getCommonCombogrid(params) {
    try {
      var id = params.id;
      var columns_arr = params.columns;
      var idField = params.idField;
      var textField = params.textField;
      var querymethod = params.querymethod;
      var selectmethod = params.selectmethod;
      var nextid = params.nextid;
      var comboclass = params.comboclass;
      var extramethod = params.extramethod;
      var flag = params.flag;
      var panelWidth = params.panelWidth;
      var nowrap = params.nowrap;
      var panelHeight = params.panelHeight;
      var pagination = params.pagination;
      var required = params.required;
      var pageSize = params.pageSize;
      var pageList = params.pageList;
      if (!pageSize) {
        pageSize = 10;
      }
      if (!pageList) {
        pageList = [10, 20, 30, 40, 50];
      }
      if (required) {
        required = true;
      } else {
        required = false;
      }
      if (!nowrap) {
        nowrap = true;
      }
      var selectedindex = 0;
      var firstsearch = true;
      var blanksearch = params.blanksearch;
      var columns = [];
      for (var i = 0; i < columns_arr.length; i++) {
        var cols = [];
        var col_arr = columns_arr[i];
        $(col_arr).each(function () {
          var _align = this[3];
          var _rowspan = this[4];
          var _colspan = this[5];
          var _width = this[6];
          if (!_align) {
            _align = "center";
          }
          if (!_rowspan) {
            _rowspan = 1;
          }
          if (!_colspan) {
            _colspan = 1;
          }
          if (!_width) {
            _width = 100;
          }
          var column = {
            field: this[0],
            title: this[1],
            sortable: false,
            align: _align,
            rowspan: _rowspan,
            colspan: _colspan,
            halign: "center",
            width: _width,
          };
          if (this[2] && this[2] != "") {
            var column_width = this[2];
            column.width = column_width;
            column.formatter = function (value, row, index) {
              if (value) {
                if ((200 / 14) * value.length > column_width) {
                  return "<span title=" + value + ">" + value + "</span>";
                }
              }
              return value;
            };
          }
          cols.push(column);
        });
        columns[i] = cols;
      }
      if (!panelWidth) {
        panelWidth = 300;
      }
      if (!panelHeight) {
        panelHeight = "auto";
      }
      if (pagination) {
        pagination = true;
      } else {
        pagination = false;
      }
      $("#" + id).combogrid({
        idField: idField,
        textField: textField,
        selectOnNavigation: false,
        panelHeight: panelHeight,
        panelWidth: panelWidth,
        rownumbers: true,
        fitColumns: true,
        required: required,
        pagination: pagination,
        columns: columns,
        nowrap: nowrap,
        pageSize: pageSize,
        pageList: pageList,
        onLoadSuccess: function () {},
        onShowPanel: function () {},
        onSelect: function (index, row) {
          try {
            if (nextid) {
              $("#" + nextid)
                .textbox("textbox")
                .focus();
            } else {
              $("#" + id)
                .textbox("textbox")
                .focus();
            }
            if (selectmethod) {
              selectmethod(index, row);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        keyHandler: {
          enter: function () {
            try {
              var gridObject = $(this);
              var value = $(this).combogrid("getText");
              var regu = "^[ ]+$";
              var re = new RegExp(regu);
              if (re.test(value) && !blanksearch) {
                return;
              }
              if ((value && !re.test(value)) || blanksearch) {
                querymethod();
                var rows = $(this).combogrid("grid").datagrid("getRows");
                firstsearch = true;
                if (rows.length == 0) {
                  $.messager.show({
                    title: "",
                    msg: "查询数据为空",
                    showType: "slide",
                    timeout: 2000,
                    style: {
                      right: "",
                      top:
                        document.body.scrollTop +
                        document.documentElement.scrollTop,
                      bottom: "",
                    },
                  });
                  if (flag == true) {
                    $(this).combogrid("setValue", value);
                    if (nextid) {
                      setTimeout(function () {
                        $("#" + nextid)
                          .textbox("textbox")
                          .focus();
                      }, 1);
                    }
                  } else {
                    $(this).combogrid("setValue", "");
                    $(this).combogrid("setText", "");
                  }
                  $(this).combogrid("hidePanel");
                  return;
                } else if (rows.length == 1) {
                  if (params.one_index_show == true) {
                    $(this).combogrid("showPanel");
                  } else {
                    $(this).combogrid("setValue", rows[0][idField]);
                    $(this).combogrid("hidePanel");
                    if (nextid) {
                      setTimeout(function () {
                        $("#" + nextid)
                          .textbox("textbox")
                          .focus();
                      }, 1);
                    }
                    if (selectmethod) {
                      selectmethod(0, rows[0]);
                    }
                    $(this).combogrid("hidePanel");
                    return;
                  }
                } else {
                  $(this).combogrid("showPanel");
                }
                $(this).combogrid("setValue", "");
                $(this).combogrid("setText", value);
                $(this).combogrid("grid").datagrid("highlightRow", 0);
                $("#" + id)
                  .textbox("textbox")
                  .blur();
                selectedindex = 0;
                document.onkeyup = function (event) {
                  try {
                    if (JSON.stringify(gridObject[0]) != "{}") {
                      var pClosed = $("#" + id)
                        .combogrid("panel")
                        .panel("options").closed;
                      if (!pClosed) {
                        var e = event || window.event;
                        var keyCode = e.keyCode || e.which;
                        if (keyCode >= 48 && keyCode <= 57) {
                          var realkey = String.fromCharCode(keyCode);
                          $("#" + id)
                            .combogrid("grid")
                            .datagrid("highlightRow", -1);
                          $("#" + id)
                            .combogrid("grid")
                            .datagrid("highlightRow", Number(realkey) - 1);
                          selectedindex = Number(realkey) - 1;
                        }
                        if (keyCode == 38) {
                          var grid = $("#" + id).combogrid("grid");
                          if (selectedindex == 0) {
                            selectedindex = grid.datagrid("getRows").length - 1;
                          } else {
                            selectedindex = Number(selectedindex) - 1;
                          }
                          grid.datagrid("highlightRow", selectedindex);
                        }
                        if (keyCode == 40) {
                          let grid = $("#" + id).combogrid("grid");
                          if (
                            selectedindex ==
                            grid.datagrid("getRows").length - 1
                          ) {
                            selectedindex = 0;
                          } else {
                            selectedindex = Number(selectedindex) + 1;
                          }
                          grid.datagrid("highlightRow", selectedindex);
                        }
                        if (keyCode == 13) {
                          if (!firstsearch) {
                            var rows = $("#" + id)
                              .combogrid("grid")
                              .datagrid("getRows");
                            $("#" + id).combogrid(
                              "setValue",
                              rows[selectedindex][idField]
                            );
                            $("#" + id).combogrid("hidePanel");
                            firstsearch = true;
                            if (nextid) {
                              $("#" + nextid)
                                .textbox("textbox")
                                .focus();
                            } else {
                              $("#" + id)
                                .textbox("textbox")
                                .focus();
                            }
                            if (selectmethod) {
                              selectmethod(selectedindex, rows[selectedindex]);
                            }
                          } else {
                            firstsearch = false;
                          }
                        }
                        if (keyCode == 27) {
                          $("#" + id).combogrid("setText", value);
                          $("#" + id)
                            .textbox("textbox")
                            .focus();
                          $("#" + id).combogrid("hidePanel");
                          firstsearch = true;
                        }
                        if (pagination && keyCode == 37) {
                          var pagenum = $("#" + id)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageNumber;
                          if (pagenum != 1) {
                            $("#" + id)
                              .combogrid("grid")
                              .datagrid("getPager")
                              .pagination("select", pagenum - 1);
                          }
                        }
                        if (pagination && keyCode == 39) {
                          let pagenum = $("#" + id)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageNumber;
                          var pageSize = $("#" + id)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageSize;
                          var datatotal = $("#" + id)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").total;
                          var pageTotal = Number(datatotal / pageSize) + 1;
                          if (pagenum != pageTotal) {
                            $("#" + id)
                              .combogrid("grid")
                              .datagrid("getPager")
                              .pagination("select", pagenum + 1);
                          }
                        }
                      }
                    }
                  } catch (e) {
                    JsErrorTrace(e);
                  }
                };
              } else {
                if (nextid && !required) {
                  $("#" + nextid)
                    .textbox("textbox")
                    .focus();
                }
              }
            } catch (e) {
              JsErrorTrace(e);
            }
          },
          query: function (q, e) {
            try {
              $(this).combogrid("hidePanel");
              $(this).combogrid("grid").datagrid("highlightRow", -1);
              return false;
            } catch (e) {
              JsErrorTrace(e);
            }
          },
        },
      });
      if (comboclass != "" && comboclass != undefined) {
        $("#" + id)
          .next("span")
          .children("span")
          .children("a")
          .removeClass("combo-arrow")
          .addClass(comboclass);
        $("#" + id)
          .next("span")
          .children("span")
          .unbind();
        $("#" + id)
          .next("span")
          .children("span")
          .children("a")
          .unbind();
        $("#" + id)
          .next("span")
          .children("span")
          .children("a")
          .click(function () {
            extramethod();
          });
      } else {
        $("#" + id)
          .next("span")
          .children("span")
          .hide();
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function getBtns(b, filter, id) {
    let btns = b.find('iframe')[0].contentWindow.$(`[layer-filter~="${filter}"]`);
    return btns.length > 1 ? btns.filter(id) : btns
  }
  function getEvent(e, id) {
    return (a, b, c) => {
      getBtns(b, e, id).trigger('click');
      return false
    }
  }
  function getBtnEvent(len, id) {
    var btnEvent = { cancel: getEvent('btn_cancel', id) };
    for (let i = 2; i < len; i++) {
      btnEvent['btn' + i] = getEvent('btn_' + (i - 1), id);
    }
    btnEvent['btn' + len] = getEvent('btn_last', id);
    return btnEvent
  }
  function openDialog(url, data, width, height, id, btn = ['保存', '放弃', '关闭']) {
    var btnEvent = getBtnEvent(btn.length, id);
    if (url.indexOf("xtcs.html") > -1) {
      var mkbh = that.getBrowserParam('cssz', 'mkbh');
      return that.showxtcs(mkbh)
    } else {
      if (/^[0-9]+$/.test(width)) {
        width += 'px';
      }
      if (/^[0-9]+$/.test(height)) {
        height += 'px';
      }
      return new Promise((resolve, reject) => {
        that.openPop({
          url,
          data: { page_source: 'layer' },
          btn,
          area: [width, height],
          success(elem, index) {
            elem.find('iframe')[0].contentWindow[that.name].setOpenPopIndex(index);
          },
          yes(a, b, c) {
            let btns = getBtns(b, 'btn_yes', id);
            btns.trigger('click');
          },
          end: resolve,
          btnEvent
        });
      })
    }
  }
  function setOpenPopIndex(i) {
    openPopIndex = i;
  }
  function closeOpenPopChild() {
    w.parent.layui.layer.close(openPopIndex);
  }
  function xzqhComboGridPageChange(gridObject, param) {
    var pager = $(gridObject).combogrid("grid").datagrid("getPager");
    $(pager).pagination({
      displayMsg: "",
      onBeforeRefresh: function () {},
      onRefresh: function (page, size) {
        try {
          param.page = page;
          param.size = size;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onChangePageSize: function (size) {
        try {
          param.page = 1;
          param.size = size;
          $(gridObject).combogrid("grid").datagrid("options").pageSize = size;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      onSelectPage: function (page, size) {
        try {
          param.page = page;
          param.size = size;
          loadXzqhComboGrigPageData(gridObject, param);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
    });
  }
  function loadXzqhComboGrigPageData(gridObject, params) {
    if (params.page) {
      var pager = $(gridObject).combogrid("grid").datagrid("getPager");
      if (params.page != pager.pageNumber) {
        pager.pagination({
          pageNumber: params.page,
        });
      }
    }
    var q = params.dm;
    var page = params.page + "";
    var size = params.size + "";
    if (q != "") {
      var resultData = getXzqh(q, page, size);
      if (resultData.total > 0) {
        $(gridObject).combogrid("setValue", q);
        $(gridObject).combogrid("grid").datagrid("loadData", resultData);
        $(gridObject).combogrid("showPanel");
      } else {
        $(gridObject).combogrid("grid").datagrid("loadData", []);
      }
    }
  }
  function getXzqh(jsm, page, size) {
    var data = that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {jsm, page, size}).data || {};
    return {
      total: data.total,
      rows: data.list
    }
  }
  function xzqh(id) {
    var data = that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {id}).data;
    return (data ? data[0] : data) || {}
  }
  function zxzqhget(sjid) {
    return that.commonHttppost('/zs03-ywzd/xzqhgl/s-xzqh', {sjid}).data
  }
  function getEditorCombogrid(params) {
    try {
      var gridId = params.gridId;
      var columns_arr = params.columns;
      var idField = params.idField;
      var textField = params.textField;
      var querymethod = params.querymethod;
      var selectmethod = params.selectmethod;
      var nextobj = params.nextobj;
      var comboclass = params.comboclass;
      var extramethod = params.extramethod;
      var panelWidth = params.panelWidth;
      var panelHeight = params.panelHeight;
      var pagination = params.pagination;
      var required = params.required;
      var showOne = params.showOne;
      if (required) {
        required = true;
      } else {
        required = false;
      }
      var selectedindex = 0;
      var firstsearch = true;
      var columns = [];
      for (var i = 0; i < columns_arr.length; i++) {
        var cols = [];
        var col_arr = columns_arr[i];
        $(col_arr).each(function () {
          var _align = this[3];
          var _rowspan = this[4];
          var _colspan = this[5];
          var _width = this[6];
          var _hidden = this[7];
          if (_hidden) {
            _hidden = true;
          } else {
            _hidden = false;
          }
          if (!_align) {
            _align = "center";
          }
          if (!_rowspan) {
            _rowspan = 1;
          }
          if (!_colspan) {
            _colspan = 1;
          }
          if (!_width) {
            _width = 100;
          }
          var column = {
            field: this[0],
            title: this[1],
            sortable: false,
            align: _align,
            rowspan: _rowspan,
            colspan: _colspan,
            halign: "center",
            width: _width,
            hidden: _hidden,
          };
          if (this[2] && this[2] != "") {
            var column_width = this[2];
            column.width = column_width;
            column.formatter = function (value, row, index) {
              if (value) {
                if ((200 / 14) * value.length > column_width) {
                  return "<span title=" + value + ">" + value + "</span>";
                }
              }
              return value;
            };
          }
          if (this[0] == "mzypmc") {
            column.formatter = function (value, row, index) {
              if (value) {
                var mzypmcstr = "";
                var mzypmc = value;
                var mzypgg = row.mzypgg;
                var mzypcd = row.mzypcd;
                mzypmc = undell(mzypmc);
                mzypmcstr = mzypmc;
                if (mzypgg) {
                  mzypgg = undell(mzypgg);
                  mzypmcstr = mzypmcstr + "(" + mzypgg + ")";
                }
                if (mzypcd) {
                  mzypcd = undell(mzypcd);
                  mzypmcstr = mzypmcstr + "  " + mzypcd;
                }
                return mzypmcstr;
              } else {
                return "";
              }
            };
          }
          cols.push(column);
        });
        columns[i] = cols;
      }
      if (!panelWidth) {
        panelWidth = 300;
      }
      if (!panelHeight) {
        panelHeight = "auto";
      }
      if (pagination) {
        pagination = true;
      } else {
        pagination = false;
      }
      var editordata = {
        data: [],
        idField: idField,
        textField: textField,
        selectOnNavigation: false,
        panelHeight: panelHeight,
        panelWidth: panelWidth,
        rownumbers: true,
        fitColumns: true,
        required: required,
        pagination: pagination,
        columns: columns,
        onLoadSuccess: function () {
          try {
            var obj = $("#" + gridId)
              .datagrid("getPanel")
              .find("div.datagrid-editable")
              .children("table")
              .children("tbody")
              .children("tr")
              .children("td")
              .children("input");
            if (comboclass != "" && comboclass != undefined) {
              $(obj)
                .next("span")
                .children("span")
                .children("a")
                .removeClass("combo-arrow")
                .addClass(comboclass);
              $(obj).next("span").children("span").unbind();
              $(obj).next("span").children("span").children("a").unbind();
              $(obj)
                .next("span")
                .children("span")
                .children("a")
                .click(function () {
                  extramethod();
                });
            } else {
              $(obj).next("span").children("span").hide();
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelect: function (index, row) {
          try {
            $("#" + gridId)
              .datagrid("getPanel")
              .find("div.datagrid-editable")
              .children("table")
              .children("tbody")
              .children("tr")
              .children("td")
              .children("input");
            if (selectmethod) {
              selectmethod(index, row);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        keyHandler: {
          enter: function () {
            try {
              var gridObject = $(this);
              var value = $(this).combogrid("getText");
              var regu = "^[ ]+$";
              var re = new RegExp(regu);
              if (re.test(value)) {
                return;
              }
              if (value && !re.test(value)) {
                querymethod(gridObject);
                var rows = $(this).combogrid("grid").datagrid("getRows");
                firstsearch = true;
                if (rows.length == 0) {
                  $.messager.show({
                    title: "",
                    msg: "查询数据为空",
                    showType: "slide",
                    style: {
                      right: "",
                      top:
                        document.body.scrollTop +
                        document.documentElement.scrollTop,
                      bottom: "",
                    },
                  });
                  $(this).combogrid("setValue", "");
                  $(this).combogrid("hidePanel");
                  return;
                } else if (rows.length == 1 && showOne != true) {
                  $(this).combogrid("setValue", rows[0][idField]);
                  $(this).combogrid("hidePanel");
                  if (selectmethod) {
                    selectmethod(0, rows[0]);
                  }
                  return;
                } else {
                  $(this).combogrid("showPanel");
                }
                $(this).combogrid("setValue", "");
                $(this).combogrid("setText", value);
                $(this).combogrid("grid").datagrid("highlightRow", 0);
                $(this).textbox("textbox").blur();
                selectedindex = 0;
                document.onkeydown = function (event) {
                  try {
                    if (event.keyCode == "38" || event.keyCode == "40") {
                      event.returnValue = false;
                    }
                  } catch (e) {
                    JsErrorTrace(e);
                  }
                };
                document.onkeyup = function (event) {
                  try {
                    if (JSON.stringify(gridObject[0]) != "{}") {
                      var pClosed = $(gridObject)
                        .combogrid("panel")
                        .panel("options").closed;
                      if (!pClosed) {
                        var e = event || window.event;
                        var keyCode = e.keyCode || e.which;
                        if (keyCode >= 48 && keyCode <= 57) {
                          var realkey = String.fromCharCode(keyCode);
                          $(gridObject)
                            .combogrid("grid")
                            .datagrid("highlightRow", -1);
                          $(gridObject)
                            .combogrid("grid")
                            .datagrid("highlightRow", Number(realkey) - 1);
                          selectedindex = Number(realkey) - 1;
                        }
                        if (keyCode == 38) {
                          var grid = $(gridObject).combogrid("grid");
                          if (selectedindex == 0) {
                            selectedindex =
                              grid.datagrid("getRows").length - 1;
                          } else {
                            selectedindex = Number(selectedindex) - 1;
                          }
                          grid.datagrid("highlightRow", selectedindex);
                        }
                        if (keyCode == 40) {
                          grid = $(gridObject).combogrid("grid");
                          if (
                            selectedindex ==
                            grid.datagrid("getRows").length - 1
                          ) {
                            selectedindex = 0;
                          } else {
                            selectedindex = Number(selectedindex) + 1;
                          }
                          grid.datagrid("highlightRow", selectedindex);
                        }
                        if (keyCode == 13) {
                          if (!firstsearch) {
                            var rows = $(gridObject)
                              .combogrid("grid")
                              .datagrid("getRows");
                            $(gridObject).combogrid(
                              "setValue",
                              rows[selectedindex][idField]
                            );
                            $(gridObject).combogrid("hidePanel");
                            firstsearch = true;
                            if (selectmethod) {
                              selectmethod(
                                selectedindex,
                                rows[selectedindex]
                              );
                            }
                          } else {
                            firstsearch = false;
                          }
                        }
                        if (keyCode == 27) {
                          $(gridObject).combogrid("setText", value);
                          $(gridObject).textbox("textbox").focus();
                          $(gridObject).combogrid("hidePanel");
                          firstsearch = true;
                        }
                        if (pagination && keyCode == 37) {
                          var pagenum = $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageNumber;
                          if (pagenum != 1) {
                            $(gridObject)
                              .combogrid("grid")
                              .datagrid("getPager")
                              .pagination("select", pagenum - 1);
                          }
                        }
                        if (pagination && keyCode == 39) {
                          pagenum = $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageNumber;
                          var pageSize = $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").pageSize;
                          var datatotal = $(gridObject)
                            .combogrid("grid")
                            .datagrid("getPager")
                            .pagination("options").total;
                          var pageTotal = Number(datatotal / pageSize) + 1;
                          if (pagenum != pageTotal) {
                            $(gridObject)
                              .combogrid("grid")
                              .datagrid("getPager")
                              .pagination("select", pagenum + 1);
                          }
                        }
                      }
                    }
                  } catch (e) {
                    JsErrorTrace(e);
                  }
                };
              } else {
                if (nextobj && !required) {
                  setTimeout(function () {
                    var dg = $("#" + gridId);
                    var cell = dg.datagrid("cell");
                    endCellEdit(dg, true);
                    getNextEditor(dg, cell);
                  }, 100);
                }
              }
            } catch (e) {
              JsErrorTrace(e);
            }
          },
          query: function (q, e) {
            try {
              $(this).combogrid("hidePanel");
              $(this).combogrid("grid").datagrid("highlightRow", -1);
              return false;
            } catch (e) {
              JsErrorTrace(e);
            }
          },
        },
      };
      return editordata;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function endCellEdit(target, accepted) {
    try {
      var dg = $(target);
      var cell = dg.datagrid("cell");
      if (cell) {
        var input = dg.datagrid("input", cell);
        if (input) {
          if (accepted) {
            if (dg.datagrid("validateRow", cell.index)) {
              dg.datagrid("endEdit", cell.index);
              dg.datagrid("gotoCell", cell);
            } else {
              dg.datagrid("gotoCell", cell);
              dg.datagrid("options").rowIndex = cell.index;
              input.focus();
              return false;
            }
          } else {
            dg.datagrid("cancelEdit", cell.index);
            dg.datagrid("gotoCell", cell);
          }
        }
      }
      return true;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
   function getNextEditor(dg, cell) {
    try {
      var gridrows = dg.datagrid("getRows");
      var cell_row = gridrows[cell.index];
      var opts = dg.datagrid("options");
      var columns = new Array();
      var columnsAll = opts.columns;
      for (var i = 0; i < columnsAll.length; i++) {
        columns = columns.concat(columnsAll[i]);
      }
      var editorColumns = [];
      $.each(columns, function (i, n) {
        var readonly_field = n.field + "_readonly";
        var nofocus_field = n.field + "_nofocus";
        if (n.editor && !cell_row[readonly_field] && !cell_row[nofocus_field]) {
          editorColumns.push(n);
        }
      });
      var cellIndex = -1;
      for (i = 0; i < editorColumns.length; i++) {
        var n = editorColumns[i];
        if (n.field == cell.field) {
          cellIndex = i;
          if (cellIndex == editorColumns.length - 1) {
            var cell_index_1 = cell.index + 1;
            for (
              var index_kbj = cell.index + 1;
              index_kbj < gridrows.length;
              index_kbj++
            ) {
              if (gridrows[index_kbj].jgsfkbj != "bkbj") {
                cell_index_1 = index_kbj;
                break;
              }
            }
            if (
              gridrows[cell_index_1] &&
              gridrows[cell_index_1].jgsfkbj != "bkbj"
            ) {
              dg.datagrid("editCell", {
                index: cell_index_1,
                field: editorColumns[0].field,
              });
            }
          }
        } else {
          if (cellIndex != -1 && i <= editorColumns.length - 1) {
            if (editorColumns[i].editor) {
              cell = {
                index: cell.index,
                field: editorColumns[i].field,
              };
              dg.datagrid("editCell", cell);
              var param = dg.datagrid("cell");
              var input = dg.datagrid("input", param);
              input.select();
              break;
            } else {
              cell_index_1 = cell.index + 1;
              for (
                index_kbj = cell.index + 1;
                index_kbj < gridrows.length;
                index_kbj++
              ) {
                if (gridrows[index_kbj].jgsfkbj != "bkbj") {
                  cell_index_1 = index_kbj;
                  break;
                }
              }
              if (
                gridrows[cell_index_1] &&
                gridrows[cell_index_1].jgsfkbj != "bkbj"
              ) {
                dg.datagrid("editCell", {
                  index: cell_index_1,
                  field: editorColumns[0].field,
                });
                param = dg.datagrid("cell");
                input = dg.datagrid("input", param);
                input.select();
              }
            }
          } else if (i == editorColumns.length - 1) {
            cell_index_1 = cell.index + 1;
            for (
              index_kbj = cell.index + 1;
              index_kbj < gridrows.length;
              index_kbj++
            ) {
              if (gridrows[index_kbj].jgsfkbj != "bkbj") {
                cell_index_1 = index_kbj;
                break;
              }
            }
            if (
              gridrows[cell_index_1] &&
              gridrows[cell_index_1].jgsfkbj != "bkbj"
            ) {
              dg.datagrid("editCell", {
                index: cell_index_1,
                field: editorColumns[0].field,
              });
              param = dg.datagrid("cell");
              input = dg.datagrid("input", param);
              if (input) {
                input.select();
              }
            }
          }
        }
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function undell(str = "") {
    var tempStr = str.replace(/\\u0026/g, "&");
    tempStr = tempStr.replace(/\\u0025/g, "%");
    tempStr = tempStr.replace(/\\u003F/g, "?");
    tempStr = tempStr.replace(/\\u0023/g, "#");
    tempStr = tempStr.replace(/\\u003D/g, "=");
    tempStr = tempStr.replace(/\\u002B/g, "+");
    tempStr = tempStr.replace(/%20/g, " ");
    tempStr = BASE64.decoderToString(tempStr);
    return tempStr;
  }
  function getEditorCombobox (params) {
    try {
      var data = params.data;
      var mrz = params.mrz;
      var nextobj = params.nextobj;
      var method = params.method;
      var method_onChange = params.method_onChange;
      var flag = params.flag;
      var filter_arr = params.filter_arr;
      var valueField = params.valueField;
      var textField = params.textField;
      var required = params.required;
      var readonly = params.readonly;
      var isselect = true;
      var multiple = params.multiple;
      if (!valueField || valueField == "") {
        valueField = "code";
      }
      if (!textField || textField == "") {
        textField = "name";
      }
      if (required) {
        required = true;
      } else {
        required = false;
      }
      if (!readonly) {
        readonly = false;
      }
      if (!multiple) {
        multiple = false;
      }
      var editordata = {
        data: data,
        valueField: valueField,
        textField: textField,
        selectOnNavigation: false,
        required: required,
        readonly: readonly,
        multiple: multiple,
        onLoadSuccess: function () {
          try {
            $(this).combobox("clear");
            var data = $(this).combobox("getData");
            var obj = this;
            if (data.length > 0) {
              if (mrz != "") {
                $(this).combobox("select", mrz);
              }
            }
            $(this)
              .next()
              .children(":text")
              .blur(function () {
                try {
                  var pClosed = $(obj)
                    .combobox("panel")
                    .panel("options").closed;
                  if (pClosed) {
                    var textvalue = $(obj).combobox("getText");
                    var combodata = $(obj).combobox("getData");
                    var idvalue = $(obj).combobox("getValue");
                    var setValue = "";
                    $.each(combodata, function (i, n) {
                      if (textvalue == n[textField]) {
                        setValue = n[valueField];
                        return false;
                      } else {
                        if (flag) {
                          setValue = textvalue;
                        } else {
                          setValue = "";
                        }
                      }
                    });
                    if (setValue != idvalue || setValue == "") {
                      $(obj).combobox("setValue", setValue);
                      if (required && setValue == "") {
                        $(obj).textbox("textbox").focus();
                        return;
                      }
                    }
                  }
                } catch (e) {
                  JsErrorTrace(e);
                }
              });
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        filter: function (q, row) {
          try {
            var keys = new Array();
            if (filter_arr) {
              keys = filter_arr;
            } else {
              keys[keys.length] = valueField;
              keys[keys.length] = textField;
            }
            return that.filterComboboxData(q, row, keys);
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onSelect: function (record) {
          try {
            if (isselect) {
              if (nextobj) {
                $(nextobj).textbox("textbox").focus();
              }
              if (method && record) {
                method(record, $(this));
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onChange: function (newValue, oldValue) {
          try {
            var panel = $(this).combo("panel");
            var item = panel.children("div:visible").eq(0);
            item.addClass("combobox-item-hover");
            if (method_onChange) {
              method_onChange(newValue, oldValue, $(this));
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        },
        onHidePanel: function () {
          try {
            var panel = $(this).combo("panel");
            $(panel.children("div")).removeClass("combobox-item-hover");
          } catch (e) {
            JsErrorTrace(e);
          }
        },
      };
      return editordata;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function format(fmt = 'yyyy/MM/dd') {
    var o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  function addDay(num = 1) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addHour(num * 24)
    }
    let date  = new Date(this);
    date.setDate(date.getDate() + num);
    return date
  }
  function addHour(num = 1) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addMinute(num * 60)
    }
    let date  = new Date(this);
    date.setHours(date.getHours() + num);
    return date
  }
  function addMinute(num) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addSeconds(num * 60)
    }
    let date  = new Date(this);
    date.setMinutes(date.getMinutes() + num);
    return date
  }
  function addSeconds(num) {
    let date  = new Date(this);
    date.setSeconds(date.getSeconds() + num);
    return date
  }
  function getMonthDays() {
    let date  = new Date(this);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate()
  }
  function getYearDay() {
    let date  = new Date(this);
    date.setMonth(2);
    date.setDate(0);
    return date.getDate() === 28 ? 365 : 366
  }
  function addMonth(num = 1) {
    let date  = new Date(this), m = date.getMonth();
    num = Number(num);
    date.setMonth(m + num);
    if ((m + num) % 12 < date.getMonth()) {
      date = date.addMonth(-1);
      date.setDate(date.getMonthDays());
    }
    return date
  }
  function addYear(num = 1) {
    let date  = new Date(this), m = date.getMonth();
    num = Number(num);
    date.setFullYear(date.getFullYear() + num);
    if (m < date.getMonth()) {
      date = date.addMonth(-1);
      date.setDate(date.getMonthDays());
    }
    return date
  }
  function getWeek(num = 1) {
    let date  = new Date(this);
    num = Number(num);
    date.setDate(date.getDate() + num - (date.getDay() || 7));
    return date
  }
  function getMonthDay(num = 1){
    let date  = new Date(this);
    date.setDate(num);
    return date
  }
  function getSeason(num = 1) {
    let date  = new Date(this);
    date.setMonth(Math.floor(date.getMonth() / 3) * 3);
    date.setDate(num);
    return date
  }
  Object.defineProperties(w.Date, {
    format,
    addDay,
    addHour,
    addMinute,
    addSeconds,
    getMonthDays,
    getYearDay,
    addMonth,
    addYear,
    getWeek,
    getMonthDay,
    getSeason
  });
  if (!Date.prototype.format) {
    Date.prototype.format = format;
    Date.prototype.addDay = addDay;
    Date.prototype.addHour = addHour;
    Date.prototype.addMinute = addMinute;
    Date.prototype.addSeconds = addSeconds;
    Date.prototype.getMonthDays = getMonthDays;
    Date.prototype.getYearDay = getYearDay;
    Date.prototype.addMonth = addMonth;
    Date.prototype.addYear = addYear;
    Date.prototype.getWeek = getWeek;
    Date.prototype.getMonthDay = getMonthDay;
    Date.prototype.getSeason = getSeason;
  }
  function dateFormat(fmt = 'yyyy/MM/dd') {
    fmt = fmt.split('');
    let i = 0, v = this.match(/[0-9]/g);
    return fmt.map(it => {
      if (/[yMdhms]/.test(it)) {
        it = v[i] || '';
        i++;
      }
      return it
    }).join('')
  }
  function toDate(fmt, fmt1) {
    fmt = fmt.split('');
    var str = 'yyyy/MM/dd hh:mm:ss', i = 0;
    fmt.forEach((it) => {
      if (/[yMdhmsS]/.test(it)) {
        str = str.replace(it, this[i] | '0');
        i++;
      } else if (this[i] == ' ' || isNaN(this[i])) {
        i++;
      }
    });
    str = new Date(str.replace(/[yMdhmsS]/g, '0').replace(/\/00/g, '/01'));
    if (fmt1) {
      return str.format(fmt1)
    }
    return str
  }
  Object.defineProperties(w.String, {
    dateFormat
  });
  if (!String.prototype.dateFormat) {
    String.prototype.dateFormat = dateFormat;
    String.prototype.toDate = toDate;
  }
  (function () {
    let prevE;
    function keyup(e) {
      if (e.keyCode === 13) {
        if (!layui.layer || !layui.layer.submit()) {
          let tag = e.target.tagName;
          if (tag !== 'BODY' && !prevE) {
            prevE = e.target;
          }
          if (prevE) {
            let fElem = $(prevE).parents('.layui-form');
            if (prevE.getAttribute('jt-submit') !== null) {
              fElem.find('[lay-submit]').trigger('click');
            } else {
              let elems = fElem.find(srcWEventKbjbg)
                , i = elems.index(prevE)
                , elem = elems[i + 1] || elems[0];
              if (elem) {
                tag = elem.tagName;
                if (tag === 'TD') {
                  let el = $(elem);
                  setTimeout(() => {
                    el.trigger('click');
                  }, 0);
                } else {
                  elem.focus();
                  let el = $(elem);
                  if (elem.getAttribute('laydate') !== null) {
                    el.trigger('click');
                  } else if (el.hasClass('jt-select')) {
                    setTimeout(() => {
                      el.parent().trigger('click');
                    }, 0);
                  }
                }
                prevE = elem;
              }
            }
          }
        }
      }
    }
    if (!Class.prototype.keyupEvent) {
      $(d).on('click', srcWEventKbjbg, function (e) {
        prevE = e.currentTarget;
      });
      $(d).on('focus', srcWEventKbjbg, function (e) {
        prevE = e.currentTarget;
        if (!prevE.select) {
          prevE = e.target;
        }
        prevE.select();
        prevE.selectionStart = 0;
        prevE.selectionEnd = prevE.value.length;
        prevE = e.currentTarget;
      });
      let setHeight = function () {
        return debounce1((elem) => {
          elem.style.height = '';
          setTimeout(() => {
            elem.style.height = elem.scrollHeight + 'px';
          }, 0);
        }, 10)
      }();
      d.addEventListener('keyup', keyup);
      w.addEventListener('jt-keyup', function (e) {
        keyup(e.detail);
      });
      $(d).on('DOMNodeInserted', '[autoHeight="true"]', function (e) {
        setHeight(e.currentTarget);
      });
      $(d).on('DOMNodeRemoved', '[autoHeight="true"]', function (e) {
        setHeight(e.currentTarget);
      });
      $('[autoHeight="true"]').each((i, el) => {
        setHeight(el);
      });
    }
  })();
  w.JsErrorTrace = function (e) {
    console.error(e);
  };
  $.fn.serializeOriginObject = function () {
    try {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name]) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || "");
        } else {
          o[this.name] = this.value || "";
        }
      });
      return o;
    } catch (e) {
      JsErrorTrace(e);
    }
  };
  $.fn.serializeObject = function () {
    try {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
        if (o[this.name]) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || "");
        } else {
          o[this.name] = this.value || "";
        }
      });
      return o;
    } catch (e) {
      JsErrorTrace(e);
    }
  };
  if ($.fn.datagrid) {
    $.extend($.fn.datagrid.methods, {
      editCell: function (jq, param) {
        try {
          return jq.each(function () {
            editCell(this, param);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      isEditing: function (jq, index) {
        try {
          var opts = $.data(jq[0], "datagrid").options;
          var tr = opts.finder.getTr(jq[0], index);
          return tr.length && tr.hasClass("datagrid-row-editing");
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      gotoCell: function (jq, param) {
        try {
          return jq.each(function () {
            gotoCell(this, param);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      enableCellEditing: function (jq) {
        try {
          return jq.each(function () {
            enableCellEditing(this);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      disableCellEditing: function (jq) {
        try {
          return jq.each(function () {
            disableCellEditing(this);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      enableCellSelecting: function (jq) {
        try {
          return jq.each(function () {
            enableCellSelecting(this);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      disableCellSelecting: function (jq) {
        try {
          return jq.each(function () {
            disableCellSelecting(this);
          });
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      input: function (jq, param) {
        try {
          if (!param) {
            return null;
          }
          var ed = jq.datagrid("getEditor", param);
          if (ed) {
            var t = $(ed.target);
            if (t.hasClass("textbox-f")) {
              t = t.textbox("textbox");
            }
            return t;
          } else {
            return null;
          }
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      cell: function (jq) {
        try {
          return getCurrCell(jq[0]);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      getSelectedCells: function (jq) {
        try {
          return getSelectedCells(jq[0]);
        } catch (e) {
          JsErrorTrace(e);
        }
      },
      addEditor: function (jq, param) {
        if (param instanceof Array) {
          $.each(param, function (index, item) {
            var e = $(jq).datagrid("getColumnOption", item.field);
            e.editor = item.editor;
          });
        } else {
          var e = $(jq).datagrid("getColumnOption", param.field);
          e.editor = param.editor;
        }
      },
      removeEditor: function (jq, param) {
        if (param instanceof Array) {
          $.each(param, function (index, item) {
            var e = $(jq).datagrid("getColumnOption", item);
            e.editor = {};
          });
        } else {
          var e = $(jq).datagrid("getColumnOption", param);
          e.editor = {};
        }
      },
    });
    $.extend($.fn.datagrid.defaults, {
      clickToEdit: true,
      dblclickToEdit: false,
      navHandler: {
        37: function (e) {
          var opts = $(this).datagrid("options");
          return navHandler.call(this, e, opts.isRtl ? "right" : "left");
        },
        39: function (e) {
          var opts = $(this).datagrid("options");
          return navHandler.call(this, e, opts.isRtl ? "left" : "right");
        },
        38: function (e) {
          return navHandler.call(this, e, "up");
        },
        40: function (e) {
          return navHandler.call(this, e, "down");
        },
        13: function (e) {
          return enterHandler.call(this, e);
        },
        27: function (e) {
          return escHandler.call(this, e);
        },
        8: function (e) {
          var dg = $(this);
          var param = dg.datagrid("cell");
          var d = e.srcElement || e.target;
          if (!param || d.tagName.toUpperCase() != "INPUT") {
            e.preventDefault();
          }
          return clearHandler.call(this, e);
        },
        46: function (e) {
          return deleteDataGridRow.call(this, e);
        },
        keypress: function (e) {
          if (e.metaKey || e.ctrlKey) {
            return;
          }
          var dg = $(this);
          var param = dg.datagrid("cell");
          if (!param) {
            return;
          }
          var input = dg.datagrid("input", param);
          if (!input) {
            var tmp = $("<span></span>");
            tmp.html(String.fromCharCode(e.which));
            var c = tmp.text();
            tmp.remove();
            if (c) {
              dg.datagrid("editCell", {
                index: param.index,
                field: param.field,
                value: c,
              });
              return false;
            }
          }
        },
      },
      onBeforeCellEdit: function (index, field) { },
      onCellEdit: function (index, field, value) {
        var input = $(this).datagrid("input", { index: index, field: field });
        if (input) {
          if (value != undefined) {
            input.val(value);
          }
        }
      },
      onSelectCell: function (index, field) {
        $(this)
          .parent()
          .find(".datagrid-btable")
          .eq(1)
          .find("tr")
          .each(function (i, o) {
            if (index == i) {
              $(o).css("background-color", "#FFFF80");
              $(o).css("font-weight", "bold");
            } else {
              $(o).css("background-color", "#FAFAFA");
              $(o).css("font-weight", "");
            }
          });
      },
      onUnselectCell: function (index, field) { },
    });
  }
  function disableCellEditing(target) {
    try {
      var dg = $(target);
      var panel = dg.datagrid("getPanel");
      var opts = dg.datagrid("options");
      opts.onClickCell = opts.oldOnClickCell || opts.onClickCell;
      opts.onDblClickCell = opts.oldOnDblClickCell || opts.onDblClickCell;
      opts.onBeforeSelect = opts.OldOnBeforeSelect || opts.onBeforeSelect;
      panel
        .unbind(".cellediting")
        .find("td.datagrid-row-selected")
        .removeClass("datagrid-row-selected");
      panel.panel("panel").unbind(".cellediting");
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function enableCellEditing(target) {
    try {
      var dg = $(target);
      var opts = dg.datagrid("options");
      var panel = dg.datagrid("getPanel");
      panel
        .attr("tabindex", 1)
        .css("outline-style", "none")
        .unbind(".cellediting")
        .bind("keydown.cellediting", function (e) {
          try {
            var h = opts.navHandler[e.keyCode];
            if (h) {
              return h.call(target, e);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("keypress.cellediting", function (e) {
          try {
            return opts.navHandler["keypress"].call(target, e);
          } catch (e) {
            JsErrorTrace(e);
          }
        });
      panel
        .panel("panel")
        .unbind(".cellediting")
        .bind("keydown.cellediting", function (e) {
          try {
            e.stopPropagation();
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("keypress.cellediting", function (e) {
          try {
            e.stopPropagation();
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("mouseover.cellediting", function (e) {
          try {
            var td = $(e.target).closest("td[field]");
            if (td.length) {
              td.addClass("datagrid-row-over");
              td.closest("tr.datagrid-row").removeClass("datagrid-row-over");
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("mouseout.cellediting", function (e) {
          try {
            var td = $(e.target).closest("td[field]");
            td.removeClass("datagrid-row-over");
          } catch (e) {
            JsErrorTrace(e);
          }
        });
      opts.isRtl =
        dg.datagrid("getPanel").css("direction").toLowerCase() == "rtl";
      opts.oldOnClickCell = opts.onClickCell;
      opts.oldOnDblClickCell = opts.onDblClickCell;
      opts.onClickCell = function (index, field, value) {
        try {
          if (opts.clickToEdit) {
            var rows = dg.datagrid("getRows");
            if (rows[index].jgsfkbj != "bkbj") {
              $(this).datagrid("editCell", { index: index, field: field });
            }
          } else {
            if (endCellEdit(this, true)) {
              $(this).datagrid("gotoCell", {
                index: index,
                field: field,
              });
            }
          }
          opts.oldOnClickCell.call(this, index, field, value);
        } catch (e) {
          JsErrorTrace(e);
        }
      };
      if (opts.dblclickToEdit) {
        opts.onDblClickCell = function (index, field, value) {
          try {
            $(this).datagrid("editCell", { index: index, field: field });
            opts.oldOnDblClickCell.call(this, index, field, value);
          } catch (e) {
            JsErrorTrace(e);
          }
        };
      }
      opts.OldOnBeforeSelect = opts.onBeforeSelect;
      opts.onBeforeSelect = function () {
        return false;
      };
      dg.datagrid("clearSelections");
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function disableCellSelecting(target) {
    try {
      var dg = $(target);
      var state = dg.data("datagrid");
      var panel = dg.datagrid("getPanel");
      var opts = state.options;
      opts.onBeforeSelect = opts.OldOnBeforeSelect || opts.onBeforeSelect;
      panel
        .unbind(".cellediting")
        .find("td.datagrid-row-selected")
        .removeClass("datagrid-row-selected");
      var dc = state.dc;
      dc.body1.add(dc.body2).unbind("cellediting");
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function enableCellSelecting(target) {
    try {
      var dg = $(target);
      var state = dg.data("datagrid");
      var panel = dg.datagrid("getPanel");
      var opts = state.options;
      var dc = state.dc;
      panel
        .attr("tabindex", 1)
        .css("outline-style", "none")
        .unbind(".cellediting")
        .bind("keydown.cellediting", function (e) {
          try {
            var h = opts.navHandler[e.keyCode];
            if (h) {
              return h.call(target, e);
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        });
      dc.body1
        .add(dc.body2)
        .unbind(".cellediting")
        .bind("click.cellediting", function (e) {
          try {
            var tr = $(e.target).closest(".datagrid-row");
            if (tr.length && tr.parent().length) {
              var td = $(e.target).closest("td[field]", tr);
              if (td.length) {
                var index = parseInt(tr.attr("datagrid-row-index"));
                var field = td.attr("field");
                var p = {
                  index: index,
                  field: field,
                };
                if (opts.singleSelect) {
                  selectCell(target, p);
                } else {
                  if (opts.ctrlSelect) {
                    if (e.ctrlKey) {
                      if (td.hasClass("datagrid-row-selected")) {
                        unselectCell(target, p);
                      } else {
                        selectCell(target, p);
                      }
                    } else {
                      unselectAllCells(target);
                      selectCell(target, p);
                    }
                  } else {
                    if (td.hasClass("datagrid-row-selected")) {
                      unselectCell(target, p);
                    } else {
                      selectCell(target, p);
                    }
                  }
                }
              }
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("mouseover.cellediting", function (e) {
          try {
            var td = $(e.target).closest("td[field]");
            if (td.length) {
              td.addClass("datagrid-row-over");
              td.closest("tr.datagrid-row").removeClass("datagrid-row-over");
            }
          } catch (e) {
            JsErrorTrace(e);
          }
        })
        .bind("mouseout.cellediting", function (e) {
          try {
            var td = $(e.target).closest("td[field]");
            td.removeClass("datagrid-row-over");
          } catch (e) {
            JsErrorTrace(e);
          }
        });
      opts.isRtl =
        dg.datagrid("getPanel").css("direction").toLowerCase() == "rtl";
      opts.OldOnBeforeSelect = opts.onBeforeSelect;
      opts.onBeforeSelect = function () {
        return false;
      };
      dg.datagrid("clearSelections");
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function editCell(target, param) {
    try {
      var dg = $(target);
      dg.datagrid("options").rowIndex = param.index;
      dg.datagrid("options").fieldName = param.field;
      var opts = dg.datagrid("options");
      var input = dg.datagrid("input", param);
      if (input) {
        dg.datagrid("gotoCell", param);
        input.focus();
        return;
      }
      if (!endCellEdit(target, true)) {
        return;
      }
      if (opts.onBeforeCellEdit.call(target, param.index, param.field) == false) {
        return;
      }
      var fields = dg
        .datagrid("getColumnFields", true)
        .concat(dg.datagrid("getColumnFields"));
      $.map(fields, function (field) {
        var col = dg.datagrid("getColumnOption", field);
        col.editor1 = col.editor;
        if (field != param.field) {
          col.editor = null;
        }
      });
      var col = dg.datagrid("getColumnOption", param.field);
      if (col.editor) {
        dg.datagrid("beginEdit", param.index);
        input = dg.datagrid("input", param);
        if (input) {
          dg.datagrid("gotoCell", param);
          setTimeout(function () {
            input
              .unbind(".cellediting")
              .bind("keydown.cellediting", function (e) {
                if (e.keyCode == 13) {
                  opts.navHandler["13"].call(target, e);
                  return false;
                }
              });
            input.focus();
          }, 0);
          opts.onCellEdit.call(target, param.index, param.field, param.value);
        } else {
          dg.datagrid("cancelEdit", param.index);
          dg.datagrid("gotoCell", param);
        }
      } else {
        dg.datagrid("gotoCell", param);
      }
      $.map(fields, function (field) {
        var col = dg.datagrid("getColumnOption", field);
        col.editor = col.editor1;
      });
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function gotoCell(target, p) {
    try {
      var dg = $(target);
      var opts = dg.datagrid("options");
      var panel = dg.datagrid("getPanel").focus();
      var cparam = dg.datagrid("cell");
      if (cparam) {
        var input = dg.datagrid("input", cparam);
        if (input) {
          input.focus();
          return;
        }
      }
      if (typeof p == "object") {
        _go(p, dg, opts, target);
        return;
      }
      var cell = panel.find("td.datagrid-row-selected");
      if (!cell) {
        return;
      }
      var fields = dg
        .datagrid("getColumnFields", true)
        .concat(dg.datagrid("getColumnFields"));
      var field = cell.attr("field");
      var tr = cell.closest("tr.datagrid-row");
      var rowIndex = parseInt(tr.attr("datagrid-row-index"));
      var colIndex = $.inArray(field, fields);
      if (p == "up" && rowIndex > 0) {
        rowIndex--;
      } else if (p == "down") {
        if (opts.finder.getRow(target, rowIndex + 1)) {
          rowIndex++;
        }
      } else if (p == "left") {
        var i = colIndex - 1;
        while (i >= 0) {
          var col = dg.datagrid("getColumnOption", fields[i]);
          if (!col.hidden) {
            colIndex = i;
            break;
          }
          i--;
        }
      } else if (p == "right") {
        i = colIndex + 1;
        while (i <= fields.length - 1) {
          col = dg.datagrid("getColumnOption", fields[i]);
          if (!col.hidden) {
            colIndex = i;
            break;
          }
          i++;
        }
      }
      field = fields[colIndex];
      _go({ index: rowIndex, field: field }, dg, opts, target);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function _go(p, dg, opts, target) {
    dg.datagrid("scrollTo", p.index);
    unselectAllCells(target);
    selectCell(target, p);
    var td = opts.finder
      .getTr(target, p.index, "body", 2)
      .find('td[field="' + p.field + '"]');
    if (td.length) {
      var body2 = dg.data("datagrid").dc.body2;
      var left = td.position().left;
      if (left < 0) {
        body2._scrollLeft(body2._scrollLeft() + left * (opts.isRtl ? -1 : 1));
      } else if (left + td._outerWidth() > body2.width()) {
        body2._scrollLeft(
          body2._scrollLeft() +
          (left + td._outerWidth() - body2.width()) * (opts.isRtl ? -1 : 1)
        );
      }
    }
  }
  function getSelectedCells(target) {
    try {
      var cells = [];
      var panel = $(target).datagrid("getPanel");
      panel.find("td.datagrid-row-selected").each(function () {
        var td = $(this);
        cells.push({
          index: parseInt(
            td.closest("tr.datagrid-row").attr("datagrid-row-index")
          ),
          field: td.attr("field"),
        });
      });
      return cells;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function unselectAllCells(target) {
    try {
      var panel = $(target).datagrid("getPanel");
      panel.find("td.datagrid-row-selected").removeClass("datagrid-row-selected");
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function selectCell(target, p) {
    try {
      var opts = $(target).datagrid("options");
      if (opts.singleSelect) {
        unselectAllCells(target);
      }
      var cell = opts.finder
        .getTr(target, p.index)
        .find('td[field="' + p.field + '"]');
      cell.addClass("datagrid-row-selected");
      opts.onSelectCell.call(target, p.index, p.field);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function unselectCell(target, p) {
    try {
      var opts = $(target).datagrid("options");
      var cell = opts.finder
        .getTr(target, p.index)
        .find('td[field="' + p.field + '"]');
      cell.removeClass("datagrid-row-selected");
      opts.onUnselectCell.call(target, p.index, p.field);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function getCurrCell(target) {
    try {
      var cell = $(target).datagrid("getPanel").find("td.datagrid-row-selected");
      if (cell.length) {
        return {
          index: parseInt(
            cell.closest("tr.datagrid-row").attr("datagrid-row-index")
          ),
          field: cell.attr("field"),
        };
      } else {
        return null;
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function navHandler(e, dir) {
    try {
      var dg = $(this);
      var param = dg.datagrid("cell");
      var input = dg.datagrid("input", param);
      if (!input) {
        dg.datagrid("gotoCell", dir);
        return false;
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function enterHandler(e) {
    try {
      var dg = $(this);
      var cell = dg.datagrid("cell");
      if (!cell) {
        return;
      }
      var a = dg.datagrid("getEditor", cell);
      if (a && a.type != "combogrid") {
        var input = dg.datagrid("input", cell);
        if (input) {
          var valida = endCellEdit(this, true);
          if (!valida) {
            return;
          }
          getNextEditor(dg, cell);
        } else {
          dg.datagrid("editCell", cell);
        }
        return false;
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function escHandler(e) {
    try {
      endCellEdit(this, false);
      return false;
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function clearHandler(e) {
    try {
      var dg = $(this);
      var param = dg.datagrid("cell");
      if (!param) {
        return;
      }
      var input = dg.datagrid("input", param);
      if (!input) {
        dg.datagrid("editCell", {
          index: param.index,
          field: param.field,
          value: "",
        });
        return false;
      }
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  function deleteDataGridRow(e) {
    try {
      window.delDataGridRow_edit(this);
    } catch (e) {
      JsErrorTrace(e);
    }
  }
  w.CommonUtil = Class;
  Class.prototype = {unique,calc,toDecimalNumber,throttle,debounce,debounce1,uuid,kbjbg: srcWEventKbjbg,val,getParamsUrl,getUrlParams,loading,loaded,strToUrl,config,init,initConfig,loadPwdJs,session,local,formatTreeData,getUploadUrl,alertMsg,getBase64,getJse,use,define,svgRender,down,analysis,expExcel,setPrint,getPrint,printSetHtml,print,printConfig,getAjax,getAjaxSync,getPostData,commonHttppost,commonQueryAsyncHttppost_callback,getConfig,getToken,upload,encryption,dealAjaxData,dealsUrl,getBaseUrl,getHostUrl,getJsUrl,getTpUrl,getServiceUrl,getFaceUrl,getImgUrl,exiting,router,exit,logOut,login,getRouterW,getTopMenuId,routerByData,alertPwd,renderTop,dealLogin,getSystemTime,getKsxx,getRyxx,faceVerify,dicget,possessMkqx,paramget,getUser,getMenu,dealMenu,getXb,renderDic,getDic,renderDics,dics,readSfzCard: srcBaseBaseFunErrorSync,getLocalInfo: srcBaseBaseFunError,getMac: srcBaseBaseFunError,facedialog: srcBaseBaseFunError,bbPrint: srcBaseBaseFunError,getBrowserParam,setBrowserParam,setSelectOption,setRadioValue,setFormData,setFormVal,dateRender,dateRangeRender,layerLoading,openPop,initTree,initTable,initQueryPage,judgeNumber,initBaseBar,setShortcutKeys,initShortcutKey,getCommonCombobox,filterComboboxData,dataGridPageChange,initDadaGrid_tab,initNextInputFocus,loadDataGrigPageData,openMsgBox,xzqh,zxzqhget,getCommonDic,filterDicData,convertKeysToLowerCase,getCommonCombogrid,openDialog,showxtcs,setOpenPopIndex,closeOpenPopChild,comboGridPageChange,loadComboGrigPageData,xzqhComboGridPageChange,loadXzqhComboGrigPageData,getXzqh,closeWindow,getEditorCombogrid,getEditorCombobox,jqFun: {
    magic: getToken
  },check: {
    sfzh: identity
  },name: 'commonUtil',keyupEvent: new CustomEvent('jt-keyup', { detail: { keyCode: 13, target: { tagName: 'BODY' } } })}
})(window, document);
