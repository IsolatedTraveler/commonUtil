import { pageElem } from "../../var"
import { renderBody } from "./render/body"
import { renderName } from "./render/name"

export function render(data) {
  document.title = data.title
  pageElem.addClass(data.class)
  pageElem.attr('style', data.style)
  if (data.name) {
    renderName(data.name)
  } else if (data.url) {
    renderName(data.url)
  } else {
    renderBody(data.body, data.id)
  }
}