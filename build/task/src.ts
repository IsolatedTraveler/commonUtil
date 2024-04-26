import { getCode } from '../fun'
import { outMl, ml } from '../var/src'
export function buildSrc(version: string, gn: string) {
  return getCode(gn, ml, version, outMl, 'src', {})
}