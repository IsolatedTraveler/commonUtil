import {checkAuth} from '../../common/xhr';
import {XHR_JQ_CODE} from '../../common/xhr/magic/var';
import type {AjaxRequestConfig, AjaxRequestOption, AjaxRequestType, XhrRes} from '../../type';
import {getXhr} from './getXhr';

/**
 * @description 发起一个异步HTTP请求，包含鉴权逻辑处理。
 *
 * @param {string} url - 请求的URL。
 * @param {any} data - 需要发送的数据。
 * @param {any} param - 请求的附加参数。
 * @param {AjaxRequestType} type - 请求方法，如'GET', 'POST'等。
 * @param {{ urlType: any, isCheck: boolean }} isCheck - 请求额外选项，包括URL类型和是否需要进行鉴权检查。
 * @param {AjaxRequestConfig} config - 请求的配置对象。
 * @param {Boolean} reset - 是否重置鉴权信息并重新尝试。
 * @returns {Promise<XhrRes>} - 包含请求响应的Promise对象。
 */
export function setXhr(
  url: string,
  data: any,
  param: any,
  type: AjaxRequestType,
  {urlType, isCheck}: AjaxRequestOption,
  config: AjaxRequestConfig = {},
  reset?: Boolean
): Promise<XhrRes> {
  // 是否鉴权
  return checkAuth(url, config, {isCheck, reset}).then(isRest => {
    // 获取远程数据
    return getXhr(url, data, param, type, urlType || 'service', config).then(res => {
      // 判断是否因未鉴权报错 不是直接返回
      if (res.code !== XHR_JQ_CODE) return res;
      // 判断本次请求是否刷新鉴权信息，是直接返回
      if (reset || isRest) return res;
      // 在次请求 本次请求强制刷新鉴权信息
      return setXhr(url, data, param, type, {urlType, isCheck: true}, config, true);
    });
  });
}
