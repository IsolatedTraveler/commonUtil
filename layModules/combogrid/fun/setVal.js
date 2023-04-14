/* eslint-disable no-unused-vars */
import { isMulti, multi, popElem, selected, selectedC, selectedClass, showId, valElem, valId, selectedData, mcInputElem, layerCont } from "../var/index"
import { addVal } from "./addVal"
import { clearVal } from "./clear"
import { reset } from "./reset"
function vSet(data) {
  const v = data[valId]
  if (isMulti) {
    let o = valElem.val() || '', judge
    o = o.split(multi)
    judge = o.filter(it => it===v)[0]
    if (judge) {
      layer.msg('该选项已存在')
    } else {
      addVal(data, o, v)
    }
    reset()
  } else {
    valElem.val(v)
    valElem.trigger('change')
    mcInputElem.val(data[showId])
    mcInputElem.trigger('change')
    selectedData = data
    reset()
    triggerEnter()
  }
}
function triggerEnter() {
  if (commonUtil && commonUtil.keyupEvent) {
    w.dispatchEvent(commonUtil.keyupEvent)
  }
}
export function setV(res1) {
  popElem.find(selectedC).removeClass(selectedClass)
  res1.tr.addClass(selectedClass)
  if (selected) {
    let res = selected(res1)
    if (res) {
      if (res.__proto__ === Promise.prototype) {
        res.then(function(res) {
          if (res) {
            vSet(res)
          } else {
            reset()
            triggerEnter()
          }
        })
      } else {
        vSet(res)
      }
    }
  } else {
    vSet(res1.data)
  }
}
export function setVal(data, judge) {
  if (judge) {
    layerCont = null
  }
  if (isMulti) {
    clearVal()
    if (data) {
      data.forEach(it => {
        addVal(it)
      })
    }
  }
}