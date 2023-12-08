import { taskGlobal, buildCs, buildSrc } from './build/task/'
const { version } = require('./package.json')
export default async function () {
  await taskGlobal(version)
  // await buildCs(version)
  await buildSrc(version)
}