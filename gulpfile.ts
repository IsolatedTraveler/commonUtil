import { taskGlobal, build } from './build/task/'
import { version } from './package.json'
import { dbnr } from './public'
export default async function () {
  await taskGlobal(version)
  await Object.entries(dbnr).map(([key, gn]) => {
    return gn.map(it => {
      return (build as any)[key](version, it)
    })
  })
}