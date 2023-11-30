export * from "../../types/const/index"
export * from './var/const'
import '../../g-lobal/const'
import './var/index'
import '../../g-lobal/var'
import './fun/index'
import './business/index'
export { Class } from './core.js'
// 通配所有
export { setWebName } from '../../g-lobal'
// ajax特有
export { commonHttppost, getAjax, getConfig } from '../../g-lobal'