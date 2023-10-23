export let ajaxTimeOut = 1000 * 60 * 2,
  dataConfig,
  Authorization,
  jqUrl = '/oauth/token',
  jqMode = 'magic',
  contentType = 'application/json; charset=utf-8',
  jqModeUrl = {
    magic: '/oauth/token'
  }
export default {
  ajaxTimeOut,
  dataConfig,
  Authorization,
  jqUrl,
  jqMode,
  jqModeUrl
}