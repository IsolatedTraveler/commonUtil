import { getUser } from "../../../../g-lobal"
import { kpConfig } from "../var"
import { getKpJgConfig } from "./getKpJgConfig"

export function isOpenFp() {
  // 获取开票参数信息，判断是否开票
  const { jgid } = getUser()
  return kpConfig[jgid] || getKpJgConfig(jgid)
}