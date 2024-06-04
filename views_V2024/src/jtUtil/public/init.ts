import { getConfig } from "../../../g-lobal"
import { initLayui } from "../fun"

export function init() {
  return Promise.all([getConfig(), initLayui()])
}