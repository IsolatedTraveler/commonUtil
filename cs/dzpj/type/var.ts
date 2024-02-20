
export type KpJgid = string
export type KpIsPrint = '是' | '否' | '提示'
export interface KpJgConfig {
  url: string
  kpdbm: string,
  jkdm: string
}
export interface KpConfig {
  [index: KpJgid]: Promise<KpJgConfig>
}
export interface KpJgParam {
  sync: boolean
  isPrint: KpIsPrint
}
export interface KpParam {
  [index: KpJgid]: KpJgParam
}
export interface KpPrintParam {
  printer?: ''
}