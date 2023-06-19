export const analysis = {
  sfzh(n = '', fgf = '-') {
    let l = n.length, r = '', s = ''
    if (l === 15) {
      r = '19' + n.substring(6, 12)
      s = n.substring(12, 15)
    } else if (l === 18) {
      r = n.substring(6, 14)
      s = n.substring(14, 17)
    }
    return { csrq: r.substring(0, 4) + fgf + r.substring(4, 6) + fgf + r.substring(6, 8), xb: s % 2 === 1 ? '1' : '2' }
  }
}
export default {
  analysis
}