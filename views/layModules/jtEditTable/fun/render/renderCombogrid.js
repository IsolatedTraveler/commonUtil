import { combogrid, combogrid_key,  elem, third_combgrid, tr_key } from "../../var/index";
import { getInputElem } from "../other/getElem";
import { trDataV } from "../val/trDataV";
import { valChanges } from "../val/valCol";

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
      return combogridDealData(res.data, elem, i, option.selected).then(d => {
        let trData = trDataV(i)
        return valChanges(tr_key, Object.assign({}, trData, d), trData, i, tr)
      })
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