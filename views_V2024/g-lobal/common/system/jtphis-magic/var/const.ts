export const DICS: { [key: string]: any } = {}
  , MKQX: { [key: string]: any } = {}
  , SYSTEM: any = getSystem()
  , XZQH_URL = 'magic/yy10/01/10/s-xzqh'
  , CONFIG_URL = 'public/data/config.json'
  , MKQX_URL = 'magic/jtmis/03/11/s-mkqx'
  , DIC_URL = 'magic/yy10/01/10/s-tyzd'
export function getSystem() {
  try {
    return window.jthisJsObject.jthis
  } catch {
    return
  }
}