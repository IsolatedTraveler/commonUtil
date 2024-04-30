import { dics } from "../var";

/**
 * @description 根据分类代码异步获取字典数据。
 * 首次请求时会从服务器获取数据并缓存结果，后续相同请求直接从缓存中读取。
 *
 * @param {string} fldm - 字段代码，用于定位要获取的字典条目。
 * @returns {Promise<any[]>} 返回一个包含字典数据的Promise，数据格式为数组。
 */
export async function dicget(fldm: string): Promise<any[]> {
  try {
    if (dics[fldm]) {
      return dics[fldm]
    }
    const res = await GLOBAL$XHR$V2024$.asyncQueryPost('/magic/yy10/01/10/s-tyzd', { fldm })
    return res.data.list
  } catch (error) {
    console.error(`获取字典数据时发生错误: ${error}`);
    return []
  }
}