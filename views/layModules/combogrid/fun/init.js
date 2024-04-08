/* eslint-disable no-unused-vars */
import { id, mcElem, multElem, valElem, name, popElem, size, complete, valId, multi, isMulti, tableCom, height, cols, selected, isUpper, loadDataCall, mcInputElem, clear, searchElem, showId } from "../var/index";
import { initEvent } from "./event";
import { initTable } from "./initTable";
function initConfig(config) {
  id = uuid()
  valElem = $(config.valElem)
  name = valElem.attr('name')
  mcElem = $(config.mcElem || `[name="${name}-mc"]`)
  popElem = $('<div class="jt-abs jt-combogrid" style="display:none"><table lay-filter="' + name + id + '-table"></table></div>')
  multi = mcElem.attr('multi')
  isMulti = multi !== undefined
  if (isMulti) {
    mcElem.hide()
    multElem = $(`<div class="jt-flex jt-grow1 lay-multi-select combogrid" wrap row><input type="text" class="jt-grow1 jt-select" placeholder="${mcElem.attr('placeholder')}" value=""></div>`)
    mcElem.after(multElem)
    mcInputElem = multElem.find('input')
  } else {
    mcInputElem = mcElem
  }
  searchElem = mcElem
  multi = multi || ','
  size = config.pageSize || 5
  complete = config.complete
  valId = config.valId || 'id'
  showId = config.showId || 'mc'
  height = config.height
  selected = config.selected
  isUpper = !config.upper
  clear = config.clear
  loadDataCall = config.loadData
  cols = config.cols
  tableCom = initTable()
}
export function init(config) {
  initConfig(config)
  mcElem.attr('jt-combogrid', true)
  if (config.width) {
    popElem.css('width', config.width)
  }
  if (config.minWidth) {
    popElem.css('minWidth', config.minWidth)
  }
  mcElem.after(popElem)
  initEvent()
}