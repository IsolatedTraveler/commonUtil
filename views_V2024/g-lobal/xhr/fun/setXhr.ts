/**
 * 初始化XMLHttpRequest对象并配置请求
 * @param {string} url - 请求URL
 * @param {string} type - 请求类型
 * @param {boolean} async - 是否异步请求
 * @returns {XMLHttpRequest} 配置好的XMLHttpRequest对象
 */
export function setXhr(
  url: string,
  type: 'GET' | 'POST',
  urlType: UrlType,
  param: any,
  config: AjaxRequestConfig,
  async: boolean) {
  if (type === 'POST' && that.checkAuth) {
    that.checkAuth(config, url)
  }
  url = getAllUrl(url, urlType)
  url = getParamsUrl(param, url)
  const xhr = new XMLHttpRequest()
  xhr.open(type, url, async)
  xhr.setRequestHeader('Content-Type', GLOBAL$COMMON$.contentType)
  return xhr
}