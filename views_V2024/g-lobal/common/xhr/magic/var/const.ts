export const contentType = 'application/json; charset=utf-8',
  XHR_JQ_CODE = 101 // 服务器返回的需要鉴权的标志（鉴权失效，第三方鉴权等情况导致鉴权失败）
  , XHR_JQ_URL = '/magic/oauth/login', // 服务器鉴权信息
  DEFAULT_AUTH_USER = { // 默认鉴权账号信息
    zh: '',
    mm: ''
  }