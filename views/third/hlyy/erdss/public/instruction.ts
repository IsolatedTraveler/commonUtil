import { error } from "../fun/"
import { his_company_code, his_medical_org_code } from "../var"

export function instruction(his_drug_code: string) {
  // 将dm变为ypid
  window.YytPass.showInstruction({
    his_company_code,
    his_medical_org_code,
    his_drug_code
  }).then(error)
}