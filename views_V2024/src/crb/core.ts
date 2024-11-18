import { getConfig } from "../../g-lobal/common/system"

export var that: any
export const Class: any = function (this: any) {
  that = this
  getConfig()
}