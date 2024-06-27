import { taskGlobal, build } from './build/task/'
import { version } from './package.json'
import { dbnr } from './public'
export default async function () {
  await taskGlobal(version)
  const keys = Object.entries(dbnr), len = keys.length
  // 获取顶级目录，区分是打包src/third
  for (let i = 0; i < len; i++) {
    // key: 目录
    // gn:  待打包功能
    // fun: 打包调用的方法
    const [key, gn] = keys[i], fun = (build as any)[key]
    if (gn && fun) {
      for (const funcName of gn) {
        await funcName && fun(version, funcName);
      }
    }
  }
}