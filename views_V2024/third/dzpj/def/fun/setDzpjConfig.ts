import { paramget } from "../../../../g-lobal"
import { DzpjKpJgParam } from "../../type"
import { dzpjKpParam } from "../var"

export function setDzpjConfig(jgid: string): Promise<DzpjKpJgParam> {
  var data = dzpjKpParam[jgid]
  if (!data) {
    return paramget('201021000').then((val: any) => {
      return dzpjKpParam[jgid] = {
        sync: val[1] == '同步',
        isPrint: val[2]
      }
    })
  }
  return Promise.resolve(data)
}