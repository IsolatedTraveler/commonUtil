import { taskGlobal, buildCs, buildSrc, buildThird, buildWebs, buildModule, buildLayModule } from './build/task/'
import {version} from './package.json'
export default async function () {
  await taskGlobal(version)
  await buildCs(version)
  await buildModule(version)
  await buildLayModule(version)
  await buildSrc(version)
  await buildThird(version)
  await buildWebs(version)
}