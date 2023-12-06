import { taskGlobal, buildCs } from './build/task/'
const { version } = require('./package.json')
export default async function () {
  await taskGlobal(version)
  await buildCs(version)
}