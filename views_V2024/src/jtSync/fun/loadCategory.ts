import { loadJs } from "../../../g-lobal/"
import { initJtSync, organization, region, startRule } from "../var"
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
  return initJtSync().then(() => {
    var url = getThirdUrl(category)
    if (url) {
      return loadJs(url)
    }
    return Promise.reject(new Error('未配置该功能：【' + category + '】'))
  })
}