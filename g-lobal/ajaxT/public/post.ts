import { AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestParam, AjaxRequestUrl } from "../type";
import { ajax } from "./ajax";
import { ajaxSync } from "../fun/async";

// 同步
export function commonHttppost(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig) {
  return ajax(url, data, option.param, option, config, 'POST')
}
// 异步
export function commonQueryAsyncHttppost_callback(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig) {
  return ajaxSync(url, data, option.param, option, config, 'POST')
}