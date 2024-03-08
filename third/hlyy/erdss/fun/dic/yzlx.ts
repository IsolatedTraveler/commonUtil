import { Mzlx } from "./mzlx"

export type Yzlx = 'L' | 'T' | 'N'
export function dicYzlx(mzlx: Mzlx, sfcz: Boolean = false): Yzlx {
  if (mzlx == 'op') {
    return sfcz ? 'L' : 'T'
  }
  return 'N'
}