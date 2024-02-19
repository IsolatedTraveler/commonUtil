import { KpJgConfig, KpJgParam, KpJgid } from '../type/index'
import { kpConfig, kpParam, setIsPrint, setSync } from '../var/index'
export function isOpenFp() {
  // 获取开票参数信息，判断是否开票
  const { jgid } = GLOBAL$USER$.getUser()
  return kpConfig[jgid] || getKpJgConfig(jgid)
}
function getKpJgConfig(jgid: KpJgid) {
  return kpConfig[jgid] = Promise.all([setKpJgConfig(jgid), getDzpjConfig(jgid)]).then(res => res[0])
}
function setKpJgConfig(jgid: KpJgid): Promise<KpJgConfig> {
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback('/magic/yy201-dzpj/dzpj/s-pzxx', { jgid }).then((res: any) => {
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
function getDzpjConfig(jgid: string) {
  var data = (kpParam[jgid]) as KpJgParam
  if (!data) {
    let val: any = GLOBAL$COMMONUTIL$.paramget('201021000') || {}
    data = {
      sync: val[1] == '同步',
      isPrint: val[2]
    }
  }
  setSync(data.sync)
  setIsPrint(data.isPrint)
}