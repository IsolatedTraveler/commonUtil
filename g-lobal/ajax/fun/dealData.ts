import { alertMsg, loaded } from "../../layer/public";
import { jqMode, user } from "../../allVar";
import * as jq from './jq/index'
import { AjaxErrBack, AjaxRequestAsync, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl, AjaxSuuBack, ajaxResposeData, ajaxResposeJudge } from "../type";
export function ajaxError(
  { message, i }: ajaxResposeJudge,
  { msg, isShowLoad }: AjaxRequestOption,
  res: ajaxResposeData) {
  isShowLoad && loaded(i as string)
  if (msg) {
    // 提示
    alertMsg(msg + message)
  }
  return res
}
export function ajaxDealData(
  res: any,
  i: string | undefined,
  option: AjaxRequestOption,
  errCallBack: AjaxErrBack,
  suuCallBack: AjaxSuuBack,
  url: AjaxRequestUrl,
  data: AjaxRequestData = {},
  param: AjaxRequestParam = {},
  config: AjaxRequestConfig = {},
  type: AjaxRequestType = 'GET',
  async: AjaxRequestAsync = false) {
  if (res.code == 1 || res.code === undefined) {
    if (option.isShowLoad) {
      loaded(i as string)
    }
    return suuCallBack ? suuCallBack(res) : res
  } else if (res.code == 0 || res.code == 2) {
    (jq as any)[jqMode](config, url, true)
    return GLOBAL$AJAX$.ajax(url, data, param, option, config, type, async, errCallBack, suuCallBack)
  }
  res = ajaxError({ message: res.message, code: 0, i }, option, res)
  return errCallBack ? errCallBack(res) : res
}
export function ajaxPostData(data: AjaxRequestData = {},
  param: AjaxRequestParam = {},
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {},
  type: AjaxRequestType = 'POST') {
  if (that && that.dealAjaxData) {
    return that.dealAjaxData(data, param, option, config, type)
  } else {
    return JSON.stringify(Object.assign({}, user, data))
  }
}