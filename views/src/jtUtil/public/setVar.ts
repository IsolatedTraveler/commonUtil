export function setVar(mkbh: string, name: string, value: any) {
  return GLOBAL$TEMP$.session(`${mkbh}-${name}`, value)
}