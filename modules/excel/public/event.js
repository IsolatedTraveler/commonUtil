// eslint-disable-next-line no-unused-vars
import { data, fbData, inputFile, zbData } from "../var/index";

export function trigger() {
  data = zbData
  inputFile.click()
}
export function fbTrigger() {
  data = fbData
  inputFile.click()
}