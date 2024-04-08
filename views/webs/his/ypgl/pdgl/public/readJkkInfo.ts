import { enterJkkNumber } from "../fun/pop"
import { JkkInfo, setJkkInfoPromise } from "../var"

export function readJkkInfo(): Promise<JkkInfo> {
  return new Promise((resolve, reject) => {
    setJkkInfoPromise(resolve, reject)
    enterJkkNumber()
  })
}