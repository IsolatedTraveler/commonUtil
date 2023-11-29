import { debounce1 } from "../../util/debounce"
export var loadMsg: any, loadElem: any, msgElem: any, closeLoadEd: any
export function setLoadElem() {
  loadElem = document.createElement('div')
  loadElem.setAttribute('class', 'jt-load jt-flex jt-abs')
  loadElem.setAttribute('center', true)
  loadElem.setAttribute('style', 'display: none')
  loadElem.innerHTML = '<p class="jt-loading"><span></span><span></span><span></span><span></span><span></span><span></span></p>'
  msgElem = document.createElement('p')
  loadElem.append(msgElem)
  loadMsg = { msgs: [] }
  closeLoadEd = debounce1(closeLoad, 10)
  document.body.append(loadElem)
}
function closeLoad() {
  if (loadMsg.msgs.length < 2) {
    loadElem.setAttribute('style', 'display: none')
  }
}