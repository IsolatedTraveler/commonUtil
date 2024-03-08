import { error } from "../fun/error"
import { his_company_code, his_medical_org_code } from "../var"

export function instruction(his_drug_code: string) {
  window.YytPass.showInstruction({
    his_company_code,
    his_medical_org_code,
    his_drug_code
  }).then(error)
}