import { AjaxErrBack, AjaxRequestAsync, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl, AjaxSuuBack } from "../type";
import { contentType, ajaxErrorCode } from "../var/global";
import { ajaxDealData } from "./dealData";
import { LayerIndex, loading } from "../../layer/public/index";
import { getAllUrl } from "../../url/public/commonUtil";
import { getParamsUrl } from "../../url/public/data";
import { ajaxTimeOut } from "../../../../types";
export function getAjaxRes(res: any) {
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
  suuCallBack: AjaxSuuBack = undefined): any {
  var layerIndex: LayerIndex, value
  if (type === 'POST' && that.checkAuth) {
    that.checkAuth(config, url)
  }
  if (option.isShowLoad) {
    layerIndex = loading()
  }
  url = getAllUrl(url, option.urlType)
  url = getParamsUrl(param, url)
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
      value = ajaxDealData(res, layerIndex, option, errCallBack, suuCallBack, url, data, param, config, type, async)
    },
    error(e: any) {
      const res = { code: ajaxErrorCode, message: '网络连接超时', i: layerIndex };
      value = errCallBack ? errCallBack(res, option, e) : res;
    },
  }, config))
  return value
}