import { setPageTemp } from "../../../global/fun/pageTemp";
import {ajaxTimeOut, dataConfig} from '../../../src/var/ajax'
import { dealNull } from './dealNull';
function setConfig() {
  // eslint-disable-next-line no-import-assign
  return dataConfig = getAjax('/public/data/config.json', {v: new Date().getTime()}, {msg: '获取配置信息出错：'})
}
function ajaxDealData(res, option) {
  let isError = option.msg
  if (option.isShowLoad) {
    setTimeout(() => {
      that.loaded(res.index)
    }, 0);
  }
  if (isError) {
    let msg = isError === true ? '' : isError, isShowMsg = option.isShowMsg
    let data = ajaxError(res, msg, isShowMsg, 0)
    return data
  } else {
    return res
  }
}
function ajaxError(res, msg, judge, i) {
  if (res.code === '1') {
    if (i === 0) {
      return ajaxError(res.data, msg, judge, ++i)
    } else {
      if ((res.data && res.data.length) || res.id) {
        return {code: '1', data: res.data || res.id}
      } else {
        that.alertMsg(msg, judge)
        return {code: '0', msg: msg + '数据加载失败'}
      }
    }
  } else if (res.code === undefined) {
    return {code: '1', data: res}
  } else {
    msg += res.msg
    that.alertMsg(msg, judge)
    return {code: '0', msg}
  }
}
function ajax(url, data = {}, option = {}, type = 'GET', callBack, async = false) {
  let index, param = null, v
  if (option.isShowLoad) {
    index = that.loading(option.laodMsg)
  }
  //处理是否存在额外添加信息(添加在最外层的数据)
  if (data._addData) {
    param = data
    delete param._addData
    data = param.data
    delete param.data
  }
  data = that.getPostData(data, option.isGetUser, option.isBase64, option.isPwd, option.isJson)
  if (param) {
    data = Object.assign(param, data)
  }
  url = getAllUrl(url, option.urlType)
  if (type === 'GET') {
    url = that.getParamsUrl(data, url)
    data = {}
  }
  $.ajax(Object.assign({
    type,
    url,
    async,
    data: JSON.stringify(data),
    contentType: 'application/json',
    timeOut: ajaxTimeOut,
    cache: false,
    success(data) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data)
        } catch(e) {
          data = {data}
        }
      }
      if (data && data.data) {
        const a = data.data
        if (a.total && a.list && a.list.length) {
          a.list.forEach(dealNull)
        } else if (a.length && Array.isArray(a)) {
          a.forEach(dealNull)
        }
      }
      v = callBack({code: '1', data: data, index}, option)
    },
    error(res) {
      v = callBack({code: '0', msg: res.status + '(' + res.statusText + ')', index}, option)
    }
  }, option.addParam))
  return v
}
function getAllUrl(url, lx) {
  if (/^http/.test(url)) {
    return url
  } else if (lx === 'origin') {
    return that.dealsUrl(url, that.getBaseUrl())
  } else {
    return that.dealsUrl(url, that.getServiceUrl())
  }
}
function dealAjaxParam(def, option = {}, msg, judge, isNotShowLoad) {
  if (typeof judge === 'object') {
    option = judge
  } else if (typeof isNotShowLoad === 'object') {
    option = isNotShowLoad
    option.isGetUser = !judge
  } else if (typeof msg === 'object') {
    option = msg
    option.isGetUser = !judge
    option.isShowLoad = !isNotShowLoad
  }
  option.addParam = Object.assign({}, def.addParam, option.addParam)
  return Object.assign({isShowLoad: true, laodMsg: '', isGetUser: false, isBase64: false, isPwd: false, isJson: false, urlType: 'server', msg: false, isShowMsg: false, addParam: {}}, def, option)
}
// 同步请求
function AjaxASync(url, data, option, type) {
  let res = ajax(url, data, option, type, ajaxDealData)
  return res.code === '1' ? res.data : res
}
// 异步请求
function ajaxSync(url, data, option, type) {
  return new Promise((resolve, reject) => {
    ajax(url, data, option, type, resolve, true)
  }).then(e => {
    let res = ajaxDealData(e, option)
    return res.code === '1' ? res.data : Promise.reject(res)
  })
}
export function getAjaxSync(url, data, option) {
  return ajaxSync(url, data, dealAjaxParam({urlType: 'origin'}, option))
}
export function getAjax(url, data, option = {}) {
  if (typeof data === 'string') {
    option.msg = data
    data = {}
  }
  return AjaxASync(url, data, dealAjaxParam({urlType: 'origin', isShowMsg: true}, option))
}
export function commonQueryAsyncHttppost_callback(url, data, judge, isNotShowLoad, msg) {
  return ajaxSync(url, data, dealAjaxParam({isPwd: false, isGetUser: true}, {isGetUser: !judge, msg, isShowLoad: !isNotShowLoad}, msg, judge, isNotShowLoad), 'POST')
}
export function commonHttppost(url, data, msg, judge) {
  return AjaxASync(url, data, dealAjaxParam({isPwd: false, isGetUser: true, isShowMsg: true}, {isGetUser: !judge, msg}, msg, judge), 'POST')
}
export function upload(data, name, lx = 'url', option = {}) {
  let formData = new FormData()
  if (lx === 'url') {
    let a = data.split(','), type = a[0].match(/:(.*?);/)[1], bytes = window.atob(a[1]), ia = new Uint8Array(bytes.length)
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    formData.append('file', new Blob([ia], {type: type}), name + '.' + type.split('/')[1])
  } else {
    formData.append('file', data)
  }
  return AjaxASync(option.url || that.getUploadUrl(), formData, dealAjaxParam({addParam: {contentType: false, processData: false}}, option), 'POST')
}
export function getConfig(key) {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
export function setPageSize(obj) {
  if (obj.pageSize) {
    let size = obj.pageSize, num = obj.pageNumber
    obj.rn_s = that.calc(that.calc(size, that.calc(num, 1, '-'), '*'), 1, '+') + ''
    obj.rn_e = that.calc(size, num, '*') + ''
  }
  delete obj.pageSize
  delete obj.pageNumber
  return obj
}
export default {
  getAjax,
  getAjaxSync,
  commonHttppost,
  commonQueryAsyncHttppost_callback,
  getConfig,
  upload,
  setPageSize
}