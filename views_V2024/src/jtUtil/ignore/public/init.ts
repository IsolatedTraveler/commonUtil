import { getConfig } from "../../../../g-lobal"
import { initLayui } from "../../fun"

export function initJtUtil() {
  return Promise.all([getConfig(), initLayui()])
}