import { config } from "GMAddInput"
import { bindEvent } from "./fun"
import { initAdInput } from "./var"

export const Class: any = function (this: any) {
  initAdInput(config)
  bindEvent()
}