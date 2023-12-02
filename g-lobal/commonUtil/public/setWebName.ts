import { getBaseUrl } from "../../url/public/jsUrl"
import { setWebNameVal } from "../var/gloabl"

export function setWebName() {
  var a = getBaseUrl().split('/')
    , b = (a.pop() || a.pop())
  setWebNameVal(`/${b}/`)
}