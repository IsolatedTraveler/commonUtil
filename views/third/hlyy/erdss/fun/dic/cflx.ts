import { Yzlx } from "./yzlx"

export type Cflx = 1 | 2 | 3 | 4
/**
 * 定义处方类型代码可取值及其含义。
 * 
 * 枚举值:
 * - `1`: 西药处方
 * - `2`: 中成药处方
 * - `3`: 草药处方
 * - `4`: 住院处方
 */
export type IsLscf = 1 | 0
export function dicCflx(yplx: string): Cflx {
  if (yplx == '02') {
    return 2
  } else if (yplx == '01') {
    return 1
  } else if (yplx == '03') {
    return 3
  }
  return 4
}
export function dicIsLscf(): IsLscf {
  return 1
}
type Cflb = 'CH01' | 'CH02' | 'CH03' | 'CH04' | 'CH05' | 'CH06' | 'CH07' | 'CH08' | 'CH12'
/**
 * 定义处方类别代码可取值及其含义。
 * 
 * 枚举值:
 * - `CH01`: 普通处方
 * - `CH02`: 急诊处方
 * - `CH03`: 儿科处方
 * - `CH04`: 麻精处方
 * - `CH05`: 疫苗处方
 * - `CH06`: 临时处方
 * - `CH07`: 慢病处方
 * - `CH08`: 饮片处方
 * - `CH12`: 长期处方
 */
export function dicCflb(v: Yzlx): [Cflb, string] {
  if (v == 'L') {
    return ['CH12', '长期处方']
  } else {
    return ['CH06', '临时处方']
  }
}