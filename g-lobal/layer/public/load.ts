import { setPageTemp } from "../../base";
import { uuid } from "../../util";
import { loadElem, msgElem, loadMsg, closeLoadEd, setLoadELem } from "../var";
export type LayerIndex = string | undefined

export function laoding(msg = undefined): LayerIndex {
  if (document.body) {
    let id = uuid()
    setPageTemp(loadElem, setLoadELem)
    msg && (msgElem.innerHTML = msg)
    loadMsg[id] = msg
    if (loadMsg.msgs.length < 2) {
      loadElem.setAttribute('style', '')
    }
    loadMsg.msgs = Object.keys(loadMsg)
    return id
  }
}
export function loaded(i: string) {
  if (loadMsg) {
    delete loadMsg[i]
    loadMsg.msgs = Object.keys(loadMsg)
    closeLoadEd()
  }
}

export function load(content: string, icon = 0) {
  var font = 24, width = (content.length + 3) * font
  return window.layer.load(icon, {
    content: content ? `<span style="position: absolute; top: ${font}px;font-size:24px;width: ${width}px;text-align: center;left:-${width / 2 - 40}px;line-height:2em;max-width:45vw; ">${content}...</span>` : ''
  })
}