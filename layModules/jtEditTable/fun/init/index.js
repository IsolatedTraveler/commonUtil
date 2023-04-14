import { initEvent } from "./initEvent";
import { initConfig } from "./initConfig";
import { renderTable } from "../render/renderTable";
import { initThird } from "./initThird";
import { startRender } from "../other/changeIsInit";

export function init(config) {
  startRender('init')
  initThird()
  initConfig(config)
  renderTable().then(initEvent)
}