export function setWatch(d) {
  if (d) {
    d = d.filter(it => it)
    if (!d[0]) {
      d = null
    }
  }
  return d
}