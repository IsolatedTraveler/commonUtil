import path from 'path'
import { institutionDeploymentMapping, deploymentDirectories } from './config'
import { dbdq, siteVesion } from '../../public'
var add = ''
if (siteVesion) {
  add = '_' + siteVesion
}
export const ml = path.resolve(`${__dirname}/../../views${add}/`)
  , out = [...new Set(dbdq.map(key => deploymentDirectories[institutionDeploymentMapping[key]]))]
  , date = new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z")