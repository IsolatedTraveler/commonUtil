export const jquery = function (str: string) {
  return new Jquery(str)
}
class Jquery {
  constructor(str: string) {
  }
  eq(i: number) {
    return this
  }
  click() {
    return this
  }
  messager() {
    return this
  }
  alert() {
    return this
  }
  find() {
    const obj = this
    obj[0] = this
    obj[1] = this
    obj[2] = this
    obj[3] = this
    return obj
  }
  html() {
    return this
  }
  contentWindow = window
  0: any
  1: any
  2: any
  3: any
}