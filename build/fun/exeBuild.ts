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
interface BuildModuleArrParam {
  reName?: string
  fun?: Function
  module?: any
  outAddName?: string
}
interface BuildModuleArrRes {
  code: string
  url: string
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
      return buildModuleArr(version, outMl, ml, res, ly, { reName, fun, module })
    })
  }
}
export async function buildModuleArr(
  version: string,
  outMl: string[],
  ml: string,
  res: string[],
  ly: string,
  { reName, fun, module, outAddName } = {} as BuildModuleArrParam
): Promise<Array<BuildModuleArrRes>> {
  let len = res.length, arr = []
  for (let i = 0; i < len; i++) {
    const data = await (fun || getCode)(res[i], ml, version, outMl, ly, { reName, module, outAddName })
    arr.push(data)
  }
  return arr
}