import { MagicData, ajaxJqMagic, ajaxJqMagicV2 } from "../../../../types"
import { session } from "../../temp"
import { Authorization, setAuthorization } from "../var"

export function magicCheckAuthV2(config: any, url: string, rest: boolean = false) {
  let magic: MagicData = ajaxJqMagicV2
  setMagicToken(magic, url, rest)
  config.headers = config.headers || {}
  config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
}
export function magicCheckAuth(config: any, url: string, rest: boolean = false) {
  let magic: MagicData = ajaxJqMagic
  setMagicToken(magic, url, rest)
  config.headers = config.headers || {}
  config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
}
function setMagicToken(magic: MagicData, url: string, rest: boolean) {
  if (magic.url === url) {
    return
  }
  if (rest) {
    getMagicToken(magic)
  } else if (!Authorization || Authorization == magic.Authorization) {
    getMagicToken(magic)
  }
}
function getMagicToken(magic: MagicData) {
  const user = session('magic').user || session('magicUser') || magic.user, param = magic.isParam ? user : undefined, data = magic.isParam ? undefined : user
  let res: any = GLOBAL$AJAX$.commonHttppost(magic.url, data, {
    param,
    isNotGetUser: true,
    isNotWrapped: true
  })
  setAuthorization(res.Authorization || res.data.accessToken || true)
}