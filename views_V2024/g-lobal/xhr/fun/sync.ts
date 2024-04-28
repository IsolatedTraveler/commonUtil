import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType } from "../../../../types";
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
export function sync(url: string, data: any = {}, param: any = {}, option: AjaxRequestOption = {}, config: AjaxRequestConfig = {}, type: AjaxRequestType) {
  try {
    const xhr = setXhr(url, type, option, param, config, false)
    const time = setTimeout(() => {
      xhr.abort()
    }, ajaxTimeOut);
    xhr.send(data);
    clearTimeout(time)
    return dealXhrRes(xhr)
  } catch (e: any) {
    return errFormat('请求过程中发生错误：' + (e.message || e))
  }
}