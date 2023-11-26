import { KpLx, KpLy } from "./public"

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
  kpdbm: string,
  jkdm: string
}
export interface KpConfig {
  [index: KpJgid]: Promise<KpJgConfig>
}
export type KpPzLx = {
  [index in KpLy]: string
}
export type KpPz = {
  [index in KpLx]: KpPzLx
}