/**
* @description 数据来源说明
* @author 何波
* @date 2024-03-08 15:11:07
* @param {
*   100: 普通门诊
*   101: 专科门诊
*   102: 专家门诊
*   200: 急诊
*   300: 急诊观察
*   400: 普通住院
*   401: 特需住院
*   500: 家床
*   999: 其他
* } 
*/
export type Sjly = 100 | 101 | 102 | 200 | 300 | 400 | 401 | 500 | 999
export function dicMzlx(sjly: Sjly) {
  if (sjly == 400 || sjly == 401) {
    return 'ip'
  } else if (sjly == 500) {
    return 'opip'
  }
  return 'op'
}