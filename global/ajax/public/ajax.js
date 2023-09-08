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
function dealCsData(pro, url) {
  if (pro.code) {
    return getDealCsData(pro, url)
  } else {
    return pro.then(res => getDealCsData(res, url))
  }
}
function getDealCsData(data, url) {
  if (data.code == 500) {
    alert('该接口返回数据不符合规范，请检查接口：' + url)
    return { code: 1, data: [] }
  } else if (data.code == 2) {
    alert('请检查该接口必填校验：' + url)
    return { code: 1, data: [] }
  } else if (data.code == -1) {
    alert('用于测试环境调试接口，请判断是否调试该接口：' + url)
    return { code: 1, data: [] }
  }
  return data
}