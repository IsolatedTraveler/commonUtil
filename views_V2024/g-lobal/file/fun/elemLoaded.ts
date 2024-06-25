export function elemLoaded(this: any, e: any, resolve: Function, reject: Function) {
  if (e.type === 'load') {
    resolve()
  } else {
    reject()
  }
}