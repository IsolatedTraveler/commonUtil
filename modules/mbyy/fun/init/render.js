import { pageElem } from "../../var/index"
import { renderBody } from "./render/body"
import { renderName } from "./render/name"
import { renderUrl } from "./render/url"

export function render(data) {
  document.title = data.title
  pageElem.addClass(data.class)
  pageElem.attr('style', data.style)
  if (data.name) {
    pageElem.html(renderName(data.name))
  } else if (data.url) {
    pageElem.html(renderUrl(data.url))
  } else {
    pageElem.html(renderBody(data.body, data.id))
  }
}