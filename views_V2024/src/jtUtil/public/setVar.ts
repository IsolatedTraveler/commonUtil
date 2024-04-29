export function setVar(mkbh: string, name: string, value: any) {
  return GLOBAL$UTIL$V2024$.session(`${mkbh}-${name}`, value)
}