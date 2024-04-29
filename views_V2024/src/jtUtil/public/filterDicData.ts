/**
 * 过滤字典数据，根据mj字段值筛选出指定状态的项。
 * 
 * @param {DictionaryItemType[]} data - 待过滤的字典数据数组。
 * @param {number} [mj=1] - 过滤条件，指定mj字段的值，默认为1。
 * @returns {DictionaryItemType[]} - 符合条件的字典项数组。
 */
export function filterDicData(data: Array<any>, mj: number = 1) {
  return data.filter(it => it.mj == mj)
}