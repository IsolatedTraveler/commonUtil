import { checkAuth } from "../../common/xhr"
import { AjaxRequestConfig, AjaxRequestOption, AjaxRequestType, XhrRes } from "../../type"
import { getXhr } from "./getXhr"

/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function setXhr(
  url: string,
  data: any,
  param: any,
  type: AjaxRequestType,
  { urlType, isCheck }: AjaxRequestOption,
  config: AjaxRequestConfig
  , reset: Boolean): Promise<XhrRes> {
  // 是否鉴权
  return checkAuth(config, url, { isCheck, reset }).then((isRest) => {
    return getXhr(url, data, param, type, urlType).then((res) => {
      if (reset || isRest) return res
      return setXhr(url, data, param, type, { urlType, isCheck: true }, config, true)
    })
  })
}