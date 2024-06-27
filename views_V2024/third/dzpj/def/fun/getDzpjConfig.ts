import { setIsPrint, setSync } from "../var"
import { setDzpjConfig } from "./setDzpjConfig"

export function getDzpjConfig(jgid: string) {
  return setDzpjConfig(jgid).then((data) => {
    setSync(data.sync)
    setIsPrint(data.isPrint)
  })
}