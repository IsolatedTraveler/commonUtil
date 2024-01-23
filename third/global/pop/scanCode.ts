import { singlePopContentElem, singlePopMsgElem, singlePopResolve } from "../var";
import { layer, layerContent } from "./layer";

export function scanCode() {
  layerContent('扫码', '<p style="margin: 0; padding: 5px 0">请扫码获取最新数据：</p><input/>', ['取消'])
  setTimeout(() => {
    singlePopMsgElem.querySelectorAll('input').forEach((elem: HTMLInputElement) => {
      elem.focus()
      elem.addEventListener('keypress', event => {
        if (event.code === 'Enter') {
          singlePopResolve({ data: elem.value, code: -1 })
        }
      })
    })
  }, 10);
  return layer(singlePopContentElem)
}