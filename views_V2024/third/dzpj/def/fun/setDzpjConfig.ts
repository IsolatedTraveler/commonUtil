import { paramget } from "../../../../g-lobal"
import { DzpjKpJgParam } from "../../type"
import { dzpjKpParam } from "../var"
/**
 * 获取电子票据的动态配置参数
 * 
 * @function setDzpjConfig
 * @param {string} jgid - 动态配置组ID，用于确定要获取的特定动态配置。
 * @returns {Promise<DzpjKpJgParam>} - 返回一个Promise，解析后的结果是DzpjKpJgParam类型的对象，包含sync和isPrint属性。
 * 
 * 此函数首先检查`dzpjKpParam`对象中是否存在针对`jgid`的配置。如果存在，则直接解析Promise。如果不存在，将发起一个异步请求（例如，通过调用`paramget`函数）以获取相应的动态配置。获取的配置将存储在`dzpjKpParam`对象中，并返回该配置。
 * 
 * 注意：此函数使用Promise处理异步操作，因此在调用此函数时应适当处理返回的Promise。
 */
export function setDzpjConfig(jgid: string): Promise<DzpjKpJgParam> {
  var data = dzpjKpParam[jgid]
  if (!data) {
    return paramget('201021000').then((val: any) => {
      return dzpjKpParam[jgid] = {
        sync: val[1] == '同步',
        isPrint: val[2],
        print: val[3]
      }
    }).catch(() => ({ sync: true, isPrint: '是' }))
  }
  return Promise.resolve(data)
}