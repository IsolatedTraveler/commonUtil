import { dic, ryxx } from "../../var/dic";
import { setPageTemp } from "../fun/deeps";
function setDataBase(data) {
  data.obj[data.name] = {}
}
function setJgryxx(obj) {
  if (ryxx[obj._n]) {
    return ryxx[obj._n]
  } else {
    return ryxx[obj._n] = that.commonQueryAsyncHttppost_callback('/zs02-ywjc/ryxxgl/s-bmryxx', obj).then(res => {
      dic.dataBase.ryxx[obj._n] = res.data || []
      return res.data || []
    })
  }
}
export function getJgryxx(jgid = '', bmid = '') {
  setPageTemp(dic.dataBase, setDataBase, { obj: dic, name: 'dataBase' })
  setPageTemp(dic.dataBase.ryxx, setDataBase, { obj: dic.dataBase, name: 'ryxx' })
  let data = setPageTemp(dic.dataBase.ryxx[jgid + '-' + bmid], setJgryxx, { jgid, bmid, _n: jgid + '-' + bmid })
  if (data.__proto__ === Promise.prototype) {
    return data
  } else {
    return Promise.resolve(data || [])
  }
}
export function getDic(ly, name) {
  if (dic[ly]) {
    return Promise.resolve(name ? dic[ly][name] : dic[ly])
  } else {
    return that.getAjaxSync('/public/dic/' + ly + '.json', { version: new Date().getTime() }, { urlType: 'origin', isNotGetUser: true }).then(res => {
      dic[ly] = res
      return name ? res[name] : res
    })
  }
}
export function renderDic(name = '', data = {}, def = 'common') {
  let dic = {}, dics = []
  $('[jt-dic]').each(function (i, el) {
    let name = el.getAttribute('jt-dic')
    if (name) {
      name = name.split('|')
      let ly = name[1] ? name[0] : def, res = dic[ly]
      name = name[1] || name[0]
      if (!res) {
        res = { ly, data: [{ el, name }] }
        dic[ly] = res
        dics.push(res)
      } else {
        res.data.push({ el, name })
      }
    }
  })
  dics = dics.map(it => {
    return getDic(it.ly).then(dic => {
      let arr = it.data
      return Promise.all(arr.map(it => {
        let key = it.name, elem = it.el, d = dic[key]
        if (d) {
          let notNull = elem.getAttribute('notNull')
          return that.setSelectOption({
            elem,
            data: d.data || [],
            isNotNull: notNull === null ? d.isNotNull : notNull === 'false' ? false : true,
            tip: elem.getAttribute('placeholder'),
            value: data[name] || ''
          })
        } else if (that.renderDics[key]) {
          return that.renderDics[key](elem)
        } else {
          console.error('jt-dic="' + key + '"该字典不存在，请确认')
          return
        }
      }))
    })
  })
  return Promise.all(dics).then(res => {
    name && layui.form.val(name, data)
  })
}
export let renderDics = {
  szhyz(elem, jgid) {
    return getJgryxx(jgid).then(res => {
      return that.setSelectOption({
        elem,
        data: res,
        showId: 'xm'
      })
    })
  },
  mzys(elem, jgid) {
    return this.szhyz(elem, jgid)
  }
}, dics = {
  jgryxx: getJgryxx,
  bmryxx(ksid, jgid) {
    return getJgryxx(jgid, ksid)
  }
}
export default {
  dic,
  renderDic,
  renderDics,
  dics
}