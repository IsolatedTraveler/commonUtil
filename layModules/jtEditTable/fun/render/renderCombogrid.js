/* eslint-disable no-unused-vars */
import { combogrid, combogrid_key, data, elem, isInit, third_combgrid } from "../../var/index";
import { getInputElem } from "../other/getElem";
import { updateRow } from "../prop/updateRow";
import { trDataV } from "../val/trDataV";
import { endRender, startRender } from "./render";

export function renderCombogrids(tr, i) {
  return combogrid_key ? getCombogrid().then(() => {
    combogrid_key.forEach(key => {
      renderCombogrid(tr, i, key)
    })
  }) : Promise.resolve()
}
function renderCombogrid(tr, i, key) {
  let option = combogrid[key], mcElem = getInputElem(tr, option.mcElem || key), valElem = getInputElem(tr, option.valElem || key)
  third_combgrid.render({
    ...option,
    valElem,
    mcElem,
    selected(res) {
      startRender()
      return combogridDealData(res.data, elem, i, option.selected).then(d => {
        return updateRow(Object.assign({}, trDataV(i), d), i)
      }).finally(endRender)
    }
  })
}
function combogridDealData(d, elem, i, fun) {
  return fun ? fun(d, elem, i).then(d => {
    return d ? d : Promise.reject({ msg: '未获取到选中行' })
  }) : Promise.resolve(d)
}
function getCombogrid() {
  if (third_combgrid) {
    return Promise.resolve()
  } else if (layui.combogrid) {
    third_combgrid = layui.combogrid
    return Promise.resolve()
  } else {
    return new Promise((resolve) => {
      layui.use(['combogrid'], function () {
        third_combgrid = layui.combogrid
        return resolve()
      })
    })
  }
}