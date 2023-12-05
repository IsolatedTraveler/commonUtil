export function dealVal(v) {
  if (v === 0) {
    return '0'
  } else if (v === false || v) {
    return v
  } else {
    return ''
  }
}