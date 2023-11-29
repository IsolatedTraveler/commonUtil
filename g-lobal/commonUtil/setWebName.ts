import { getBaseUrl } from "../base";
import { setWebNameVal } from "../var";

export function setWebName() {
  var a = getBaseUrl().split('/')
    , b = (a.pop() || a.pop())
  setWebNameVal(`/${b}/`)
}