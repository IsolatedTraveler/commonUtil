import { alertMsg, loaded } from "../../layer/public";
import { ajaxSuccessCode, jqMode, user } from "../../allVar";
import { AjaxErrBack, AjaxRequestAsync, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl, AjaxSuuBack, ajaxResposeData, Result } from "../type";
function ajaxError(
  { message, i }: Result,
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
  if (res.code === ajaxSuccessCode || res.code === undefined) {
    if (option.isShowLoad) {
      loaded(i as string)
    }
    return suuCallBack ? suuCallBack(res) : res
  } else if (res.code == 2 && that.checkAuth) {
    that.checkAuth(config, url, true)
    return GLOBAL$AJAX$.ajax(url, data, param, option, config, type, async, errCallBack, suuCallBack)
  }
  res = ajaxError({ message: res.message || res.msg, code: 0, i }, option, res)
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