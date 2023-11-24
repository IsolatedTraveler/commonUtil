export let ajaxTimeOut = 1000 * 60 * 2,
  dataConfig,
  Authorization,
  jqUrl = '/magic/oauth/token',
  jqMode = 'magic',
  contentType = 'application/json; charset=utf-8',
  jqModeUrl = {
    magic: '/magic/oauth/token'
  }
export default {
  ajaxTimeOut,
  dataConfig,
  Authorization,
  jqUrl,
  jqMode,
  jqModeUrl
}