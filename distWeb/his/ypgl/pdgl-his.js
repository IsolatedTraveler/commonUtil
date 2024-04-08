(function (w, d) {
  // eslint-disable-next-line no-unused-vars
  let that
  var jqMode = 'jqMagic', Authorization, contentType = 'application/json; charset=utf-8', dataConfig, ajaxSuccessCode = 1, ajaxErrorCode = -1;
  function setJqMode(a) {
    return jqMode = a;
  }
  function setAuthorization(v) {
    return Authorization = v;
  }
  function setAjaxContentType(v) {
    return contentType = v;
  }
  function setDataConfig(a) {
    return dataConfig = a;
  }
  function setAjaxSuccessCode(succ, err) {
    ajaxSuccessCode = succ;
    ajaxErrorCode = err;
  }
  let system;
  function setJtPhisSystem(v) {
    return system = v;
  }
  let webName = '';
  function setWebNameVal(a) {
    return webName = a;
  }
  let commonUtilName = 'commonUtil';
  let urlServer, urlBase;
  function setUrlServerVal(a) {
    return urlServer = a;
  }
  function seturlBaseVal(a) {
    return urlBase = a;
  }
  let userInfo, user, winName = 'jt-index', loginUrl;
  function setUserInfoVal(a) {
    return userInfo = a;
  }
  function setUserVal(a) {
    return user = a;
  }
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
  const ajaxTimeOut = 1000 * 60 * 3, ajaxJqMagic = {
    url: '/magicJq/oauth/token',
    Authorization: 'Basic MDAwMDAwOmp0d3hAMjAyMw==',
    user: {
      username: "admin",
      password: "9e6a933026b133a962a5d217d849f65c"
    }
  };
  const urlRegV = /\/webs\/|\/public\/|\/public21\/|\/public23\/|\/lib\/|\/lib21\/|\/lib23\/|\/.+\[^\/].js|\/[^/]+\.html/;
  function jqMagic(config, url, rest = false) {
    let magic = session('magic') || ajaxJqMagic;
    setAuthorization(session('Authorization'));
    if (rest) {
      setAjaxMagicToken(magic.user);
    }
    else {
      if (ajaxJqMagic.url === url) {
        setAuthorization(magic.Authorization);
      }
      else if (!Authorization || Authorization == magic.Authorization) {
        setAjaxMagicToken(magic.user);
      }
      else ;
    }
    session('Authorization', Authorization);
    config.headers = config.headers || {};
    config.headers.Authorization = Authorization;
  }
  function setAjaxMagicToken(param) {
    let res = commonHttppost(ajaxJqMagic.url, {}, { param, isNotGetUser: true }, { headers: { Authorization } });
    if (res.code != 1 && param.username != ajaxJqMagic.user.username) {
      setAjaxMagicToken(ajaxJqMagic.user);
    }
    else {
      setAuthorization(res.Authorization);
    }
  }
  var jq = /*#__PURE__*/Object.freeze({
   __proto__: null,
   jqMagic: jqMagic
  });
  function alertMsg(msg, judge = true) {
    if (judge) {
      if (window.layer) {
        window.layer.alert(msg);
      }
      else if (msg == '该方法依赖专有浏览器，请在专有浏览器中使用') {
        alert(msg);
      }
      else {
        getSystemVal('showmsgbox', ['提示', msg, [], 0]);
      }
    }
  }
  function getJtPhisSystem() {
    let systemV = w.jthisJsObject || w.wdphisJsObject;
    if (systemV) {
      setJtPhisSystem(systemV.jthis || systemV.wdphis);
    }
  }
  function getSystemVal(name, param = undefined) {
    if (system) {
      if (system[name]) {
        if (param) {
          return system[name](...param);
        }
        else {
          return system[name]();
        }
      }
      else {
        alertMsg(`当前浏览器未定义该方法（${name}），请联系厂家提供技术支持`);
      }
    }
    else {
      // 报错
      alertMsg("该方法依赖专有浏览器，请在专有浏览器中使用");
    }
  }
  function down(url, name) {
    let a = d.createElement('a'), event = new MouseEvent('click');
    a.href = url;
    a.download = name || 'down';
    a.dispatchEvent(event);
  }
  function getConfig(key = '') {
    setPageTemp(dataConfig, setConfig);
    return key ? dataConfig[key] : dataConfig;
  }
  function setConfig() {
    return setDataConfig(getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true }));
  }
  function dealsUrl(url = '', base = undefined) {
    if (!/^http[s]*:\/\//.test(url)) {
      base = getUrl(base);
      let path = base.pathname.split('/');
      if (/^\.\//.test(url)) {
        path.pop();
        path.push(url.replace('./', ''));
      }
      else if (/^..\//.test(url)) {
        let v = url.split('/'), len = v.filter(it => it === '..').length;
        path.splice(-(len + 1));
        path.push(...v.splice(len));
      }
      else {
        path.push(url.replace(/^\/|\/$/g, ''));
      }
      return base.origin + '/' + path.filter(it => it).join('/');
    }
    return url;
  }
  function getUrl(url) {
    if (url) {
      if (typeof url === 'string') {
        url = new URL(url);
      }
    }
    else {
      url = location;
    }
    return url;
  }
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
  function getUrlParams(key = '', url) {
    url = getUrl(url);
    var search = decodeURIComponent(url.search).slice(1).split('&'), urlParam = {};
    search.forEach(function (it) {
      if (it) {
        var data = it.split('=');
        try {
          urlParam[data[0]] = decodeURIComponent(data[1]);
        }
        catch (e) {
          urlParam[data[0]] = data[1];
        }
      }
    });
    return key ? urlParam[key] : urlParam;
  }
  function getParamsUrl(obj, url = '') {
    if (url) {
      url = new URL(url);
      obj = Object.assign(getUrlParams(null, url), obj);
      url = url.origin + url.pathname;
    }
    else {
      url = url || '';
    }
    let str = getObjToUrl(obj);
    return str ? (url + '?' + str) : url;
  }
  function getObjToUrl(obj) {
    let keys = Object.keys(obj);
    if (keys.length) {
      return keys.map(key => {
        let v = obj[key];
        v = (v === null || v === undefined) ? '' : v;
        return key + '=' + encodeURIComponent(typeof v === 'object' ? JSON.stringify(v) : v);
      }).join('&');
    }
    return '';
  }
  function strToUrl(str, type) {
    return URL.createObjectURL(new Blob([str], { type }));
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
    else if (res.code == 2) {
      jq[jqMode](config, url, true);
      return ajax(url, data, param, option, config, type, async, errCallBack, suuCallBack);
    }
    res = ajaxError({ message: res.message || res.msg, code: 0, i }, option, res);
    return errCallBack ? errCallBack(res) : res;
  }
  function ajaxPostData(data = {}, param = {}, option = {}, config = {}, type = 'POST') {
    if (that && that.dealAjaxData) {
      return that.dealAjaxData(data, param, option, config, type);
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
    if (type === 'POST' && jqMode) {
      jq[jqMode](config, url);
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
      ajax(url, ajaxPostData(data, param, option, config, type), param, option, config, type, true, reject, resolve);
    });
  }
  // 同步
  function getAjax(url, data, option = {}, config = {}) {
    return ajax(url, option.param, data, option, config);
  }
  // 同步
  function commonHttppost(url, data, option = {}, config = {}) {
    return ajax(url, ajaxPostData(data, option.param, option, config), option.param, option, config, 'POST');
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
  function setWebName() {
    var a = getBaseUrl().split('/'), b = (a.pop() || a.pop());
    setWebNameVal(`/${b}/`);
  }
  function exiting(a) {
    a = a || w;
    a.location.href = 'about:blank';
    a.opener = null;
    a.open('', '_self');
    a.close();
  }
  function exited() {
    let data = session('webTabName') || [], url = dealsUrl(loginUrl, getBaseUrl()), name = w.name;
    if (data.length) {
      data.filter((it) => it != name).map((it) => {
        return exiting(w.open('', it, ''));
      });
    }
    if (location.href != url) {
      sessionStorage.clear();
      location.href = url;
    }
  }
  function logOut() {
    if (system) {
      system.logOut();
    }
    else {
      exit();
    }
  }
  function exit() {
    if (system) {
      system.exit();
    }
    else {
      if (w.name == winName) {
        exited();
      }
      else {
        let a = w.open('', winName, '');
        if (a[commonUtilName]) {
          a[commonUtilName].exit();
        }
        else {
          exited();
        }
      }
    }
  }
  function getUser() {
    if (system) {
      return setUserVal(getBrowserParam("0", 'ryxx'));
    }
    else {
      return setPageTemp(user, setUser);
    }
  }
  function setUser() {
    setUserVal(getUserInfo().ryxx);
    if (!user) {
      logOut();
    }
    return user;
  }
  function getUserInfo() {
    return setPageTemp(userInfo, setUserInfo) || {};
  }
  function setUserInfo() {
    setUserInfoVal(session('userinfo'));
    if (!userInfo) {
      logOut();
    }
    return userInfo;
  }
  function setExpHtml(title, { body, head }, { addBefore = '', addAfter = '' }) {
    const html = strToUrl([
      '<html xmlns:svg="http://www.w3.org/2000/svg"><head><meta name="content-type" content="text/html" charset="UTF-8"><title>',
      title,
      '</title></head><body>',
      '<table><thead>',
      addBefore,
      head,
      '</thead><tbody>',
      body,
      addAfter,
      '</tbody></table></body>'
    ].join(''), 'application/vnd.ms-excel');
    down(html, title + '.xls');
  }
  function getTableHtml(param) {
    const data = param.data || [], colsObj = param.colsObj || [], cols = param.cols || colsObj.map(it => it[0]) || [], head = param.head || '<tr>' + colsObj.map(it => `<th>${it[1]}</th>`).join('') + '</tr>';
    return {
      head,
      body: data.map(it => {
        return '<tr>' + cols.map(key => {
          return '<td style="mso-number-format:\'\\@\';">' + it[key] + '<td>';
        }).join('') + '</tr>';
      }).join('')
    };
  }
  function expExcel(param, type) {
    const title = param.title || '导出';
    if (type === 1) {
      // html导出
      const elem = $(param.elem), body = elem.find('tbody').eq(0).clone().html().replace(/(<td ((?!style)[^>])*)(style[='"]+)*([^>]*)(>)/g, function (a, b, c, d, e, f) {
        if (d) {
          return b + d + "mso-number-format:'\\@';" + e + f;
        }
        else {
          return b + ' style="mso-number-format:\'\\@\';"' + f;
        }
      });
      setExpHtml(title, { body, head: elem.find('thead').eq(0).html() }, param);
    }
    else if (type === 2) {
      setExpHtml(title, getTableHtml(param), param);
      // 数据导出
    }
    else ;
  }
  const expInventoryCols = [
    ['xmid', 'xmid'],
    ['xmdm', 'xmdm']
  ];
  var pdtjResolve, pdtjReject;
  function clearInputCheck(arr) {
    arr.forEach(el => {
      el.checked = false;
    });
  }
  function setPdtj(bmid) {
    return new Promise((resolve, reject) => {
      // 设置盘点条件
      $("#pdkf").combobox('setValue', bmid);
      $("#pdsj").maskbox({ value: new Date().format('yyyy-MM-dd hh:mm:ss') });
      clearInputCheck(document.getElementsByName('pdlx'));
      clearInputCheck(document.getElementsByName('pylx'));
      clearInputCheck(document.getElementsByName('pxgz'));
      $("#pdgl_edit").dialog("open");
      $("#pdkf").textbox("textbox").focus();
      pdtjReject = reject;
      pdtjResolve = resolve;
    });
  }
  // 校验当前库房是否可以盘点
  function validateWarehouse(bmid) {
    return new Promise((resolve, reject) => {
      if (w.pdgl.checkSFPD(bmid, '该药房/库有未划价/未发药/未审核的移库单据，不能新增盘点数据！')) {
        reject();
      }
      else {
        resolve(bmid);
      }
    });
  }
  function judgePd() {
    const bmid = $('#ksid').combobox('getValue');
    return validateWarehouse(bmid).then(setPdtj);
  }
  function addInventoryRecord() {
    return judgePd().then(({ pdlx, pdsj, pxgz, pylx, ksid }) => {
      const row = {}, msg = '盘点期间该库房【${bmmc}】将不能进行发药操作，是否要进行盘点？', url = 'pdgl/pdgl_edit.html';
      w.commonUtil.setVar("010603", "pddxx", JSON.stringify(row));
      w.commonUtil.setVar("010603", "czlx", "add");
      w.commonUtil.setVar("010603", "pdsj", pdsj);
      w.commonUtil.setVar("010603", "pdkf", ksid);
      w.commonUtil.setVar("010603", "gljgid", $("#gljgid").combobox("getValue"));
      w.commonUtil.setVar("010603", "gljgmc", $("#gljgid").combobox("getText"));
      w.commonUtil.setVar("010603", "ksid", ksid);
      w.commonUtil.setVar("010603", "pdlx", pdlx);
      w.commonUtil.setVar("010603", "pylx", pylx);
      w.commonUtil.setVar("010603", "pxgz", pxgz);
      w.pdgl.judgeIsOpenUrl(msg, 1, url, 'yppdbj');
    });
  }
  function exportInventoryDetails() {
    // 校验当前库房是否可以盘点
    return judgePd().then((res) => {
      // 获取盘点明细数据
      return commonQueryAsyncHttppost_callback('/rest/queryDataBySql/010603/3', Object.assign({ jgid: getUser().jgid }, res)).then(({ code, data, message }) => {
        // 导出盘点明细
        if (code === ajaxSuccessCode && data && data.length) {
          $('#pdgl_edit').dialog('close');
          expExcel({ data, title: '盘点明细', colsObj: expInventoryCols, addBefore: '' }, 2);
        }
        else {
          return Promise.reject({ code: ajaxErrorCode, message: message || '未获取到明细记录' });
        }
      }).catch(({ message }) => {
        $('#pdgl_edit').dialog('close');
        alertMsg(message);
      });
    });
  }
  function importInventoryDetails() {
    return alert('import');
  }
  function getInputChecked(arr) {
    return [].filter.call(arr, (el) => {
      return el.checked;
    }).map((el) => el.value);
  }
  function closePdtj() {
    $('#pdgl_edit').dialog('close');
    pdtjReject();
  }
  function submitPdtj() {
    if ($('#pdszform').form('validate')) {
      const user = getUser();
      if (w.handleUtil.saveBdczjlhc(user.jgid, user.ryid, 1, 0)) {
        return pdtjResolve({
          pxgz: getInputChecked(document.getElementsByName('pxgz'))[0],
          pdlx: getInputChecked(document.getElementsByName('pdlx'))[0],
          pylx: getInputChecked(document.getElementsByName('pylx')).join(','),
          pdsj: $('#pdsj').maskbox('getValue'),
          ksid: $('#pdkf').combobox('getValue')
        });
      }
    }
    else {
      w.commonUtil.openMsgBox('提示', "请先完成盘点设置", 0);
    }
    pdtjReject();
  }
  const Class = function () {
    that = this;
  };
  function format(fmt = 'yyyy/MM/dd') {
    var o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  function addDay(num = 1) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addHour(num * 24);
    }
    let date = new Date(this);
    date.setDate(date.getDate() + num);
    return date;
  }
  function addHour(num = 1) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addMinute(num * 60);
    }
    let date = new Date(this);
    date.setHours(date.getHours() + num);
    return date;
  }
  function addMinute(num) {
    num = Number(num);
    if (num > parseInt(num)) {
      return this.addSeconds(num * 60);
    }
    let date = new Date(this);
    date.setMinutes(date.getMinutes() + num);
    return date;
  }
  function addSeconds(num) {
    let date = new Date(this);
    date.setSeconds(date.getSeconds() + num);
    return date;
  }
  function getMonthDays() {
    let date = new Date(this);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
  }
  function getYearDay() {
    let date = new Date(this);
    date.setMonth(2);
    date.setDate(0);
    return date.getDate() === 28 ? 365 : 366;
  }
  function addMonth(num = 1) {
    let date = new Date(this), m = date.getMonth();
    num = Number(num);
    date.setMonth(m + num);
    if ((m + num) % 12 < date.getMonth()) {
      date = date.addMonth(-1);
      date.setDate(date.getMonthDays());
    }
    return date;
  }
  function addYear(num = 1) {
    let date = new Date(this), m = date.getMonth();
    num = Number(num);
    date.setFullYear(date.getFullYear() + num);
    if (m < date.getMonth()) {
      date = date.addMonth(-1);
      date.setDate(date.getMonthDays());
    }
    return date;
  }
  function getWeek(num = 1) {
    let date = new Date(this);
    num = Number(num);
    date.setDate(date.getDate() + num - (date.getDay() || 7));
    return date;
  }
  function getMonthDay(num = 1) {
    let date = new Date(this);
    date.setDate(num);
    return date;
  }
  function getSeason(num = 1) {
    let date = new Date(this);
    date.setMonth(Math.floor(date.getMonth() / 3) * 3);
    date.setDate(num);
    return date;
  }
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
  // 字符串处理
  function dateFormat(fmt = 'yyyy/MM/dd') {
    const fmtArr = fmt.split('');
    let i = 0, v = this.match(/[0-9]/g);
    return fmtArr.map(it => {
      if (/[yMdhms]/.test(it)) {
        it = v[i] || '';
        i++;
      }
      return it;
    }).join('');
  }
  function toDate(fmt, fmt1) {
    const fmtArr = fmt.split('');
    var str = 'yyyy/MM/dd hh:mm:ss', i = 0;
    fmtArr.forEach((it) => {
      if (/[yMdhmsS]/.test(it)) {
        str = str.replace(it, this[i] || '0');
        i++;
      }
      else if (this[i] == ' ' || isNaN(this[i])) {
        i++;
      }
    });
    const date = new Date(str.replace(/[yMdhmsS]/g, '0').replace(/\/00/g, '/01'));
    if (fmt1) {
      return date.format(fmt1);
    }
    return date;
  }
  if (!String.prototype.dateFormat) {
    String.prototype.dateFormat = dateFormat;
    String.prototype.toDate = toDate;
  }
  getJtPhisSystem();
  setWebName();
  setJqMode('');
  setAjaxContentType('application/x-www-form-urlencoded');
  setAjaxSuccessCode('1', '-1');
  Class.prototype = { addInventoryRecord, closePdtj, exportInventoryDetails, importInventoryDetails, submitPdtj, commonQueryAsyncHttppost_callback: commonQueryAsyncHttppost_callback, dealAjaxData: dealAjaxData };
  w.hisYpglPdgl = new Class()
})(window, document);
