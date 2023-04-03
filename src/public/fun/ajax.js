import { ajaxTimeOut } from "../../var/ajax";
import { alertMsg, getParamsUrl, loaded, loading } from "./init";
import { dealsUrl, getBaseUrl } from "./url";
import { that } from '../../var/init'
function getAllUrl(url, lx) {
  if (/^http/.test(url)) {
    return url
  } else if (lx === 'origin') {
    return dealsUrl(url, getBaseUrl())
  } else {
    return dealsUrl(url, that.getServiceUrl())
  }
}
function ajaxError({message, i}, {isShowLoad, msg} = {}, res) {
  isShowLoad && loaded(i)
  if (msg) {
    alertMsg(msg + message)
  }
  return res
}
function ajaxDealData(res, i, option, errCallBack, callBack) {
  if (res.code == 1 || res.code === undefined) {
    if (option.isShowLoad) {
      loaded(i)
    }
    return callBack ? callBack(res) : res
  } else {
    res = ajaxError({message: res.message, code: 0, i}, option, res)
    return errCallBack ? errCallBack(res) : res
  }
}
function dealAjaxData(data, {isNotGetUser} = {}) {
  if (isNotGetUser) {
    return data
  } else {
    let user = that.getUser()
    if (user) {
      data = Object.assign({}, {
        czryid: user.ryid,
        czryjgid: user.jgid,
        czryjgmc: user.jgmc,
        czryjgjc: user.jgjc,
        czryyhm: user.yhm,
        czryxm: user.xm || user.username,
        superadmin: user.superadmin
      }, data)
      return data
    } else {
      that.logOut()
    }
  }
}
function ajax(url, data = {}, param = {}, option = {}, config = {}, type, async = false, errCallBack, callBack) {
  let i, v
  if (option.isShowLoad) {
    i = loading()
  }
  if (data.pageNumber && data.pageSize && !(data.page || data.size)) {
    data.page = data.pageNumber
    data.size = data.pageSize
  }
  data = dealAjaxData(data, option)
  if (!option.contentType && type !== "GET") {
    data = JSON.stringify(data);
  }
  url = getAllUrl(url, option.urlType)
  url = getParamsUrl(param, url)
  $.ajax({
    type,
    url,
    async,
    data,
    contentType: 'application/json; charset=utf-8',
    timeOut: ajaxTimeOut,
    cache: false,
    success(res) {
      if (typeof res === 'string') {
        try {
          res = JSON.parse(res)
        } catch(e) {
          // 
        }
      }
      v = ajaxDealData(res, i, option, errCallBack, callBack)
    },
    error(e) {
      const res = {code: '-1', message: '网络连接超时', i}
      v = errCallBack ? errCallBack(res, option, e) : res
    },
    ...config
  })
  return v
}
export function AjaxASync(url, data, param, option, config, type = 'GET') {
  return ajax(url, data, param, option, config, type, false)
}
export function ajaxSync(url, data, param, option, config, type = 'GET') {
  return new Promise((resolve, reject) => {
    ajax(url, data, param, option, config, type, true, reject, resolve)
  }).catch(res => ajaxError(res, option, res))
}
export function getAjax(url, data, option={}, config) {
  return AjaxASync(url, option.param, data, option, config)
}
export function getAjaxSync(url, data, option={}, config) {
  return ajaxSync(url, option.param, data, option, config)
}
export function commonHttppost(url, data, option={}, config) {
  return AjaxASync(url, data, option.param, option, config, 'POST')
}
export function commonQueryAsyncHttppost_callback(url, data, option={}, config) {
  return ajaxSync(url, data, option.param, option, config, 'POST')
}
export default {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback
}