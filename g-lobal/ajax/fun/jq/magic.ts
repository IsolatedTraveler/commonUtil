import { Authorization, setAuthorization } from "../../var/global";
import { ajaxResposeData } from "../../type";
import { ajaxJqMagic } from "../../../../types/const";
import { session } from "../../../temp/session"

export function jqMagic(config: any, url: string, rest: Boolean = false) {
  let magic = session('magic') || ajaxJqMagic
  setAuthorization(session('Authorization'))
  if (rest) {
    setAjaxMagicToken(magic.user)
  } else {
    if (ajaxJqMagic.url === url) {
      setAuthorization(magic.Authorization)
    } else if (!Authorization || Authorization == magic.Authorization) {
      setAjaxMagicToken(magic.user)
    } else {
      // 校验token是否临期
    }
  }
  session('Authorization', Authorization)
  config.headers = config.headers || {}
  config.headers.Authorization = Authorization
}
function setAjaxMagicToken(param: ajaxResposeData) {
  let res: any = GLOBAL$AJAX$.commonHttppost(ajaxJqMagic.url, {}, { param, isNotGetUser: true }, { headers: { Authorization } })
  if (res.code != 1 && param.username != ajaxJqMagic.user.username) {
    setAjaxMagicToken(ajaxJqMagic.user)
  } else {
    setAuthorization(res.Authorization)
  }
}