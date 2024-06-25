import { ajaxPost, getUser, loadJs } from "../../../g-lobal"
import { dicUrlBySql } from "../var"

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