// eslint-disable-next-line no-unused-vars
import { pageSize, pageElem } from "../var/index";
import { render } from "./init/render";

export function init(config) {
  pageSize = config.size
  pageElem = $(config.elem || '#page')
  render(config.data)
}