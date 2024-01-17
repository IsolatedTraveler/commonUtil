import { isInit, organization, region, startRule, StartRule } from "../var"
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