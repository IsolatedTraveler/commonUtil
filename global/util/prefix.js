export function prefix(v = '', len = 2, prefix = '000000', prefixLength = 6) {
  return (prefix + v).substring(prefixLength + v.toString().length - len)
}
export default {
  prefix
}