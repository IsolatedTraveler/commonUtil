import { AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestUrl } from "../type";
import { ajax } from "../fun/ajax";
import { ajaxSync } from "../fun/async";
// 同步
export function getAjax(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig) {
  return ajax(url, option.param, data, option, config)
}
// 异步
export function getAjaxSync(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig) {
  return ajaxSync(url, option.param, data, option, config, 'GET')
}