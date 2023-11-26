import { session } from "../../../base/temp/session";
import { ajaxJqMagic } from "../../var/const";
import { Authorization, setAuthorization } from "../../var/global";
import { commonHttppost } from "../../public/post";
import { ajaxResposeData } from "../../type";

export function jqMagic() {
  let magic = session('magic') || ajaxJqMagic
  Authorization || setAuthorization(session('Authorization') || magic.Authorization)
  if (Authorization == magic.Authorization) {
    setAjaxMagicToken(magic.user)
  } else {
    // 校验token是否临期
  }
}
function setAjaxMagicToken(param: ajaxResposeData) {
  let res: any = commonHttppost(ajaxJqMagic.url, {}, { param, isNotGetUser: true }, { headers: { Authorization } })
  setAuthorization(res.Authorization)
  session('Authorization', Authorization)
}