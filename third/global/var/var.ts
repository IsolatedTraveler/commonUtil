interface PopData {
  code: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
  data: any
}
type Resolve = (PopData: any) => void
type Reject = (reason?: any) => void
export var singlePopElem: HTMLDivElement, singlePopContentElem: HTMLDivElement
  , singlePopTitleElem: HTMLDivElement
  , singlePopMsgElem: HTMLDivElement
  , singlePopBtnElem: HTMLDivElement
  , singlePopResolve: Resolve
  , singlePopReject: Reject
export function setSinglePromise(resolve: Resolve, reject: Reject) {
  singlePopResolve = resolve
  singlePopReject = reject
}
export function setSinglePopElem() {
  if (!singlePopElem) {
    singlePopElem = d.createElement('div')
    singlePopElem.style.position = 'absolute'
    singlePopElem.style.right = '0px'
    singlePopElem.style.left = '0px'
    singlePopElem.style.top = '0px'
    singlePopElem.style.bottom = '0px'
    singlePopElem.style.alignItems = 'center'
    singlePopElem.style.justifyContent = 'center'
    singlePopElem.style.zIndex = '99999'
    d.body.append(singlePopElem)
  }
  singlePopElem.style.display = 'flex'
  singlePopElem.innerHTML = ''
}
export function setSinglePopContentElem() {
  if (!singlePopContentElem) {
    singlePopContentElem = d.createElement('div')
    singlePopContentElem.style.background = '#fff'
    singlePopContentElem.style.color = '#333'
    singlePopContentElem.style.border = '1px solid #dcdcdc'
    singlePopContentElem.append(singlePopTitleElem)
    singlePopContentElem.append(singlePopMsgElem)
    singlePopContentElem.append(singlePopBtnElem)
  }
}
export function setSinglePopTitleElem(title: string = '') {
  if (!singlePopTitleElem) {
    singlePopTitleElem = d.createElement('div')
    singlePopTitleElem.style.borderBottom = '1px solid #dcdcdc'
    singlePopTitleElem.style.padding = '8px'
    singlePopTitleElem.style.fontSize = '16px'
  }
  singlePopTitleElem.innerHTML = title
  singlePopTitleElem.style.display = title ? 'block' : 'none'
}
export function setSinglePopMsgElem(msg: string = '') {
  if (!singlePopMsgElem) {
    singlePopMsgElem = d.createElement('div')
    singlePopMsgElem.style.padding = '8px'
  }
  singlePopMsgElem.innerHTML = msg
}
export function setSinglePopBtnElem(btn: Array<string> = []) {
  if (!singlePopBtnElem) {
    singlePopBtnElem = d.createElement('div')
    singlePopBtnElem.style.borderTop = '1px solid #dcdcdc'
    singlePopBtnElem.style.padding = '5px'
    singlePopBtnElem.style.justifyContent = 'flex-end'
    singlePopBtnElem.style.fontSize = '14px'
  }
  singlePopBtnElem.innerHTML = btn.map((it, i) => `<button>${it}</button>`).join('')
  singlePopBtnElem.querySelectorAll('button').forEach((elem, i) => {
    elem.addEventListener('click', event => {
      singlePopResolve({ event, code: i })
    })
  })
  singlePopBtnElem.style.display = btn.length ? 'flex' : 'none'
}