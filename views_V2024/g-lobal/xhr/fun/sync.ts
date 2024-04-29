import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types";
import { XHR_JQ_CODE } from "../../common";
import { errFormat } from "../../util";
import { ajaxTimeOut } from "../var";
import { dealXhrRes } from "./deaXhrRes";
import { setXhr } from "./setXhr";
/**
 * @description 发送同步请求
 * @param {string} url - 请求地址
 * @param {*} data - 请求数据
 * @param {*} option - 请求选项
 * @param {*} config - 配置信息
 * @param {string} type - 请求方式
 */
export function sync(url: string, data: any = {}, param: any = {}, option: AjaxRequestOption = {}, config: AjaxRequestConfig = {}, type: AjaxRequestType, isRest: boolean = false) {
  try {
    const xhr = setXhr(url, type, option, param, config, false, isRest)
    const time = setTimeout(() => {
      xhr.abort()
    }, ajaxTimeOut);
    xhr.send(data);
    clearTimeout(time)
    const val = dealXhrRes(xhr)
    if (option.isCheck && val.code === XHR_JQ_CODE) {
      return sync(url, data, param, option, config, type, true)
    }
    return val
  } catch (e: any) {
    return errFormat('请求过程中发生错误：' + (e.message || e))
  }
}