import { paramget } from "../../../../g-lobal"
import { KpJgParam } from "../../type"
import { kpParam } from "../var"

export function setDzpjConfig(jgid: string): Promise<KpJgParam> {
  var data = kpParam[jgid]
  if (!data) {
    return paramget('201021000').then((val: any) => {
      return kpParam[jgid] = {
        sync: val[1] == '同步',
        isPrint: val[2]
      }
    })
  }
  return Promise.resolve(data)
}