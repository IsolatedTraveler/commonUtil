import { dic } from "../../var/dictionary"
export function getXb(dm = '') {
  dm = dm.split('-')
  return {id: dm[0], mc: dic.xb[dm[0]] || dm.join('-')}
}
export default {
  getXb
}