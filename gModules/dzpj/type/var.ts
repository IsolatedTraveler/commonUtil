
export type KpJgid = string

export interface KpJgConfig {
  url: string
  sync: boolean
  kpdbm: string,
  jkdm: string
}
export interface KpConfig {
  [index: KpJgid]: Promise<KpJgConfig>
}