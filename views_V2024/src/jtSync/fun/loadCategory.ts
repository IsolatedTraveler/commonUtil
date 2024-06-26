import { loadJs } from "../../../g-lobal/"
import { initJtSync } from "../var"
import { getThirdUrl } from "./getThirdUrl"
/**
 * 根据指定分类加载脚本资源
 * 
 * @param {string} category - 需要加载的脚本分类标识
 * @returns {Promise<void>} - 成功加载或抛出错误的 Promise
 */
export function loadCategory(category: string) {
  return initJtSync().then(() => {
    var url = getThirdUrl(category)
    if (url) {
      return loadJs(url)
    }
    return Promise.reject(new Error('未配置该功能：【' + category + '】'))
  })
}