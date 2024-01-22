export var singlePopElem: HTMLDivElement, singlePopContentElem: HTMLDivElement
  , singlePopTitleElem: HTMLDivElement
  , singlePopMsgElem: HTMLDivElement
  , singlePopBtnElem: HTMLDivElement
export function setSinglePopElem() {
  if (!singlePopElem) {
    singlePopElem = d.createElement('div')
    singlePopElem.style.position = 'absolute'
    singlePopElem.style.right = '0px'
    singlePopElem.style.left = '0px'
    singlePopElem.style.top = '0px'
    singlePopElem.style.bottom = '0px'
    singlePopElem.style.display = 'flex'
    singlePopElem.style.alignItems = 'center'
    singlePopElem.style.zIndex = '99999'
    d.body.append(singlePopElem)
  }
  singlePopElem.innerHTML = ''
}
export function setSinglePopContentElem() {
  if (!singlePopContentElem) {
    singlePopContentElem = d.createElement('div')
    singlePopContentElem.append(singlePopTitleElem)
    singlePopContentElem.append(singlePopMsgElem)
    singlePopContentElem.append(singlePopBtnElem)
  }
}
export function setSinglePopTitleElem(title: string = '') {
  if (!singlePopTitleElem) {
    singlePopContentElem = d.createElement('div')
  }
  singlePopTitleElem.innerHTML = title
}
export function setSinglePopMsgElem(msg: string = '') {
  if (!singlePopTitleElem) {
    singlePopMsgElem = d.createElement('div')
  }
  singlePopMsgElem.innerHTML = msg
}
export function setSinglePopBtnElem(btn: Array<string> = []) {
  if (!singlePopBtnElem) {
    singlePopBtnElem = d.createElement('div')
  }
  singlePopMsgElem.innerHTML = btn.map((it, i) => `<button>${it}</button>`).join('')
}