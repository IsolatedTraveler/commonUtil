function getYhfStr(lx) {
  var res
  if (lx === '&&') {
    res = 'AND('
  } else if (lx === '||') {
    res = 'OR('
  } else if (lx === '!') {
    res = 'NOT('
  } else {
    res = 'ISBLANK('
  }
  return res
}
export function yhf(lx, tj) {
  var res = getYhfStr(lx)
  if (Array.isArray(tj) && tj.length) {
    tj = tj.filter(it => it).map((it) => {
      if (typeof it === 'string') {
        return it
      } else if (it.val) {
        return yhf(it.lx, it.val)
      }
    }).join(',')
  } else {
    console.error(`条件不能为空`)
  }
  return res + tj + ')'
}