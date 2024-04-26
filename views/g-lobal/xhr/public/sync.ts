import { ajaxPostData } from "../../ajax/fun/dealData";
import { AjaxRequestConfig, AjaxRequestOption } from "../../ajax/type";
import { sync } from "../fun";

// 同步
export function getAjax(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {
  return sync(url, data, option, config, 'GET')
}
// 同步
export function commonHttppost(
  url: string,
  data: any,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}) {

  return sync(url, ajaxPostData(data, option, config), option, config, 'POST')
}