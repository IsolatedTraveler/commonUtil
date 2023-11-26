import { AjaxErrBack, AjaxRequestAsync, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl, AjaxSuuBack } from "../type";
import { jqMode } from "../var/global";
import * as jq from './jq/index'
import { ajaxDealData } from "./ajaxData";
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
  var layerIndex, value
  if (type === 'POST' && jqMode) {
    jq[jqMode](config)
  }
  if (option.isShowLoad) {
    layerIndex = 1
  }
  data = ajaxDealData()
  return value
}