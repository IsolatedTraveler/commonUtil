import { error } from "../fun/"
import { his_company_code, his_medical_org_code } from "../var"
export function tip(his_drug_code: string) {
  window.YytPass.showTips({
    his_company_code,
    his_medical_org_code,
    his_drug_code
  }).then(error)
}