import {StartRule} from '../type';
import {organization, region, startRule} from '../var';
/**
 * 根据类别获取第三方库的URL路径。
 *
 * @param {string} category - 第三方库的类别名称。
 * @returns {string} 返回构建好的第三方库URL，如果找不到对应规则则返回空字符串。
 */
export function getThirdUrl(category: string) {
  var urlArr = ['/lib23/js/third'],
    regionRule = (startRule[region] || {}) as StartRule,
    organizationRule = (regionRule[organization] || {}) as StartRule,
    organizationDefRule = (regionRule.def || {}) as StartRule;
  if (organizationRule[category]) {
    urlArr.push(category, region + '_' + organization);
  } else if (organizationDefRule[category]) {
    urlArr.push(category, region);
  } else if ((startRule.def || {})[category]) {
    urlArr.push(category, 'def');
  } else {
    return '';
  }
  return urlArr.join('/') + '.js';
}
