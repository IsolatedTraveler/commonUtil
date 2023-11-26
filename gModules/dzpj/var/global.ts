import { KpConfig, KpUser } from "../type"

// 首行内容
export var user: KpUser, kpConfig: KpConfig = {}
export function setUser() {
  user = user || {} as KpUser
  return user
}