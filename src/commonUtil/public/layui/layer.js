import { getParamsUrl } from "../fun/init"
import { dealsUrl } from "../fun/url"

export function layerLoading() {
  return layui.layer.load(2, {
    shade: [0.1, '#000']
  })
}
export function openPop(options) {
  var content, type = 1, setVal, btn = options.btn || [], elem
  if (options.url) {
    type = 2
    content = dealsUrl(options.url)
    if (options.data) {
      content = getParamsUrl(options.data, content)
    }
  } else {
    elem = content = $(options.elem)
    if (options.name) {
      let suc = options.success, name = options.name
      options.success = function (a, b) {
        let d = Object.assign({}, options.defaultData, options.data)
        if (!options.data) {
          var v = that.setFormVal(name), keys = Object.keys(v)
          keys.forEach(key => {
            v[key] = ''
          })
          d = Object.assign(v, d)
        }
        that.setFormVal(name, d)
        suc && suc(a, b)
      }
    }
  }
  if (typeof btn === 'string') {
    btn = [btn]
  } else if (options.btn1) {
    btn[0] = options.btn1
  }
  if (options.btn2) {
    btn[1] = options.btn2
  }
  return layui.layer.open(Object.assign({
    type,
    shade: 'rgba(0,0,0,.3)',
    title: options.title,
    content,
    btnAlign: 'center',
    btn: options.btn === false ? false : btn.length ? btn : false,
    area: options.area || ['80%', '80%'],
    success(a, b) {
      setVal && setVal()
      options.success && options.success(a, b)
    },
    yes(a, b, c) {
      if (options.yes) {
        options.yes(a, b, c)
      } else {
        let btn = '[lay-submit]:not(jt-ignore)'
        if (elem) {
          btn = elem.find(btn)
        } else {
          btn = b.find('iframe')[0].contentWindow.$(btn)
        }
        if (btn[1]) {
          btn = btn.filter(function (i, it) {
            return $(it).attr('jt-trigger') == 'parent'
          })
        }
        if (btn[0]) {
          btn.trigger('click')
        }
      }
      return false
    },
    ...(options.btnEvent || {})
  }, options.cover))
}
export default {
  layerLoading,
  openPop
}