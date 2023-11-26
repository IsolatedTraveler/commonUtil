import { KpJgid } from '../type'
import { kpConfig } from '../var/index'
import { commonQueryAsyncHttppost_callback, getUser } from '../../../g-lobal/index'
export function isOpenFp() {
  const { jgid } = getUser()
  return kpConfig[jgid] || getKpJgConfig(jgid)
}
function getKpJgConfig(jgid: KpJgid) {
  return kpConfig[jgid] = setKpJgConfig(jgid)
}
function setKpJgConfig(jgid: KpJgid) {
  return commonQueryAsyncHttppost_callback('/magic/yy201-dzpj/dzpj/s-pzxx', { jgid }).then((res: any) => {
    if (res.code == '1' && res.data && res.data.length) {
      let data = res.data, resultVal = {} as any
      resultVal.url = data[0].dz.replace(/\/$/, '')
      data.forEach((it: any) => {
        let id = it.dm
        resultVal[id] = resultVal[id] || it.sdz
      })
      return resultVal
    } else {
      return Promise.reject()
    }
  })
}