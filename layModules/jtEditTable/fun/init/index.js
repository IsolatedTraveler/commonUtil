import { initEvent } from "../event/index";
import { closeZzc, openZzc } from "../other/zzc";
import { initConfig } from "./initConfig";
import { initTable } from "./initTable";
import { initThird } from "./initThird";

export function init(config) {
  openZzc()
  initThird()
  initConfig(config)
  initEvent()
  initTable().finally(closeZzc)
}