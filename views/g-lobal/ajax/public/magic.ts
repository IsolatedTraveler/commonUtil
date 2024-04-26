import { MagicData, ajaxJqMagic, ajaxJqMagicV2 } from "../../../../types"
import { session } from "../../temp"
import { AjaxRequestOption } from "../type"
import { Authorization, setAuthorization } from "../var"


export function magicCheckAuthV2(config: any, url: string, rest: boolean = false) {
  let magic: MagicData = ajaxJqMagicV2
  setMagicToken(magic, url, rest)
  config.headers = config.headers || {}
  config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
  return Authorization === true
}
export function magicCheckAuth(config: any, url: string, rest: boolean = false) {
  let magic: MagicData = ajaxJqMagic
  setMagicToken(magic, url, rest)
  config.headers = config.headers || {}
  config.headers[magic.AuthorizationName] = Authorization === true ? undefined : Authorization;
  return Authorization === true
}
export function magicData2(data: any,
  {
    isNotGetUser,
    isBase64,
    isPwd,
    isNotWrapped
  }: AjaxRequestOption = {}) {
  if (data.pageSize) {
    data.page = data.pageNumber
    data.size = data.pageSize
  }
  if (!isNotGetUser) {
    // eslint-disable-next-line no-import-assign
    let user = GLOBAL$USER$.getUser() || {}
    data = Object.assign({}, {
      czryid: user.ryid,
      czryjgid: user.jgid,
      czryjgmc: user.jgmc,
      czryjgjc: user.jgjc,
      czryyhm: user.yhm,
      czryxm: user.xm || user.username,
      superadmin: user.superadmin
    }, data)
  }
  if (isNotWrapped) {
    return JSON.stringify(data)
  }
  return JSON.stringify({ data })
}
function setMagicToken(magic: MagicData, url: string, rest: boolean) {
  that.wjqCode = magic.wjqCode
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
  const user = session('magicUser') || (session('magic') || {}).user || magic.user, param = magic.isParam ? user : undefined, data = magic.isParam ? undefined : user
  let res: any = that.commonHttppost(magic.url, data, {
    param,
    isNotGetUser: true,
    isNotWrapped: true
  }) || {}
  setAuthorization(res.Authorization || (res.data || {}).accessToken || true)
}