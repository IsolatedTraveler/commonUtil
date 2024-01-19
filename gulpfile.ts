import { taskGlobal, buildCs, buildSrc, buildThird } from './build/task/'
const { version } = require('./package.json')
export default async function () {
  await taskGlobal(version)
  await buildCs(version)
  await buildSrc(version)
  await buildThird(version)
}