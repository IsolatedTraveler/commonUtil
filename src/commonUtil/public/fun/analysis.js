export const analysis = {
  sfzh(n) {
    let l = n.length, r, s
    if (l === 15) {
      r = '19' + n.substr(6, 6)
      s = n.substr(12, 3)
    } else if (l === 18) {
      r = n.substr(6, 8)
      s = n.substr(14, 3)
    }
    return {csrq: r.substr(0, 4) + '-' + r.substr(4, 2) + '-' + r.substr(6, 2), xb: s % 2 === 1 ? '1' : '2'}
  }
}
export default {
  analysis
}