import { initEvent } from "./initEvent";
import { closeZzc, openZzc } from "../other/zzc";
import { initConfig } from "./initConfig";
import { renderTable } from "../render/renderTable";
import { initThird } from "./initThird";

export function init(config) {
  openZzc()
  initThird()
  initConfig(config)
  renderTable().then(closeZzc).then(initEvent)
}