import { dzpjKppz } from './var/const'
import {
  getAjax, getAjaxSync, commonHttppost, commonQueryAsyncHttppost_callback, getConfig, upload, bbPrint, getSystemVal,
  getBrowserParam, setBrowserParam, getUser, logOut, exit, paramget, setWebName, readFile, alertMsg, load, loaded, laoding,
  confirmMsg, session, setPageTemp, tempData, getAllUrl, getUploadUrl, dealsUrl, getUrl, getParamsUrl, getUrlParams, getBaseUrl,
  getMainUrl, uuid, system
} from '../../g-lobal/index'
// 首行内容
var kpConfig = {}, sync, isPrint, kpParam = {};
function setSync(a) {
  return sync = a;
}
function setIsPrint(a) {
  return isPrint = a;
}
function isOpenFp() {
  const { jgid } = getUser();
  return kpConfig[jgid] || getKpJgConfig(jgid);
}
function getKpJgConfig(jgid) {
  return kpConfig[jgid] = Promise.all([setKpJgConfig(jgid), getDzpjConfig(jgid)]).then(res => res[0]);
}
function setKpJgConfig(jgid) {
  return commonQueryAsyncHttppost_callback('/magic/yy201-dzpj/dzpj/s-pzxx', { jgid }).then((res) => {
    if (res.code == '1' && res.data && res.data.length) {
      let data = res.data, resultVal = {};
      resultVal.url = data[0].dz.replace(/\/$/, '');
      data.forEach((it) => {
        let id = it.dm;
        resultVal[id] = resultVal[id] || it.sdz;
      });
      return resultVal;
    }
    else {
      return Promise.reject();
    }
  });
}
function getDzpjConfig(jgid) {
  var data = (kpParam[jgid]);
  if (!data) {
    let val = paramget('201021000') || {};
    data = {
      sync: val[1] == '同步',
      isPrint: val[2]
    };
  }
  setSync(data.sync);
  setIsPrint(data.isPrint);
}
function kpIng(data, lx, ly) {
  let cs = dzpjKppz[lx][ly];
  if (cs) {
    let { url, bbid } = cs;
    return getKpRes(data, url, bbid).then(() => {
    });
  }
  else {
    return Promise.reject({ msg: `未获取到${ly}的${lx}相关参数` });
  }
}
function getKpRes(data, url, bbid) {
  let kp = commonQueryAsyncHttppost_callback(url, data).catch(() => {
    if (isPrint == '提示' && bbid) {
      return confirmMsg('电子票据开票失败，异否继续打印收费凭证？', ['是', '否']);
    }
    else {
      return Promise.reject();
    }
  });
  if (sync) {
    return kp;
  }
  else {
    return Promise.resolve();
  }
}
function kp(data, ly, lx) {
  return isOpenFp().then((res) => {
    return kpIng(Object.assign({
      kpdbm: res.kpdbm,
      jkdm: res.jkdm
    }, data), lx, ly);
  }).catch(() => { });
}
const Class = function () {
};

Class.prototype = { kp }
export { Class }