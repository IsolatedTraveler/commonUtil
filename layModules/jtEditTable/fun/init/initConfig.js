/* eslint-disable no-unused-vars */
import { data, done, elem, name, watch, addField, elem_p, elem_t, combogrid, cols, elem_f, glzb, dataChange, forbidAdd, isEdit, editCheckData, limit, enterAdd, rowClick, rowCheck, skin, autoHeight, primaryCol, errorTimeOut, selectData, tr_key, def_data_tr, changeData } from "../../var/index";
import { initCombogrid } from "./initCombogrid";
import { initSelectConfig } from "./initSelectConfig";
import { initCols, initTemple } from "./initCols";
import { initWatch } from "./initWatch";

export function initConfig(config) {
  elem = config.elem
  name = config.name
  done = config.done
  data = config.data || []
  primaryCol = config.primaryCol
  watch = initWatch(config.watch)
  addField = config.addField
  elem_t = $(elem)
  elem_p = elem_t.parent()
  glzb = config.glzb || '#xz'
  elem_f = $(glzb)
  dataChange = config.dataChange
  forbidAdd = config.forbidAdd
  isEdit = config.isEdit
  editCheckData = config.editCheckData
  limit = config.limit || 0
  enterAdd = config.enterAdd
  rowClick = config.rowClick
  rowCheck = config.rowCheck
  skin = config.skin
  autoHeight = config.autoHeight
  changeData = config.changeData || changeData
  errorTimeOut = config.errorTimeOut || errorTimeOut
  cols = initCols(config.cols)
  selectData = initSelectConfig(config.selectData)
  combogrid = initCombogrid(config.combogrid)
  initTemple(config.templet?.name, 'name')
  initTemple(config.templet?.nameH, 'nameH')
  tr_key = Object.keys(def_data_tr)
}