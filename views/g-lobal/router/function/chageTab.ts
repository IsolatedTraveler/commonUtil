import { webName } from "../../allVar"
import { dealsUrl, getBaseUrl, getParamsUrl } from "../../url"
import { uuid } from "../../util"
import { menuWidow } from "../var"

export function chageTab(id: any, title: any, url: any, data: any) {
  if (url) {
    url = dealsUrl(url, dealsUrl('webs', getBaseUrl()))
    if (data) {
      url = getParamsUrl(data, url)
    }
  }
  setMenuElemVal(id, title, url)
}

function setMenuElemVal(id: any, title: any, url: string | URL | undefined) {
  let elem = menuWidow.$('#tabTitle')
  if (elem.length) {
    elem = elem.find(`[lay-id=${id}]`)
    if (elem.length) {
      const i = elem.index(), el = $(`#tabContent > :nth-child(${i + 1}) iframe`), src = el.attr('src')
      if (url !== src) {
        el.attr('src', url)
      }
      elem.trigger('click')
    } else {
      menuWidow.layui.element.tabAdd('topMenu', { title, id, content: `<iframe frameborder="0" src="${url}"/>` })
      menuWidow.layui.element.tabChange('topMenu', id)
    }
  } else {
    w.open(url, webName + '-' + uuid(), '')
  }
}