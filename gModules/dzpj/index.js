/* eslint-disable no-unused-vars */
export * from './var/const'
import '../../g-lobal/const'
import './var/index'
import '../../g-lobal/var'
import './fun/index'
import './business/index'
// 通配所有
export { setWebName } from '../../g-lobal'
// ajax特有
export { commonHttppost, getAjax, getConfig } from '../../g-lobal'
// import { init } from './fun/init'
Class = function (config) {
  // init(config)
}