export function getSpanVal(val) {
  return val.map((it) => {
    var ms = '', style = '', val
    if (typeof it == 'string') {
      val = it || ''
    } else {
      ms = it.ms || ''
      style = it.style || ''
      val = it.val || ''
    }
    return `<span class="${ms}" style="${style}">${val}</span>`
  }).join('')
}
export function ys1({ level, val }) {
  return `<div class="print-title-${level} jt-flex-r" >${getSpanVal(val)}</div>`
}