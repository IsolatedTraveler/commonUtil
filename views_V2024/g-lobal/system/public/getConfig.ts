import { setPageTemp } from "../../util"
import { configData, setConfigData } from "../var"
/**
 * @description 获取配置信息。如果尚未设置，此函数会触发应用程序配置信息的初始化过程。
 * 然后根据提供的`key`返回配置对象中的相应属性值。如果没有提供`key`，则直接返回整个配置对象。
 *
 * @param {string} [key=''] - 配置项的键名，可选，默认为空字符串。
 * @returns {any} 如果提供了`key`，返回对应的配置值；否则，返回整个配置对象。
 */
export function getConfig(key: string = ''): any {
  setPageTemp(configData, setConfigData)
  return key ? configData[key] : configData
}