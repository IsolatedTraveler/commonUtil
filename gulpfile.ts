import { taskGlobal, build } from './build/task/'
import { version } from './package.json'
import { dbnr } from './public'
export default async function () {
  await taskGlobal(version)
  const keys = Object.entries(dbnr), len = keys.length
  for (let i = 0; i < len; i++) {
    const [key, gn] = keys[i], fun = (build as any)[key]
    if (gn && fun) {
      for (const funcName of gn) {
        await funcName && fun(version, funcName);
      }
    }
  }
}