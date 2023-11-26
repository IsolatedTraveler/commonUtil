import { ajaxError } from "./dealData";
import { AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestType, AjaxRequestUrl } from "../type";
import { ajax } from "./ajax";

// 异步
export function ajaxSync(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  param: AjaxRequestParam,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig,
  type: AjaxRequestType) {
  return new Promise((resolve, reject) => {
    ajax(url, data, param, option, config, type, true, reject, resolve)
  }).catch(res => ajaxError(res, option, res))
}