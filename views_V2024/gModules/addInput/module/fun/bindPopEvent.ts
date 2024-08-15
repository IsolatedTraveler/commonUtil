import { id } from "GMAddInput";
import { setIsPop } from "../../../../g-lobal/dom/var";
import { popContentElem, popElem, setTrData, trData } from "../var";
import { hide } from "./hide";
export function close(event: JQuery.ClickEvent) {
  setIsPop(false)
  hide()
  event.stopPropagation()
  setTrData(null)
}
export function bindPopEvent(layTable: any, layForm: any) {
  popElem.on('click', close)
  popContentElem.on('click', (event: JQuery.ClickEvent) => { event.stopPropagation() })
  popContentElem.on('click', '[cancel]', close)
  popContentElem.on('click', '[add]', (event: JQuery.ClickEvent) => {

  })
  layForm.on(`submit(${id}-add)`, ({ field }: any) => {
    if (trData) {
      trData.update(field)
      setTrData(null)
    } else {
      layTable.reload(id, { data: (layTable.cache[id] || []).concat(field) })
    }
    Object.keys(field).forEach(key => {
      field[key] = ''
    })
    layForm.val(id, field, true)
  })
  layTable.on(`row(${id})`, (obj: any) => {
    layForm.val(id, obj.data)
    setTrData(obj)
  })
  layTable.on(`tool(${id})`, (obj: any) => {
    obj.del()
  })
}