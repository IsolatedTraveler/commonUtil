import { dicUrlBySql, isInit, organization, region, startRule } from "../var"
function getThirdUrl(category: string) {
  var urlArr = ['/lib23/js/third']
    , regionRule = startRule[region] || {}
    , organizationRule = regionRule[organization] || {}
    , organizationDefRule = regionRule.def || {}
  if (organizationRule[category]) {
    urlArr.push(region, organization, category)
  } else if (organizationDefRule[category]) {
    urlArr.push(region, 'def', category)
  } else {
    urlArr.push('def', category)
  }
  return urlArr.join('/')
}
export function loadCategory(category: string): Promise<void | null> {
  return isInit.then(() => {
    return GLOBAL$FILE$.loadJs(getThirdUrl(category))
  })
}
export function loadCategoryBySql(category: string): Promise<void | null> {
  var user = GLOBAL$USER$.getUser()
  return GLOBAL$AJAX$.commonQueryAsyncHttppost_callback(dicUrlBySql, { jgid: user.jgid, gnid: category, sxfs: '1' }).then(({ code, data: { list: [{ dylj = '' } = { dylj: '' }] = [] } = {}, message }) => {
    if (code == 1) {
      if (dylj) {
        return GLOBAL$FILE$.loadJs(dylj)
      } else {
        return Promise.reject(new Error('当前用户暂未开通该功能'))
      }
    } else {
      return Promise.reject(new Error(message))
    }
  })
}