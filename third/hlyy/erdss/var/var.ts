export interface Jkcs {
  csmb: string
  cssm: string
}
export var his_company_code = '', his_medical_org_code = '', username = '', script: HTMLScriptElement
export function setScript(param: any, jkcs: Jkcs) {
  var csmb = JSON.parse(jkcs.csmb)
  his_medical_org_code = param.jgdm
  his_company_code = csmb.code
  username = param.rydm
  return Promise.all([GLOBAL$FILE$.loadJs(csmb.js), GLOBAL$FILE$.loadStyle(csmb.style)]).catch((e) => {
    console.log(e)
  })
}