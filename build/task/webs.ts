import { dbdq } from "../../public"
import { getCode } from "../fun"
import { outMl, ml } from '../var/webs'
import path from 'path'
export async function buildWebs(version: string, gn: string) {
  const arr = gn.split('\\'), fileSite = path.resolve(ml, arr.join('\\'))
    , len = dbdq.length, out = outMl.map(it => path.resolve(it, arr.slice(1, -1).join('\\')))
  var fileName = arr.pop(), outAddName = ''
  for (let i = 0; i < len; i++) {
    var outAddName = '-his', fbdq = dbdq[i]
    if (fileName == 'pdjl' && fbdq == 'erdss') {
      outAddName = '-his'
    } else {
      outAddName = '-' + fbdq
    }
    await getCode(fbdq, fileSite, version, out, 'webs', { reName: 'page', outAddName, fileName })
  }
}
