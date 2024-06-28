import { WEB_NAME } from "../../../../util/var"
import { SYSTEM } from "../var/server"
/**
 * @description 提供一种便捷的方式来读取、写入或删除浏览器sessionStorage中的数据，同时支持对存储键名进行前缀处理，增强数据管理的灵活性和区分度
 * 
 * @param {string} name - 用于sessionStorage的键名。
 * @param {any} [val]  - 如果省略或为undefined，函数将尝试获取指定键名的值。
 *                     - 如果为null，函数将删除该键名对应的sessionStorage项。
 *                     - 否则，该值将被设置为指定键名在sessionStorage中的值。
 * @returns {any} - 如果操作是获取值，则返回读取到的值；
 *                如果是设置或删除操作，则返回传入的val。
 */
export function session(name: string, val?: any): any {
  const name1: string = WEB_NAME + name
  if (val === undefined) {
    if (SYSTEM) {
      return JSON.parse(SYSTEM.varget('that', name) || 'null')
    } else {
      return JSON.parse(sessionStorage.getItem(name1) || 'null')
    }
  } else if (val === null) {
    if (SYSTEM) {
      SYSTEM.varpost('that', name, JSON.stringify(val))
    } else {
      sessionStorage.removeItem(name1)
    }
  } else {
    if (SYSTEM) {
      SYSTEM.varpost('that', name, JSON.stringify(val))
    } else {
      sessionStorage.setItem(name1, JSON.stringify(val))
    }
  }
  return val
}