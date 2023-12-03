import {
  getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, bbPrint, getSystemVal,
  getBrowserParam, setBrowserParam, getUser, logOut, exit, paramget, setWebName, readFile, alertMsg, load, loaded, laoding,
  confirmMsg, session, setPageTemp, tempData, getAllUrl, getUploadUrl, dealsUrl, getUrl, getParamsUrl, getUrlParams, getBaseUrl,
  getMainUrl, uuid, system
} from '../../g-lobal/index'
export function Class() {
  let menu, mac;
  function setMac(a) {
    return mac = a;
  }
  function setMenuVal(a) {
    return menu = a;
  }
  function readSfzCard(mkbh = "020302", dm = "13") {
    let fun = system.readidcard_lx;
    if (fun && typeof fun === "function") {
      let layerIndex = that.loading();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(null);
        }, 0);
      }).then((e) => {
        let readCardType = (that.paramget(mkbh, dm) || "").split("-")[0], res = JSON.parse(getSystemVal("readidcard_lx", [readCardType]));
        that.loaded(layerIndex);
        if (res.code == "1") {
          return res.data;
        }
        else {
          w.layui.layer.msg(res.msg);
          return Promise.reject();
        }
      });
    }
    else {
      w.layui.layer.msg("该浏览器暂未提供该方法，请联系运营商");
    }
    return Promise.reject();
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
  function facedialog(param) {
    getSystemVal('facedialog', [JSON.stringify(param)]);
  }
  function dicget(dm) {
    return JSON.parse(getSystemVal("dicget", [dm])).data;
  }
  function loadPwdJs() {
    return Promise.resolve();
  }
  function local(name, val = undefined) {
    if (val === undefined) {
      val = JSON.parse(getSystemVal("cookieget", [name]));
      val = val ? val.data : val;
      val = val ? val.result : val;
      return JSON.parse(val || null);
    }
    else if (val === null) {
      getSystemVal("cookiedelete", [name]);
    }
    else {
      getSystemVal("cookiepost", [name, JSON.stringify(val)]);
    }
  }
  function getLocalInfo() {
    try {
      return JSON.parse(getSystemVal("ExeCSUI", ["040003"])).data;
    }
    catch (e) {
      return {};
    }
  }
  function login(url, data, dealResult) {
    let mm = data.mm, layerIndex = that.loading();
    that.val("isMd5", true);
    that.init().then(() => {
      data.mm = w.hex_md5(data.mm);
      let res = JSON.parse(getSystemVal("login", [JSON.stringify(data)]));
      that.dealLogin(res, data, mm, dealResult);
      that.loaded(layerIndex);
    });
  }
  function getMac() {
    if (!mac) {
      setMac(local('mac'));
      if (!mac) {
        try {
          setMac(JSON.parse(getSystemVal("GetSystemInfo")).data.mac);
        }
        catch (e) {
          console.error("该浏览器未提供GetSystemInfo方法");
        }
        local("mac", mac);
      }
    }
    return mac;
  }
  function possessMkqx(mkbh, dm = '') {
    var res = getSystemVal("mkqxhas", [mkbh, dm]);
    res = JSON.parse(res);
    if (res.code == "1") {
      res = res.data.result;
    }
    else {
      w.layui.layer.alert("模块权限获取失败：" + res.msg);
      return;
    }
    return res;
  }
  function router(pid, id, title, url, data) {
    if (data && url) {
      url = that.getParamsUrl(data, that.dealsUrl(url, that.getHostUrl()));
    }
    else if (url) {
      url = that.dealsUrl(url, that.getHostUrl());
    }
    let res = JSON.parse(getSystemVal("openHisSystem", [pid, id === pid ? "" : id, url]));
    if (res.code !== "1") {
      w.location.href = that.dealsUrl(url, that.getHostUrl());
    }
  }
  function showxtcs(mkbh) {
    return new Promise((resolve, reject) => {
      var res = system.showxtcs(mkbh);
      resolve(res);
    });
  }
  function openMsgBox(title, msg, button, type) {
    return new Promise((resolve, reject) => {
      var result = system.showmsgbox(title, msg, button, type);
      var data = JSON.parse(result).data;
      resolve(data.result);
    });
  }
  function closeWindow(num = 0) {
    getSystemVal('closeWindow', [num]);
  }
  function xzqh(xzqh) {
    let res = JSON.parse(getSystemVal("xzqhmget", [xzqh]));
    if (res.code === "1") {
      return res.data;
    }
    else {
      w.layui.layer.alert("行政区划获取失败：" + res.msg);
      return;
    }
  }
  function getXzqh(gjz, pageNumber, pageSize) {
    let res = JSON.parse(getSystemVal("xzqhget", [gjz, pageNumber, pageSize]));
    if (res.code === "1") {
      return res.data;
    }
    else {
      return;
    }
  }
  function zxzqhget(xzqh) {
    let res = JSON.parse(getSystemVal("zxzqhget", [xzqh]));
    if (res.code === "1") {
      return res.data;
    }
    else {
      w.layui.layer.alert("行政区划获取失败：" + res.msg);
      return;
    }
  }
  function getKsxx(bmxz, fwdx) {
    var res = getSystemVal("ksxxget", [bmxz, fwdx]);
    res = JSON.parse(res);
    if (res.code == "1") {
      res = res.data;
    }
    else {
      w.layui.layer.alert("科室信息获取失败：" + res.msg);
      return;
    }
    return res;
  }
  function getMenu(judge) {
    let i = that.loading("加载菜单中");
    setPageTemp(menu, setMenu);
    that.loaded(i);
    return judge
      ? menu["cd-" + w.name.replace(that.val("webNameReg"), "")]
      : menu;
  }
  function setMenu() {
    return setMenuVal(menu || that.dealMenu(JSON.parse(getSystemVal("hiscdqx")).yhcd));
  }
  that.loadPwdJs = loadPwdJs;
  that.login = login;
  that.router = router;
  that.local = local;
  that.getLocalInfo = getLocalInfo;
  that.getMac = getMac;
  that.facedialog = facedialog;
  that.encryption = encryption;
  that.readSfzCard = readSfzCard;
  that.possessMkqx = possessMkqx;
  that.getKsxx = getKsxx;
  that.getMenu = getMenu;
  that.dicget = dicget;
  that.xzqh = xzqh;
  that.getXzqh = getXzqh;
  that.zxzqhget = zxzqhget;
  that.openMsgBox = openMsgBox;
  that.closeWindow = closeWindow;
  that.showxtcs = showxtcs;
  let that$1;
  that.bbPrint = bbPrint
}