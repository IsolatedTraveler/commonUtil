import { initEvent } from "../event/index";
import { initConfig } from "./initConfig";
import { initThird } from "./initThird";

export function init(config) {
  initThird()
  initConfig(config)
  initEvent()
}