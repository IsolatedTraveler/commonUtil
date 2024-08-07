// 请求超时时间设置（3分钟）
export const ajaxTimeOut = 1000 * 60 * 3, ajaxRerr: { [key: number]: string } = {
  400: '客户端请求的语法错误，服务器无法理解请求',
  401: '请求要求用户进行身份认证',
  403: '服务器已接受客户端的请求，但是拒绝执行此请求。',
  404: '请求服务不存在',
  408: '请求超时',
  409: '请求的资源与服务器中的资源冲突',
  413: '请求内容过大，超出服务器允许的范围',
  415: '服务器无法处理请求附带的媒体格式',
  500: '服务器遇到了不知道如何处理的情况',
  502: '作为网关或代理工作的服务器从上游服务器收到了无效的响应',
  503: '服务器目前无法使用（由于超载或停机维护）',
  504: '作为网关或代理的服务器未能及时从上游服务器收到请求'
}