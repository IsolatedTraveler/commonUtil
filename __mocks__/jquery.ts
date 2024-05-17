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
}