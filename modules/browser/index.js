import { setPageTemp } from "../../src/public/fun/deeps";

// eslint-disable-next-line no-unused-vars
const Class = function () {
  let systemV = w.jthisJsObject || w.wdphisJsObject,
    system = systemV.jthis || systemV.wdphis,
    menu,
    user;
  function getSystem(judge = true) {
    while (judge) {
      if (system.encryption("{}")) {
        judge = false;
      } else {
        systemV = w.parent.jthisJsObject || w.parent.wdphisJsObject;
        system = systemV.jthis || systemV.wdphis;
      }
    }
  }
  that.loadPwdJs = function () {
    return Promise.resolve();
  };
  function getSystemVal(name, param = []) {
    return system[name](...param) || (getSystem(), system[name](...param));
  }
  function setMenu() {
    return (
      menu || (menu = that.dealMenu(JSON.parse(getSystemVal("hiscdqx")).yhcd))
    );
  }
  that.login = function (url, data, dealResult) {
    let mm = data.mm,
      layerIndex = that.loading();
    this.val("isMd5", true);
    this.init().then((e) => {
      data.mm = hex_md5(data.mm);
      let res = JSON.parse(getSystemVal("login", [JSON.stringify(data)]));
      that.dealLogin(res, data, mm, dealResult);
      that.loaded(layerIndex);
    });
  };
  that.getBrowserParam = function (mkbh, name) {
    return JSON.parse(getSystemVal("varget", [mkbh, name]) || null);
  };
  that.setBrowserParam = function (mkbh, name, value) {
    getSystemVal("varpost", [mkbh, name, JSON.stringify(value)]);
  };
  that.logOut = function () {
    getSystem();
    system.logout();
  };
  that.exit = function () {
    getSystem();
    system.exit();
  };
  that.router = function (pid, id, title, url, data) {
    if (data && url) {
      url = that.getParamsUrl(data, that.dealsUrl(url, that.getHostUrl()));
    } else if (url) {
      url = that.dealsUrl(url, that.getHostUrl());
    }
    let res = JSON.parse(
      getSystemVal("openHisSystem", [pid, id === pid ? "" : id, url])
    );
    if (res.code !== "1") {
      w.location.href = that.dealsUrl(url, that.getHostUrl());
    }
  };
  that.bbPrint = function (reportid, obj, bc) {
    let param = that.getParamsUrl(obj),
      data = JSON.stringify(
        Object.assign(
          {
            reportid,
            param,
            preview: "0",
            printer: "",
            left: "",
            top: "",
            styleid: "",
          },
          bc
        )
      );
    getSystemVal("printreport", [data]);
  };
  that.local = function (name, val) {
    if (val === undefined) {
      val = JSON.parse(getSystemVal("cookieget", [name]));
      val = val ? val.data : val;
      val = val ? val.result : val;
      return JSON.parse(val || null);
    } else if (val === null) {
      getSystemVal("cookiedelete", [name]);
    } else {
      getSystemVal("cookiepost", [name, JSON.stringify(val)]);
    }
  };
  that.session = function (name, val, mkdm = "that") {
    if (val === undefined) {
      val = that.getBrowserParam(mkdm, name);
      return val;
    } else {
      that.setBrowserParam(mkdm, name, val);
    }
  };
  that.getLocalInfo = function () {
    try {
      return JSON.parse(getSystemVal("ExeCSUI", ["040003"])).data;
    } catch (e) {
      return {};
    }
  };
  that.getMac = function () {
    if (!mac) {
      mac = that.local("mac");
      if (!mac) {
        try {
          mac = JSON.parse(getSystemVal("GetSystemInfo")).data.mac;
        } catch (e) {
          console.error("该浏览器未提供GetSystemInfo方法");
        }
        that.local("mac", mac);
      }
    }
    return mac;
  };
  that.facedialog = function (param) {
    getSystem();
    if (system.facedialog) {
      system.facedialog(JSON.stringify(param));
    } else {
      layui.layer.alert(
        "当前浏览器未定义该方法（facedialog），请联系厂家提供技术支持"
      );
    }
  };
  that.getServiceUrl = function () {
    if (!mainURL) {
      mainURL = JSON.parse(getSystemVal("getmainurl")).data;
    }
    return mainURL;
  };
  that.encryption = function (data) {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    return {
      data,
      sstoken: JSON.stringify(
        JSON.parse(getSystemVal("encryption", [data])).data
      ),
    };
  };
  that.readSfzCard = function (mkbh = "020302", dm = "13") {
    let fun = system.readidcard_lx;
    if (fun && typeof fun === "function") {
      let layerIndex = that.loading();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 0);
      }).then((e) => {
        let readCardType = (that.paramget(mkbh, dm) || "").split("-")[0],
          res = JSON.parse(getSystemVal("readidcard_lx", [readCardType]));
        that.loaded(layerIndex);
        if (res.code == "1") {
          return res.data;
        } else {
          layui.layer.msg(res.msg);
          return Promise.reject();
        }
      });
    } else {
      layui.layer.msg("该浏览器暂未提供该方法，请联系运营商");
    }
    return Promise.reject();
  };
  that.possessMkqx = function (mkbh, dm) {
    var res = getSystemVal("mkqxhas", [mkbh, dm]);
    res = JSON.parse(res);
    if (res.code == "1") {
      res = res.data.result;
    } else {
      layui.layer.alert("模块权限获取失败：" + res.msg);
      return;
    }
    return res;
  };
  that.getKsxx = function (bmxz, fwdx) {
    var res = getSystemVal("ksxxget", [bmxz, fwdx]);
    res = JSON.parse(res);
    if (res.code == "1") {
      res = res.data;
    } else {
      layui.layer.alert("科室信息获取失败：" + res.msg);
      return;
    }
    return res;
  };
  that.paramget = function (mkdm, bh) {
    let res = getSystemVal("paramget", [mkdm, bh]);
    return bh ? res : JSON.parse(res);
  };
  that.dicget = function (dm) {
    return JSON.parse(getSystemVal("dicget", [dm])).data;
  };
  that.getUser = function () {
    return user || (user = that.getBrowserParam("0", "ryxx"));
  };
  that.getMenu = function (judge) {
    let i = that.loading("加载菜单中");
    setPageTemp(menu, setMenu);
    that.loaded(i);
    return judge
      ? menu["cd-" + w.name.replace(that.val("webNameReg"), "")]
      : menu;
  };
  that.xzqh = function (xzqh) {
    let res = JSON.parse(getSystemVal("xzqhmget", [xzqh]));
    if (res.code === "1") {
      return res.data;
    } else {
      layui.layer.alert("行政区划获取失败：" + res.msg);
      return;
    }
  };
  that.showxtcs = function(mkbh) {
    return new Promise((resolve, reject) => {
      var res = system.showxtcs(mkbh)
      resolve(res)
    })
  }
  that.zxzqhget = function(xzqh) {
    let res = JSON.parse(getSystemVal("zxzqhget", [xzqh]));
    if (res.code === "1") {
      return res.data;
    } else {
      layui.layer.alert("行政区划获取失败：" + res.msg);
      return;
    }
  }
  that.openMsgBox = function (title, msg, button, type) {
    return new Promise((resolve, reject) => {
      var result = system.showmsgbox(title, msg, button, type);
      var data = JSON.parse(result).data;
      resolve(data.result);
    })
  };
  that.getXzqh = function(gjz, pageNumber, pageSize) {
    let res = JSON.parse(getSystemVal("xzqhget", [gjz, pageNumber, pageSize]));
    if (res.code === "1") {
      return res.data;
    } else {
      return;
    }
  }
  that.closeWindow = function(num = 0) {
    getSystem();
    system.closeWindow(num);
  }
  return w.jthisJsObject || w.wdphisJsObject;
};
export default Class;
