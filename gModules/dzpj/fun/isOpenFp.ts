import { KpJgid } from '../type'
import { kpConfig, setUser } from '../var/index'
export function isOpenFp() {
  const { jgid } = setUser()
  return kpConfig[jgid] || getKpJgConfig(jgid)
}
function getKpJgConfig(jgid: KpJgid) {
  return kpConfig[jgid] = setKpJgConfig(jgid)
}
function setKpJgConfig(jgid: KpJgid) {
  return Promise.resolve({ url: '', sync: false })
}