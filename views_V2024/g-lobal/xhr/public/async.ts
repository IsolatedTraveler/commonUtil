import { AjaxRequestConfig, AjaxRequestOption } from "../../../../views/g-lobal/ajax/type";
import { async } from "../fun";
import { dealRequestData } from "../fun/dealRequestData";

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
  return async(url, dealRequestData(data, option, config), option.param, option, config, 'POST')
}