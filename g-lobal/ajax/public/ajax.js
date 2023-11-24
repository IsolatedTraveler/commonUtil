import { setPageTemp } from "../../base/fun/1/pageTemp"
import { ajaxError } from "../fun/1/dealData"
import { ajax } from "../fun/3/ajax"
import { dataConfig } from "../var/ajax"

function setConfig() {
  return dataConfig = getAjax('/public/data/config.json', { v: new Date().getTime() }, { msg: '获取配置信息出错：', urlType: 'origin', isNotGetUser: true })
}
export function ajaxASync(url, data, param, option, config, type = 'GET') {
  return ajax(url, data, param, option, config, type, false)
}
export function ajaxSync(url, data, param, option, config, type = 'GET') {
  return new Promise((resolve, reject) => {
    ajax(url, data, param, option, config, type, true, reject, resolve)
  }).catch(res => ajaxError(res, option, res))
}
export function getAjax(url, data, option = {}, config) {
  return ajaxASync(url, option.param, data, option, config)
}
export function getAjaxSync(url, data, option = {}, config) {
  return ajaxSync(url, option.param, data, option, config)
}
export function commonHttppost(url, data, option = {}, config) {
  return dealCsData(ajaxASync(url, data, option.param, option, config, 'POST'), url)
}
export function commonQueryAsyncHttppost_callback(url, data, option = {}, config) {
  return dealCsData(ajaxSync(url, data, option.param, option, config, 'POST'), url)
}
export function getConfig(key) {
  setPageTemp(dataConfig, setConfig)
  return key ? dataConfig[key] : dataConfig
}
export function upload(data, name, lx = 'url', option = {}) {
  let formData = new FormData()
  if (lx === 'url') {
    let a = data.split(','), type = a[0].match(/:(.*?);/)[1], bytes = window.atob(a[1]), ia = new Uint8Array(bytes.length)
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i)
    }
    formData.append('file', new Blob([ia], { type: type }), name)
  } else {
    formData.append('file', data)
  }
  return ajaxASync(option.url || that.getUploadUrl(), formData, {}, { isNotGetUser: true }, { contentType: false, processData: false }, 'POST')
}
export function getMainUrl(arr) {
  if (typeof arr === 'string') {
    return arr
  }
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i].indexOf(location.origin) > -1) {
      return arr[i]
    }
  }
  return arr[0]
}
function dealCsData(pro, url) {
  if (pro.code) {
    return getDealCsData(pro, url)
  } else {
    return pro.then(res => getDealCsData(res, url))
  }
}
function getDealCsData(data, url) {
  console.log(url)
  if (data.code == 500) {
    alert('当前终端与服务器网络连接断开，请检查网络配置是否正常')
    return { code: 1, data: [] }
  } else if (data.code == 2) {
    alert('接口异常，请联系系统维护人员')
    return { code: 1, data: [] }
  } else if (data.code == -1) {
    alert('当前终端与服务器网络连接断开，请检查网络配置是否正常')
    return { code: 1, data: [] }
  }
  return data
}