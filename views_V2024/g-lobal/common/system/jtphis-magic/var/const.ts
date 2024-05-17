export const DICS: { [key: string]: any } = {}
  , MKQX: { [key: string]: any } = {}
  , SYSTEM: any = getSystem()
  , XZQH_URL = '/magic/yy10/01/10/s-xzqh'
  , CONFIG_URL = 'public/data/config.json'
  , MKQX_URL = '/magic/xt01-xtjc/03/11/s-mkqx'
export function getSystem() {
  try {
    return window.jthisJsObject.jthis
  } catch {
    return
  }
}