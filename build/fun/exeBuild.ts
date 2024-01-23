import { buildModule } from "../../public"
import { getCode } from "./getCode"
import { judgeBuild } from "./judgeBuild"
import { readDir } from "./readDir"
interface ExeBuildParam {
  fun?: Function
  reName?: string
  ly?: string
  module?: any
}
export function exeBuild(
  version: string,
  outMl: Array<string>,
  ml: string,
  moduleName: string,
  { fun = getCode, reName, ly = moduleName, module = buildModule }: ExeBuildParam = {}) {
  module = judgeBuild(module, moduleName)
  if (module) {
    return readDir(ml, module).then(async (res = []) => {
      let len = res.length
      for (let i = 0; i < len; i++) {
        await fun(res[i], ml, version, outMl, ly, { reName, module })
      }
    })
  }
}