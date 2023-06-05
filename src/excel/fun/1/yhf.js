function getYhfStr(lx) {
  var res
  if (lx === '&&') {
    res = 'AND('
  } else if (lx === '||') {
    res = 'OR('
  } else if (lx === '!') {
    res = 'NOT('
  } else if (lx === 'null') {
    res = 'ISBLANK('
  } else {
    console.error(`未设置【${lx}】该类型的处理方案`)
  }
  return res
}
export function yhf(lx, tj) {
  var res = getYhfStr(lx)
  if (Array.isArray(tj) && tj.length) {
    tj = tj.map((it) => {
      if (typeof it === 'string') {
        return it
      } else if (it.lx && it.val) {
        return yhf(it.lx, it.val.map(v => {
          return yhf(v[0], v[1])
        }))
      }
    }).join(',')
  } else {
    console.error(`条件不能为空`)
  }
  return res + tj + ')'
}