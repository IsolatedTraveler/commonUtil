import { ajaxPostData } from "../../../../views/g-lobal/ajax/fun/dealData";
import { AjaxRequestConfig, AjaxRequestOption } from "../../../../views/g-lobal/ajax/type";
import { sync } from "../fun";

// 同步请求
export function getAjax(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return sync(url, option.param, data, option, config, 'GET')
}
export function commonHttppost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return sync(url, ajaxPostData(data, option, config), option.param, option, config, 'POST')
}