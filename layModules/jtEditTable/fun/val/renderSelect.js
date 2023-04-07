import { data, elem_p, selectData, select_key_yxj, select_option, zb_data } from "../../var/index";
import { getInputElem } from "../other/getElem";
import { dealVal } from "./dealVal";

export function renderSelects(i, keys, tr) {
  if (keys && keys.length) {
    tr = tr || elem_p.find(`[data-index=${i}]`)
    let trData = data[i], min = 100
    keys.forEach(key => min = Math.min(min,select_key_yxj[key].yxj))
    let not = keys.filter(key => select_key_yxj[key].yxj > min)
    keys = keys.filter(key => select_key_yxj[key].yxj = min)
    if (keys && keys.length) {
      Promise.all(keys.map(key => {
        let option = selectData[key], o = dealVal(trData[key]), v = dealVal(o || option.default)
        if (v && option.showId) {
          if (key !== option.showName) {
            return renderSelect(key, tr, v, not)
          }
        }
        return bindSelectEvent(i, key, tr)
      })).then(() => renderSelects(i, not, tr))
    }
  }``
  return Promise.resolve()
}
function renderSelect(key, tr, o, arr) {
  let i = tr.attr('data-index'), option = selectData[key], elem = getInputElem(tr, key)
  if (option.getData || option.data) {
    return renderSelectOption(elem, option, o, tr, i, key, arr)
  } else {
    console.error(`selectData[${key}]中缺少获取options的方法`)
    return Promise.resolve()
  }
}
function renderSelectOption(elem, option, value, tr, i, key, arr) {
  let old = data[i][key]
  return getSelectData(key, option, value, tr, data[i]).then(({data, value}) => {
    return commonUtil.setSelectOption({
      valId: option.valId || 'id',
      showId: option.showId || 'mc',
      isNotNull: option.isNotNull || false,
      elem,
      data,
      value
    }, true).then(() => {
      if (elem.val() != old) {
        arr.push(...(select_key_yxj[key].c || []))
      }
    })
  })
}
function getSelectData(key, option, value, tr, trData) {
  if (option.data) {
    return Promise.resolve({data: option.data, value})
  } else {
    return asyncGetSelectData(key, option, tr, trData, value)
  }
}
function asyncGetSelectData(key, option, tr, trData, value) {
  let param = {}, filter = option.filterRow, zb = option.filterZb, keys
  setKeyV(zb, param, zb_data)
  setKeyV(filter, param, trData)
  keys = [key, ...Object.keys(param)].join('-')
  if (select_option[keys]) {
    return Promise.resolve(select_option[keys])
  }
  return option.getData(param, tr, trData).then(res => {
    if (res && res.data && res.data.length && option.cache) {
     select_option[keys] = res
    }
    if (res) {
      res.value = dealVal(value || res.value)
    }
    return res
  })
}
function setKeyV(arr, obj, d = {}) {
  if (arr && arr[0]) {
    arr.forEach(key => {
      obj[key] = d[key]
    })
  }
}
function bindSelectEvent(i, key, tr, arr) {
  return new Promise((resolve, reject) => {
    let td = getInputElem(tr, key).parents('td')
    td.unbind('click', renderSelectEvent).one('click', renderSelectEvent)
    setTimeout(() => {
      td.find('.layui-select-title').unbind('click', bindSelectTrigger).one('click', bindSelectTrigger)
      resolve()
    },0)
  })
}
function bindSelectTrigger(e) {
  $(e.currentTarget).parents('td').eq(0).trigger('click')
}
function renderSelectEvent(e) {
  let td = $(e.currentTarget), select = td.find('select'), name = select.attr('name')
  , tr = td.parents('tr').eq(0), trIndex = tr.attr('data-index'), keys = []
  td.find('.layui-select-title').unbind('click', bindSelectTrigger)
  renderSelect(name, tr, data[trIndex][name], keys).then(() => renderSelects(trIndex, keys, tr)).then(() => {
    td.find('.layui-select-title').trigger('click')
  })
}