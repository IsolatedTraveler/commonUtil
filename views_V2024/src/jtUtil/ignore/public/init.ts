import { getConfig, initLayui } from "../../../../g-lobal"

export function initJtUtil() {
  return Promise.all([getConfig(), initLayui()])
}