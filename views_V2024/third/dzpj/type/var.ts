
export type DzpjKpJgid = string
export type DzpjKpIsPrint = '是' | '否' | '提示'
export interface DzpjKpJgConfig {
  url: string
  kpdbm: string,
  jkdm: string
}
export interface DzpjKpConfig {
  [index: DzpjKpJgid]: Promise<[DzpjKpJgConfig, DzpjKpJgParam]> | undefined
}
export interface DzpjKpJgParam {
  sync: boolean
  isPrint: DzpjKpIsPrint
}
export interface DzpjKpParam {
  [index: DzpjKpJgid]: DzpjKpJgParam
}
export interface DzpjKpPrintParam {
  printer?: ''
}