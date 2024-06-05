import { getXhr } from "../../../../xhr/fun/getXhr"
import { session } from "../public/session"
import { CONFIG_URL, SYSTEM } from "./const"

export var user: any // 用户信息
  , configData: any // 应用配置
/**
* @description 
* @author 何波
* @date 2024-04-29 10:01:38
*/
export function setUser(): any {
  if (SYSTEM) {
    return user = JSON.parse(SYSTEM.varget('0', 'ryxx'))
  }
  return user = session('userinfo').ryxx
}
/**
 * @description 同步获取应用的配置信息。
 * 
 * 函数执行过程：
 * 1. 向'/public/data/config.json'发起GET请求，该请求包含一个查询参数v，其值为当前时间的时间戳，用以防止浏览器缓存旧的配置信息。
 * 2. 请求配置的同时，传入一个配置对象，指定了错误提示信息前缀、请求的URL类型为'origin'（通常意味着直接使用当前页面的协议和主机），
 *    以及标志isNotGetUser为true，可能用于在请求中指示不需要附加用户身份验证信息或其他特定于用户的处理逻辑。
 * 3. 调用全局的GLOBAL$XHR$V2024$.getAjax方法来发起请求，此方法应为外部定义的一个处理Ajax请求的函数或类方法。
 * 4. 函数返回configData的设置操作，虽然实际上此返回值在异步操作的上下文中可能不会被直接使用，因为getAjax方法通常是异步的。
 */
export function setConfigData() {
  return configData = getXhr(CONFIG_URL, {}, { v: new Date() }, 'GET', 'origin', {})
}
