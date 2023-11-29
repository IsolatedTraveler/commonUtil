import { dealsUrl, getBaseUrl } from "../../../../g-lobal";
import { getAjaxSync } from "./ajax";

export function svgRender(id) {
  let elems = $(id || d).find('.jt-svg');
  [].forEach.call(elems, (el) => {
    el = $(el)
    let src = el.attr('src')
    getAjaxSync(dealsUrl(src, getBaseUrl())).then(res => {
      let svg = res.documentElement, nodes = svg.childNodes
      nodes.forEach(function (node) {
        node.setAttribute('fill', '')
      })
      el.append(svg)
    })
  })
}
export default {
  svgRender
}