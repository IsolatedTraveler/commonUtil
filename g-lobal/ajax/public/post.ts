import { AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestUrl } from "../type";
import { ajax } from "../fun/ajax";
import { ajaxSync } from "../fun/async";
import { ajaxPostData } from "../fun/dealData";

// 同步
export function commonHttppost(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): any {

  return ajax(url, ajaxPostData(data, option.param, option, config), option.param, option, config, 'POST')
}
// 异步
export function commonQueryAsyncHttppost_callback(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return ajaxSync(url, data, option.param, option, config, 'POST')
}