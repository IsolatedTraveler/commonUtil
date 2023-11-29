import { AjaxErrBack, AjaxRequestAsync, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl, AjaxSuuBack } from "../type";
import { jqMode, contentType } from "../var/global";
import * as jq from './jq/index'
import { getAllUrl, getParamsUrl } from "../../base/url/index";
import { ajaxTimeOut } from "../var/const";
import { ajaxDealData, ajaxPostData } from "./dealData";
import { LayerIndex, laoding } from "../../layer/public/index";
function getAjaxRes(res: any) {
  try {
    return JSON.parse(res)
  } catch (e) {
    return res
  }
}
export function ajax(
  url: AjaxRequestUrl,
  data: AjaxRequestData = {},
  param: AjaxRequestParam = {},
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {},
  type: AjaxRequestType = 'GET',
  async: AjaxRequestAsync = false,
  errCallBack: AjaxErrBack = undefined,
  suuCallBack: AjaxSuuBack = undefined) {
  var layerIndex: LayerIndex, value
  if (type === 'POST' && jqMode) {
    (jq as any)[jqMode](config, url)
  }
  if (option.isShowLoad) {
    layerIndex = laoding()
  }
  data = ajaxPostData(data, option, config, type)
  url = getAllUrl(url, option.urlType)
  url = getParamsUrl(param, url)
  console.log(url, data)
  window.$.ajax(Object.assign({
    type,
    url,
    async,
    data,
    contentType,
    timeOut: ajaxTimeOut,
    cache: false,
    success(res: any) {
      if (typeof res === 'string') {
        res = getAjaxRes(res)
      }
      value = ajaxDealData(res, layerIndex, option, errCallBack, suuCallBack)
    },
    error(e: any) {
      const res = { code: '-1', message: '网络连接超时', i: layerIndex };
      value = errCallBack ? errCallBack(res, option, e) : res;
    },
  }, config))
  return value
}