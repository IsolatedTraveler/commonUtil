import { setDzpjKpIsPrint, setDzpjKpSync } from "../var"
import { setDzpjConfig } from "./setDzpjConfig"

export function getDzpjConfig(jgid: string) {
  return setDzpjConfig(jgid).then((data) => {
    setDzpjKpSync(data.sync)
    setDzpjKpIsPrint(data.isPrint)
  })
}