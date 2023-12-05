import { initEvent } from "./initEvent";
import { initConfig } from "./initConfig";
import { renderTable } from "../render/renderTable";
import { initThird } from "./initThird";

export function init(config) {
  initThird()
  initConfig(config)
  renderTable().then(initEvent)
}