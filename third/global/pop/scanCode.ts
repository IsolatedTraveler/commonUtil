import { singlePopContentElem, singlePopMsgElem, singlePopResolve } from "../var";
import { layer, layerContent } from "./layer";
function scanCodeDealy(elem: HTMLInputElement) {
  singlePopResolve({ data: elem.value, code: -1 })
}
export function scanCode(msg: string) {
  layerContent('扫码', `<p style="margin: 0; padding: 5px 0;font-size:14px;">${msg}</p><input style="width: ${msg.length + 2}em;font-size:14px"/>`, ['取消'])
  setTimeout(() => {
    singlePopMsgElem.querySelectorAll('input').forEach((elem: HTMLInputElement) => {
      elem.focus()
      var delayScan = GLOBAL$UTIL$.debounce1(scanCodeDealy, 500)
      elem.addEventListener('keypress', event => {
        if (event.code === 'Enter') {
          singlePopResolve({ data: elem.value, code: -1 })
        }
        delayScan(elem)
      })
    })
  }, 10);
  return layer(singlePopContentElem)
}