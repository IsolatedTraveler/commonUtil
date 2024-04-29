/**
 * @description 根据行政区域代码查询行政区域完整名称。
 *
 * @param { string } dm - 行政区域代码，用于查询特定的行政区域信息。
 * 
 * @returns { Promise<string> } 
 */
export function getXzqhmc(dm: string): Promise<string> {
  return GLOBAL$XHR$V2024$.asyncQueryPost('/magic/yy10/01/10/s-xzqh-qc', { dm }).then(res => {
    if (res && res.data && res.data.list) {
      return [...new Set(res.data.list.map((it: any) => it.mc))].sort((a: any, b: any) => b.localeCompare(a)).join('')
    }
    return ''
  })
}