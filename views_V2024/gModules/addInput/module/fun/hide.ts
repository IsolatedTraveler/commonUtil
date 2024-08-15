import { id } from "GMAddInput";
import { popElem, valInput } from "../var";

export function hide() {
  popElem.hide()
  if (window.layui && window.layui.table) {
    const data = window.layui.table.cache[id] || []
    valInput.val(data.map((it: any) => {

    }))
  }
}