import { error } from "../fun/";
import { his_company_code, his_medical_org_code, username } from "../var";

export function init() {
  window.YytPass.init({
    his_company_code,
    his_medical_org_code,
    username
  }).then(error)
}