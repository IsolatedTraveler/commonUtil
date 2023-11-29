import { openPop } from "../layui/layer"
import { printCLodop } from "../../var/print"
import { getConfig } from "./config"
import { setIframe } from "./deeps"
import { getParamsUrl, loaded, loading, local, strToUrl } from "./init"
import { dealsUrl, getBaseUrl, setPageTemp } from "../../../../g-lobal"
function setPrinted() {
  if (w.getCLodop) {
    printCLodop = w.getCLodop()
    printCLodop.SET_LICENSES(getConfig('lodop_licenses_name'), getConfig('lodop_licenses_id'), '', '')
  } else {
    layui.layer.alert('未引入Clodop插件')
  }
  return printCLodop
}
export function setPrint() {
  return setPageTemp(printCLodop, setPrinted)
}
export function getPrint() {
  if (setPrint()) {
    let len = printCLodop.GET_PRINTER_COUNT(), arr = []
    for (let i = 0; i < len; i++) {
      let mc = printCLodop.GET_PRINTER_NAME(i)
      arr.push({ id: mc, mc })
    }
    return arr
  }
}
export function printSetHtml(obj = {}) {
  let i = loading('加载打印数据中')
  obj.bj1 = 0
  obj.bj2 = 0
  obj.title = obj.title || '标准打印'
  if (obj.url) {
    setIframe(getParamsUrl(obj.data || {}, dealsUrl(obj.url)), -1, function (e, callBack) {
      try {
        delete obj.url
        obj.w = w
        e.w.index.print(obj, function (res) {
          if (res && res.code !== '1') {
            layui.alert.msg(res.msg)
          }
          callBack()
          loaded(i)
        })
      } catch (e) {
        loaded(i)
        layui.layer.alert('打印页面未提供打印功能，请联系管理员！')
      }
    })
  } else {
    let elems = 'page:not(.print-hide)'
    if (obj.selectedId) {
      elems = `page[jt-page-id="${obj.selectedId}"]:not(.print-hide)`
    }
    if (obj.charts) {
      obj.charts.forEach(chart => {
        chart.toImg()
      })
    }
    elems = $(elems)
    obj.val = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/css" href="${dealsUrl(obj.css || '/public21/css/print.css', getBaseUrl())}" />
      <style>page{margin: 0 !important;}</style>
      <title>${obj.title}</title>
    </head>
    <body>
      ${[].map.call(elems, el => {
      $(el).find('textarea').each((i, e) => {
        e.innerHTML = e.value
      })
      $(el).find('input').each((i, e) => {
        e.setAttribute('value', e.value)
      })
      return el.outerHTML.replace(/<(textarea|input)/g, '<$1 readonly')
    }).join('')}
    </body>
    <html>`
    loaded(i)
    print(obj)
  }
}
export function print(obj = {}) {
  let dycs = local(obj.name || 'dycssz') || {}, i = loading()
  obj = Object.assign({}, dycs, obj)
  try {
    if (setPrint()) {
      printCLodop.PRINT_INIT(obj.title || '打印')
      obj.defPrint && printCLodop.SET_PRINTER_INDEX(obj.defPrint || obj.mrdyj)
      obj.size && printCLodop.SET_PRINT_PAGESIZE(...obj.size)
      obj = Object.assign({ bj1: 8, bj2: 8 }, obj)
      printCLodop.ADD_PRINT_HTM(obj.bj1, obj.bj2, '100%', "100%", obj.val)
      if (obj.mode) {
        obj.mode.forEach(it => {
          printCLodop.SET_PRINT_MODE(...it);
        })
      }
      if (obj.dyms === '3') {
        printCLodop.PREVIEW()
        loaded(i)
      } else if (obj.dyms === '2') {
        let a = (obj.w || w)
        a.layui.layer.confirm(obj.msg || '是否打印？', function (index) {
          loaded(index)
          printCLodop.PRINT()
          loaded(i)
        })
      } else {
        printCLodop.PRINT()
        loaded(i)
      }
    } else if (obj.val) {
      setIframe(strToUrl(obj.val, 'text/html'), 5 * 60 * 1000, function (e) {
        loaded(i);
        e.w.print()
      })
    } else {
      loaded(i)
      w.print()
      return true
    }
  } catch (e) {
    loaded(i)
    console.error(e)
  }
}
export function printConfig(obj = { title: '本机打印参数设置', name: 'dycssz' }) {
  let prints = getPrint(), elem = $('[lay-filter="printConfig"]')
  if (elem.length === 0) {
    elem = $(`<div style="display: none" class="jt-w100 jt-flex layui-form jt-pd5-rl" label="5" lay-filter="printConfig">
      <div class="jt-w100 layui-form-item jt-flex-r">
        <label class="layui-form-label">默认打印机</label>
        <div class="layui-input-block jt-grow1">
          <select name="mrdyj">
            ${prints.map(it => {
      return '<option value="' + it.id + '">' + it.mc + '</option>'
    }).join('')}
          </select>
        </div>
      </div>
      <div class="jt-w100 layui-form-item jt-flex-r jt-mg8-t">
        <label class="layui-form-label">打印模式</label>
        <div class="layui-input-block jt-grow1">
          <select name="dyms">
            <option value="1">自动打印</option>
            <option value="2">提示打样</option>
            <option value="3">预览打印</option>
          </select>
        </div>
      </div>
    </div>`)
    elem.prependTo('body')
  }
  openPop({
    elem,
    title: obj.title,
    name: 'printConfig',
    data: Object.assign({ mrdyj: prints[0].id, dyms: '1' }, local(obj.name)),
    btn: ['保存', '取消'],
    area: ['400px'],
    yes(i) {
      local(obj.name, layui.form.val('printConfig'))
      layui.layer.close(i)
    }
  })
}
export default {
  setPrint,
  getPrint,
  printSetHtml,
  print,
  printConfig
}