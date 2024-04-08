import { layerCont, mcElem, popElem } from "../var/index";
function getLayerCont() {
  layerCont = []
  let es = mcElem.parents(), len = es.length
  for (let i = 0; i < len; i++) {
    let e = es[i], overflow = getComputedStyle(e).overflowY
    if (overflow === 'scroll' || overflow === 'auto') {
      if (e.clientHeight < e.scrollHeight - 2) {
        break;
      } else {
        layerCont.push(e)
      }
    } else if (overflow !== 'visible') {
      layerCont.push(e)
    }
  }
  layerCont = $(layerCont)
}
export function initPop() {
  let top = mcElem.offset().top - (d.documentElement.scrollTop || w.pageYOffset || d.body.scrollTop),
  height = w.innerHeight, bot = height - mcElem.height() - top
  getLayerCont()
  layerCont.each((i, el) => {
    let elem = $(el)
    elem.attr('style', (elem.attr('style') || '') + ';overflow: visible !important;')
  })
  if (bot < 260) {
    popElem.addClass('jt-up')
  } else {
    popElem.removeClass('jt-up')
  }
  popElem.show()
}