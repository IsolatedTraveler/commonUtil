import { taskGlobal, build } from './build/task/'
import { version } from './package.json'
import { dbnr } from './public'
export default async function () {
  await taskGlobal(version)
  const keys = Object.entries(dbnr), len = keys.length
  for (let i = 0; i < len; i++) {
    const [key, gn] = keys[i], j = gn ? gn.length : 0
    for (let z = 0; z < j; z++) {
      await (build as any)[key](version, gn[z])
    }
  }
}