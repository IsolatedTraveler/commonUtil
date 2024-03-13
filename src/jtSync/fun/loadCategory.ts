import { dicUrlBySql, init, organization, region, startRule } from "../var"
function getThirdUrl(category: string) {
  var urlArr = ['/lib23/js/third']
    , regionRule = startRule[region] || {}
    , organizationRule = regionRule[organization] || {}
    , organizationDefRule = regionRule.def || {}
  if (organizationRule[category]) {
    urlArr.push(category, region + '_' + organization)
  } else if (organizationDefRule[category]) {
    urlArr.push(category, region)
  } else if ((startRule.def || {})[category]) {
    urlArr.push(category, 'def')
  } else {
    return ''
  }
  return urlArr.join('/') + '.js'
}
export function loadCategory(category: string) {
  return init().then(() => {
    var url = getThirdUrl(category)
    if (url) {
      return GLOBAL$FILE$.loadJs(url)
    }
    return Promise.reject(new Error('未配置该功能：【' + category + '】'))
  })
}
export function loadCategoryBySql(category: string) {
  var user = GLOBAL$USER$.getUser()
  return w.jtSync.commonQueryAsyncHttppost_callback(dicUrlBySql, { jgid: user.jgid, gnid: category, sxfs: '1' }).then(({ code, data: { list: [{ dylj = '', csmb = '', cssm = '' } = { dylj: '' }] = [] } = {}, message }) => {
    if (code == 1) {
      if (dylj) {
        return GLOBAL$FILE$.loadJs(dylj).then(() => ({ csmb, cssm }))
      } else {
        return Promise.reject(new Error('当前用户暂未开通该功能'))
      }
    } else {
      return Promise.reject(new Error(message))
    }
  })
}