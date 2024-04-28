import path from 'path'
import { institutionDeploymentMapping, deploymentDirectories } from './config'
import { dbdq, dmSite } from '../../public'
export const ml = path.resolve(`${__dirname}/../../${dmSite}/`)
  , out = [...new Set(dbdq.map(key => deploymentDirectories[institutionDeploymentMapping[key]]))]
  , date = new Date().toISOString().replace(/:\d+\.\d+Z$/, "Z")