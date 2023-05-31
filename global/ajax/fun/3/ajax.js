import { that } from "../../../base/var/init";
import { getAjaxRes } from "../../../base/fun/1/getAjaxRes";
import { ajaxTimeOut, contentType, jqMode, jqModeUrl } from "../../var/ajax";
import { ajaxDealData } from "../1/dealData";
import { getAllUrl, getParamsUrl } from "../../../base/fun/2/urlDeal";
export function ajax(url, data = {}, param = {}, option = {}, config = {}, type, async, errCallBack, callBack) {
  let layerIndex, value
  if (type === 'POST' && jqMode && url !== jqModeUrl[jqMode]) {
    that.jqFun[jqMode](config)
  }
  if (option.isShowLoad) {
    layerIndex = that.loading()
  }
  data = that.dealAjaxData(data, option, type)
  url = getAllUrl(url, option.urlType)
  url = getParamsUrl(param, url)
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
        res = getAjaxRes(res)
      }
      value = ajaxDealData(res, layerIndex, option, errCallBack, callBack)
    },
    error(e) {
      const res = { code: '-1', message: '网络连接超时', i: layerIndex };
      value = errCallBack ? errCallBack(res, option, e) : res;
    },
    ...config
  })
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
        res = getAjaxRes(res)
      }
      value = ajaxDealData(res, layerIndex, option, errCallBack, callBack)
    },
    error(e) {
      const res = { code: '-1', message: '网络连接超时', i: layerIndex };
      value = errCallBack ? errCallBack(res, option, e) : res;
    },
    ...config
  })
  return value
}