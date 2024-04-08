export type Cflx = 1 | 2 | 3 | 4
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