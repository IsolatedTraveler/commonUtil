/* eslint-disable no-unused-vars */
import { isPop, multElem, oldSearch, popElem, searchElem } from "../var/index";
import { deleteVal } from "./deleteVal";
import { hidePopKey, showPopKey } from "./keyboard";
import { reset } from "./reset";

export function initEvent() {
  searchElem.on('keydown', (e) => {
    oldSearch = e.target.value
  })
  searchElem.on('keyup', (e) => {
    const keycode = e.which ? e.which : e.keyCode
    if (isPop) {
      showPopKey(keycode)
    } else {
      hidePopKey(keycode)
    }
    e.stopPropagation()
  })
  popElem.on('click', (e) => {
    e.stopPropagation()
  })
  $(d).on('click', () => {
    isPop && reset()
  })
  if (multElem) {
    multElem.on('click', '.jt-icon-close', function(e) {
      deleteVal($(this).parents('[lay-value]'))
    })
  }
}