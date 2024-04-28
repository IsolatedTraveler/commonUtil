import { setPageTemp } from "../../util"
import { configData, setConfigData } from "../var"

export function getConfig(key: string = ''): any {
  setPageTemp(configData, setConfigData)
  return key ? configData[key] : configData
}