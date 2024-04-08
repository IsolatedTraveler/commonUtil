import { setSinglePopBtnElem, setSinglePopContentElem, setSinglePopElem, setSinglePopMsgElem, setSinglePopTitleElem, setSinglePromise, singlePopElem } from "../var"

export function layer(elem: HTMLElement) {
  setSinglePopElem()
  singlePopElem.append(elem)
  return new Promise(setSinglePromise).catch(layerClose)
}
export function layerClose() {
  singlePopElem.style.display = 'none'
}
export function layerContent(title: string, msg: string, btn: Array<string> = []) {
  setSinglePopTitleElem(title)
  setSinglePopMsgElem(msg)
  setSinglePopBtnElem(btn)
  setSinglePopContentElem()
}