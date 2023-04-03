/* eslint-disable no-unused-vars */
import { data, done, elem, layerIndex, name, watch, addField, elem_p, elem_t, combogrid, selectData, cols, elem_f, glzb, dataChange, forbidAdd, isEdit, editCheckData, limit, enterAdd, rowClick, rowCheck } from "../../var/index";
import { setCols } from "./setCol";
import { setWatch } from "./setWatch";

export function initConfig(config) {
  layerIndex = commonUtil.layerLoading()
  elem = config.elem
  name = config.filter
  done = config.done
  data = config.data || []
  watch = setWatch(config.watch)
  addField = config.addField
  elem_t = $(elem)
  elem_p = elem_t.parent()
  combogrid = config.combogrid
  selectData = config.selectData
  cols = setCols(config.cols)
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
}