export function judgeBuild(module: any, name: string): any {
  var judge = module[name]
  if (judge && (judge === true || Object.keys(judge).length)) {
    return judge
  }
  return false
}