import { exeBuild } from "../fun"
import {outMl, ml} from '../var/src'
export function buildSrc(version: string) {
  return exeBuild(version, outMl, ml, 'src')
}