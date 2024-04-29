export function getXzqhmc(dm: string) {
  return GLOBAL$XHR$V2024$.asyncQueryPost('/magic/yy10/01/10/s-xzqh-qc', { dm }).then(res => {
    if (res && res.data && res.data.list) {
      return [...new Set(res.data.list.map((it: any) => it.mc))].sort((a: any, b: any) => b.localeCompare(a)).join('')
    }
    return []
  })
}