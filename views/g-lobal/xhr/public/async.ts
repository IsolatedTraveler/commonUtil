import { ajaxPostData } from "../../ajax/fun/dealData";
import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { async } from "../fun";

// 异步
export function getAjaxSync(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return async(url, data, option, config, 'GET')
}
// 异步
export function commonQueryAsyncHttppost_callback(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return async(url, ajaxPostData(data, option, config), option, config, 'POST')
}