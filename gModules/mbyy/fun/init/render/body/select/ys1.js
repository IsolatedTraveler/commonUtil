export function getSelectLabe(data) {
  if (typeof data == 'string') {
    data = [data]
  }
  return '<div class="jt-flex print-select-label">' + data.map(it => {
    return `<p>${it}</p>`
  }).join('') + '</div>'
}
export function getSelectOption(data = []) {
  return data.map(it => {
    var id, mc
    if (typeof it === 'string') {
      id = mc = it || ''
    } else {
      id = it.id || ''
      mc = it.mc || ''
    }
    return `<option value=${id}>${mc}</option>`
  }).join('')
}
export function getSelect(data, name) {
  return `<div class="print-select-val"><select name="${name}">${getSelectOption(data || [])}</select></div>`
}
export function ys1({ label, data, name }) {
  return `<div class="print-select jt-flex-r" >${getSelectLabe(label)}${getSelect(data, name)} </div>`
}