import { AjaxRequestOption } from "../../../g-lobal/ajax/type"
export interface HisAjaxRequestOption extends AjaxRequestOption {
  isBase64?: boolean
  isPwd?: boolean
  isJson?: boolean
}