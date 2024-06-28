import { getConfig, initLayui } from "../../../../g-lobal"
import { LayModule } from "../../type"

export function initJtUtil(items: LayModule[] = ['layer']) {
  return Promise.all([getConfig(), initLayui(items)])
}