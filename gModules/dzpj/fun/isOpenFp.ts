import { KpJgid } from '../type'
import { kpConfig, setUser } from '../var/index'
import { commonQueryAsyncHttppost_callback } from '../../../g-lobal/ajaxT/index'
export function isOpenFp() {
  const { jgid } = setUser()
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