// eslint-disable-next-line no-unused-vars
import { pageSize, pageElem } from "../var";
import { render } from "./init/render";

export function init(config) {
  pageSize = config.pageSize
  pageElem = $(config.elem || 'page')
  render(config.data)
}