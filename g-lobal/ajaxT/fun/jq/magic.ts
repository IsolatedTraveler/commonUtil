import { session } from "../../../base/temp/session";
import { ajaxJqMagic } from "../../var/const";
import { Authorization, setAuthorization } from "../../var/global";
import { ajaxResposeData } from "../../type";

export function jqMagic(config: any, url: string) {
  let magic = session('magic') || ajaxJqMagic
  if (ajaxJqMagic.url === url) {
    setAuthorization(magic.Authorization)
  } else if (!Authorization || Authorization == magic.Authorization) {
    setAjaxMagicToken(magic.user)
  } else {
    // 校验token是否临期
  }
  session('Authorization', Authorization)
  config.headers = config.headers || {}
  config.headers.Authorization = Authorization
}
function setAjaxMagicToken(param: ajaxResposeData) {
  let res: any = that.commonHttppost(ajaxJqMagic.url, {}, { param, isNotGetUser: true }, { headers: { Authorization } })
  setAuthorization(res.Authorization)
}