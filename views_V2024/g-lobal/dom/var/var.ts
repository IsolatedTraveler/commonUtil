export let popSelectElem: JQuery<HTMLUListElement>, isMulti: boolean, isPop: boolean
export function setPopSelectElem(data: SelectOption[], id: string, mc: string, multi: boolean) {
  isMulti = multi
  if (!popSelectElem) {
    popSelectElem = $('<ul>')
  }
  popSelectElem.html(data.map(it => {
    return `<li data-id=${it[id]}>${it[mc]}</li>`
  }).join(''))
}
export function setIsPop(judge: boolean) {
  isPop = judge
}