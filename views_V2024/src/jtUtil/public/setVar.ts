import { session } from "../../../g-lobal";

export function setVar(mkbh: string, name: string, value?: any) {
  return session(`${mkbh}-${name}`, value)
}