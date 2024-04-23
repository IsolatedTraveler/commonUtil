import { AjaxRequestConfig, AjaxRequestData, AjaxRequestOption, AjaxRequestUrl } from "../type";
import { ajax } from "../fun/ajax";
import { ajaxSync } from "../fun/async";
import { ajaxPostData } from "../fun/dealData";
interface MagicResData {
  list: Array<any>
  total: number
}
type MagicResCode = -1 | 0 | 1 | 2
interface MagicRes {
  code: MagicResCode
  data: MagicResData | any
  message: string
}
// 同步
export function commonHttppost(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): MagicRes {

  return ajax(url, ajaxPostData(data, option, config), option.param, option, config, 'POST')
}
// 异步
export function commonQueryAsyncHttppost_callback(
  url: AjaxRequestUrl,
  data: AjaxRequestData,
  option: AjaxRequestOption = {},
  config: AjaxRequestConfig = {}): Promise<MagicRes> {
  return ajaxSync(url, data, option.param, option, config, 'POST')
}