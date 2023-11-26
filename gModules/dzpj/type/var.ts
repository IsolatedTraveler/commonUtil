export type KpJgid = string
export interface KpUser {
  jgid: KpJgid
  ryid: string
  jgmc: string
  jgjc: string
  yhm: string
  xm?: string
  username?: string
  superadmin?: string
}
export interface KpJgConfig {
  url: string
  sync: boolean
}
export interface KpConfig {
  [index: KpJgid]: Promise<KpJgConfig>
}