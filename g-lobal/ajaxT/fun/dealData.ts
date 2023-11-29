import { alertMsg, loaded } from "../../layer/public";
import { user } from "../../var/index";
import { AjaxErrBack, AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxSuuBack, ajaxResposeData, ajaxResposeJudge } from "../type";
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
  suuCallBack: AjaxSuuBack) {
  if (res.code == 1 || res.code === undefined) {
    if (option.isShowLoad) {
      loaded(i as string)
    }
    return suuCallBack ? suuCallBack(res) : res
  }
  res = ajaxError({ message: res.message, code: 0, i }, option, res)
  return errCallBack ? errCallBack(res) : res
}
export function ajaxPostData(data: AjaxRequestData = {},
  param: AjaxRequestParam = {},
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {},
  type: AjaxRequestType = 'GET') {
  if (that && that.dealAjaxData) {
    return that.dealAjaxData(data, param, option, config, type)
  } else {
    return JSON.stringify(Object.assign({}, user, data))
  }
}