export function dealVal(v) {
  if (v) {
    return v
  } else if (v === false) {
    return 'FALSE'
  } else if (v === 0) {
    return 0
  } else {
    return '""'
  }
}
export function dealTableName(v) {
  return v ? (v + '!') : ''
}