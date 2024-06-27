import path from 'path'
import { outMl, ml } from "../var/third"
import { getCode, getFileStats, getSonDir } from '../fun'
import { dbdq } from '../../public'
import { institutionDeploymentMapping } from '../var/config'

function getState(ml: string, son: string): Promise<{ url: string, son: string } | false> {
  const url = path.resolve(ml, son)
  return getFileStats(url).catch(() => false).then(res => res ? { url, son } : false)
}

export async function buildThird(version: string, gn: string) {
  const len = dbdq.length
  for (let i = 0; i < len; i++) {
    const gnml = path.resolve(ml, gn), dq = dbdq[i]
    // 确认是打包指定地区还是指定大区还是所有地方通用版本；优先取指定地区-》指定大区-》通用
    await Promise.all([
      getState(gnml, dq),
      getState(gnml, institutionDeploymentMapping[dq]),
      getState(gnml, 'def')
    ]).then(res => {
      const { url, son } = res.filter(it => it)[0] || { url: '', son: '' }
      if (url) {
        return getCode(son, gnml, version, outMl.map(it => path.resolve(it, gn)), 'third', { reName: gn })
      }
    })
    // await getSonDir(path.resolve(ml, gn)).then((res) => {
    //   console.log(res)
    // })
    // console.log(dbdq[i], path.resolve(ml, gn), version, outMl.map(it => path.resolve(it, gn)), 'third', { reName: gn })
    // await getCode(dbdq[i], path.resolve(ml, gn), version, outMl.map(it => path.resolve(it, gn)), 'third', { reName: gn })
  }
}