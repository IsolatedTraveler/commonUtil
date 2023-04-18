import { that } from "../var/init";
import { openPopIndex } from "../var/old";
function getBtns(b, filter, id) {
  let btns = b.find('iframe')[0].contentWindow.$(`[layer-filter~="${filter}"]`)
  return btns.length > 1 ? btns.filter(id) : btns
}
function getEvent(e, id) {
  return (a, b, c) => {
    getBtns(b, e, id).trigger('click');
    return false
  }
}
function getBtnEvent(len, id) {
  var btnEvent = { cancel: getEvent('btn_cancel', id) }
  for (let i = 2; i < len; i++) {
    btnEvent['btn' + i] = getEvent('btn_' + (i - 1), id)
  }
  btnEvent['btn' + len] = getEvent('btn_last', id)
  return btnEvent
}
export function openDialog(url, data, width, height, id, btn = ['保存', '放弃', '关闭']) {
  var btnEvent = getBtnEvent(btn.length, id)
  if (url.indexOf("xtcs.html") > -1) {
    var mkbh = that.getBrowserParam('cssz', 'mkbh')
    return that.showxtcs(mkbh)
  } else {
    if (/^[0-9]+$/.test(width)) {
      width += 'px'
    }
    if (/^[0-9]+$/.test(height)) {
      height += 'px'
    }
    return new Promise((resolve, reject) => {
      that.openPop({
        url,
        data: { page_source: 'layer' },
        btn,
        area: [width, height],
        success(elem, index) {
          elem.find('iframe')[0].contentWindow[that.name].setOpenPopIndex(index)
        },
        yes(a, b, c) {
          let btns = getBtns(b, 'btn_yes', id)
          btns.trigger('click')
        },
        end: resolve,
        btnEvent
      })
    })
  }
}
export function setOpenPopIndex(i) {
  openPopIndex = i
  console.log(openPopIndex)
}
export function closeOpenPopChild() {
  w.parent.layui.layer.close(openPopIndex)
}