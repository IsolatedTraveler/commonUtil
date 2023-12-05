export function excelSum(zd, zg) {
  if (zg) {
    return `SUM(${zd}:${zg})`
  } else if (Array.isArray(zd)) {
    return `SUM(${zd.join(',')})`
  }
}