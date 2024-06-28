import { getUser } from "../../../../g-lobal"
import { dzpjKpConfig } from "../var"
import { getDzpjKpJgConfig } from "./getDzpjKpJgConfig"

export function isOpenFp() {
  // 获取开票参数信息，判断是否开票
  const { jgid } = getUser()
  return dzpjKpConfig[jgid] || getDzpjKpJgConfig(jgid)
}