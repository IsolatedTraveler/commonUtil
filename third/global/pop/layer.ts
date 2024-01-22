import { setSinglePopBtnElem, setSinglePopContentElem, setSinglePopElem, setSinglePopMsgElem, setSinglePopTitleElem, singlePopElem } from "../var"

export function layer(elem: HTMLElement) {
  setSinglePopElem()
  singlePopElem.append(elem)
}
export function layerContent(title: string, msg: string, btn: Array<string> = []) {
  setSinglePopTitleElem(title)
  setSinglePopMsgElem(msg)
  setSinglePopBtnElem(btn)
  setSinglePopContentElem()
}