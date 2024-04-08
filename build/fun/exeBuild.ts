import { buildModule } from "../../public"
import { getCode } from "./getCode"
import { judgeBuild } from "./judgeBuild"
import { readDir } from "./readDir"
interface ExeBuildParam {
  fun?: Function
  reName?: string
  ly?: string
  module?: any
  res?: string[]
}
export function exeBuild(
  version: string,
  outMl: Array<string>,
  ml: string,
  moduleName: string,
  { fun, reName, ly = moduleName, module = buildModule }: ExeBuildParam = {}) {
  module = judgeBuild(module, moduleName)
  if (module) {
    return readDir(ml, module).then((res = []) => {
      return buildModuleArr(version, outMl, ml, res, ly, reName, fun, module)
    })
  }
}
export async function buildModuleArr(version: string, outMl: string[], ml: string, res: string[], ly: string, reName?: string, fun?: any, module?: any) {
  let len = res.length
  for (let i = 0; i < len; i++) {
    await (fun || getCode)(res[i], ml, version, outMl, ly, { reName, module })
  }
}