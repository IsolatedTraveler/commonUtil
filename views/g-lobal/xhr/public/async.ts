import { ajaxPostData } from "../../ajax/fun/dealData";
import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { async } from "../fun";

// 异步请求
export function getAjaxAsync(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return async(url, option.param, data, option, config, 'GET')
}
export function commonQueryAsyncHttppost_callback(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return async(url, ajaxPostData(data, option, config), option.param, option, config, 'POST')
}