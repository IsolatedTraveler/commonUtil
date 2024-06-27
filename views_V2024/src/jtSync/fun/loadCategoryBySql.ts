import { ajaxPost, getUser, loadJs } from "../../../g-lobal"
import { dicUrlBySql } from "../var"
/**
 * 根据SQL查询条件加载指定类别的模块信息。
 *
 * @param {string} category - 需要加载的模块类别。
 * @returns {Promise<{csmb: string, cssm: string}> | Promise.reject<string>} - 成功加载后返回包含模块信息（{csmb, cssm}）的Promise，
 * 或在加载失败时返回Promise.reject携带错误信息。
 */
export function loadCategoryBySql(category: string) {
  var user = getUser()
  return ajaxPost(dicUrlBySql, { jgid: user.jgid, gnid: category, sxfs: '1' }).then(({ code, data: { list: [{ dylj = '', csmb = '', cssm = '' } = { dylj: '' }] = [] } = {}, message }) => {
    if (code == 1) {
      if (dylj) {
        return loadJs(dylj.replace(/^\/*/, '')).then(() => ({ csmb, cssm }))
      } else {
        return Promise.reject(new Error('当前用户暂未开通该功能'))
      }
    } else {
      return Promise.reject(new Error(message))
    }
  })
}