
export function dicget(dm: string) {
  return JSON.parse(getSystemVal("dicget", [dm])).data;
}