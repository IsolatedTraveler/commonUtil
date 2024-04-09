export function strToUrl(str: string, type: string) {
  console.log(str)
  return URL.createObjectURL(new Blob([str], { type }))
}