import { XZQHURL } from "../var"

/**
* @description 获取行政区划
* @author 何波
* @date 2024-04-29 15:15:13
* @param {string} jsm 检索码
* @param {number | string} page 查询第几页的数据，默认1
* @param {number | string} size 一页查询多少条数据，默认20
*/
export function getXzqh(jsm: string, page: number | string = 1, size: number | string = 20) {
  try {
    const data = GLOBAL$XHR$V2024$.commonHttppost(XZQHURL, { jsm, page, size }).data
    data.rows = data.list || []
    return data
  } catch (e) {
    console.error(e)
    return {
      rows: [],
      total: 0
    }
  }
}