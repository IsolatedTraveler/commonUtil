export function dealVal(v) {
  if (v) {
    return v
  } else if (v === false) {
    return 'FALSE'
  } else {
    return '""'
  }
}