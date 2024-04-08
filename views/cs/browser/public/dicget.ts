
export function dicget(dm: string) {
  return JSON.parse(GLOBAL$BROWSER$.getSystemVal("dicget", [dm])).data;
}