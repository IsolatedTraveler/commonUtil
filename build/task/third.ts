import path from 'path'
import { outMl, ml } from "../var/third"
import { getCode, getFileStats } from '../fun'
import { dbdq } from '../../public'
import { institutionDeploymentMapping } from '../var/config'
let urls: Map<string, string>
function getState(ml: string, son: string): Promise<void> {
  const url = path.resolve(ml, son)
  return getFileStats(url).then(res => {
    if (res) {
      urls.set(url, son)
    }
  }, () => { })
}

export function buildThird(version: string, gn: string) {
  const gnml = path.resolve(ml, gn)
  urls = new Map()
  return Promise.all(dbdq.map(dq => {
    return Promise.all([
      getState(gnml, dq),
      getState(gnml, institutionDeploymentMapping[dq]),
      getState(gnml, 'def')
    ])
  })).then(async () => {
    for (const [_url, son] of urls.entries()) {
      await getCode(son, gnml, version, outMl.map(it => path.resolve(it, gn)), 'third', { reName: gn })
    }
  })
}