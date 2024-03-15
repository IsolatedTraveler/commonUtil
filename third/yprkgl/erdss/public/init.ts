import { his_company_code, his_medical_org_code, setScript, username, Jkcs } from "../var";

export function init(param: any, jkcs: Jkcs) {
  setScript(param, jkcs).then(() => {
    window.YytPass.init({
      his_company_code,
      his_medical_org_code,
      username,
      createPageBall: true,
      position: {
        top: '20px',
        right: '20px'
      }
    })
  })
}