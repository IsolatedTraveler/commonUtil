import { clear, data, isMulti, multElem, oldSearch, popElem, searchElem, selectedI, valElem } from "../var/index";
import { deleteVal } from "./deleteVal";
import { loadData } from "./loadData";
import { pageChange } from "./page";
import { initPop } from "./pop";
import { reset } from "./reset";
import { setV } from "./setVal";
export function selectRow(a) {
  popElem.find(`tr[data-index="${selectedI}"]`).removeClass('jt-selected')
  selectedI = (selectedI + a + data.length) % data.length
  popElem.find(`tr[data-index="${selectedI}"]`).addClass('jt-selected')
}
export function showPopKey(code) {
  if (code === 13) {
    if (!layer || !layer.submit()) {
      setV({tr: popElem.find(`tr[data-index="${selectedI}"]`), data: data[selectedI]})
    }
  } else if (code === 37) {
    pageChange(-1)
  } else if (code === 38) {
    selectRow(-1)
  } else if (code === 39) {
    pageChange(1)
  } else if (code === 40) {
    selectRow(1)
  } else {
    reset()
  }
}
export function hidePopKey(code) {
  if (code === 13) {
    if (!layer || !layer.submit()) {
      if (searchElem.val()) {
        loadData(1).then(res => {
          initPop()
          return res
        }).catch(e => {
          layer.msg((e && e.msg) || '未获取到数据', {
            time: 2000
          }, function() {
            reset()
          })
        })
      }
    }
  } else if (isMulti) {
    if (code === 8) {
      if (!oldSearch) {
        deleteVal(multElem.find('lay-value').eq(-1))
      }
    }
  } else {
    if (valElem.val() && searchElem.val() !== oldSearch) {
      valElem.val('')
      clear && clear(oldSearch)
      valElem.trigger('change')
    }
  }
}